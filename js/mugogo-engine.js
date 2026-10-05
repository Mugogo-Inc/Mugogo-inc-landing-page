/**
 * Mugogo Engine Universal SDK
 * Captures Partial Submissions, Full Form Submissions, and Ad Attribution
 */
(function () {
  // CONFIGURATION
  const DEFAULT_BU_ID = "25217301-11c6-487b-b905-4b2fb290373b"; // Fallback BU ID
  const WORKER_BASE = "https://mugogo-lead-router.mugogo2022.workers.dev";

  // Helper to extract ad tracking parameters
  function getAdTrackingParams() {
    const params = new URLSearchParams(window.location.search);
    return {
      gclid: params.get("gclid") || null,
      fbclid: params.get("fbclid") || null,
      utm_source: params.get("utm_source") || null,
      utm_medium: params.get("utm_medium") || null,
      utm_campaign: params.get("utm_campaign") || null,
      utm_term: params.get("utm_term") || null,
      utm_content: params.get("utm_content") || null,
    };
  }

  // Universal payload builder supporting flexible form IDs
  function buildPayload(formElement, eventType) {
    const adData = getAdTrackingParams();
    
    // Support flexible ID lookups (#fullName or #name or #applicantName)
    const nameInput = formElement.querySelector("#fullName, #name, #applicantName")?.value?.trim() || "";
    const phoneInput = formElement.querySelector("#phone, #phoneNumber, #applicantPhone, #phoneNo")?.value?.trim() || "";
    const emailInput = formElement.querySelector("#email, #applicantEmail")?.value?.trim() || "";
    const serviceInput = formElement.querySelector("#service, #packageSelected")?.value || "";
    const messageInput = formElement.querySelector("#message, #notes, #projectDesc")?.value?.trim() || "";

    return {
      event_type: eventType, // 'partial_submission' or 'full_submission'
      full_name: nameInput || "Anonymous Lead",
      phone_number: phoneInput,
      email: emailInput || null,
      service_interested: serviceInput || null,
      message: messageInput || null,
      page_url: window.location.href,
      // Ad Attribution Parameters
      gclid: adData.gclid,
      fbclid: adData.fbclid,
      utm_source: adData.utm_source,
      utm_medium: adData.utm_medium,
      utm_campaign: adData.utm_campaign,
      utm_term: adData.utm_term,
      utm_content: adData.utm_content,
    };
  }

  // Bind lead tracking to a target form
  window.initMugogoTracker = function (formSelector, customBuId) {
    const form = document.querySelector(formSelector);
    if (!form) return;

    const buId = customBuId || form.getAttribute("data-bu-id") || DEFAULT_BU_ID;
    const targetUrl = `${WORKER_BASE}/?bu_id=${buId}`;

    const phoneInput = form.querySelector("#phone, #phoneNumber, #applicantPhone, #phoneNo");
    const emailInput = form.querySelector("#email, #applicantEmail");

    // 1. Partial Lead Capture on Field Blur / Typing Pause
    let debounceTimer;
    function sendPartialCapture() {
      const phone = phoneInput?.value?.trim() || "";
      const email = emailInput?.value?.trim() || "";

      if (phone.length >= 10 || email.includes("@")) {
        const payload = buildPayload(form, "partial_submission");

        fetch(targetUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }).catch((err) => console.debug("[Mugogo SDK] Partial capture deferred", err));
      }
    }

    [phoneInput, emailInput].forEach((input) => {
      if (!input) return;
      input.addEventListener("blur", sendPartialCapture);
      input.addEventListener("input", () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(sendPartialCapture, 2500);
      });
    });

    // 2. Full Form Submission
    form.addEventListener("submit", async function () {
      const payload = buildPayload(form, "full_submission");

      try {
        await fetch(targetUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } catch (err) {
        console.error("[Mugogo SDK] Submission error:", err);
      }
    });
  };

  // Expose global helper
  window.getAdTrackingParams = getAdTrackingParams;
})();
