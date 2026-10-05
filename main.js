import { heroText, heroImg } from "./gsap/main";
import "./style.css";

document.querySelector("#app").innerHTML = `
  <div>
    <!-- Navigation Header -->
    <header class="header-nav">
      <div class="container nav-container">
        <a href="#" class="navbar-logo" aria-label="Mugogo Inc Homepage">
          <img src="/logo_t.png" alt="Mugogo Inc Logo" />
          <span class="brand-title">Mugogo<span>.inc</span></span>
        </a>

        <nav aria-label="Main Navigation">
          <ul class="nav-menu" id="navMenu">
            <li><a href="#about" class="nav-link">About Us</a></li>
            <li><a href="#services" class="nav-link">Services</a></li>
            <li><a href="#packages" class="nav-link">Packages</a></li>
            <li><a href="#process" class="nav-link">Process</a></li>
            <li><a href="#work" class="nav-link">Work</a></li>
            <li><a href="#partners" class="nav-link">Partners</a></li>
            <li><a href="#contact" class="nav-link">Contact</a></li>
          </ul>
        </nav>

        <div class="nav-actions">
          <a href="#contact" class="btn btn-primary">Get a Quote</a>
          <button class="nav-toggle" id="navToggle" aria-label="Toggle Navigation Drawer">
            <span class="material-symbols-outlined" id="menuIcon">menu</span>
          </button>
        </div>
      </div>
    </header>

    <main>
      <!-- Hero Section -->
      <section class="hero-section" id="hero">
        <div class="container hero-grid">
          <div class="hero-content">
            <div class="badge">
              <span class="material-symbols-outlined icon-filled" style="font-size:1.1rem;">trending_up</span> Digital Marketing & Software Solutions
            </div>
            <h1 class="hero-title">
              Data-Driven <span>Digital Marketing</span> & Enterprise Software
            </h1>
            <p class="hero-desc">
              We engineer modern web & mobile software applications and run targeted digital marketing strategies that turn your business vision into scalable market success.
            </p>

            <div class="hero-buttons">
              <a href="#packages" class="btn btn-primary">
                View Packages <span class="material-symbols-outlined" style="font-size:1.1rem;">arrow_forward</span>
              </a>
              <a href="#contact" class="btn btn-outline">
                Book Consultation
              </a>
            </div>

            <div class="hero-stats">
              <div class="stat-item">
                <h3>50+</h3>
                <p>Projects Delivered</p>
              </div>
              <div class="stat-item">
                <h3>99.9%</h3>
                <p>Uptime & Security</p>
              </div>
              <div class="stat-item">
                <h3>10x</h3>
                <p>Data-Driven ROI</p>
              </div>
            </div>
          </div>

          <div class="hero-image-cont">
            <img src="/heroo.svg" alt="Digital Marketing and Software Engineering Solutions" width="460" height="380" />
          </div>
        </div>
      </section>

      <!-- Section Line Counter -->
      <div class="container">
        <div class="section-line">
          <div class="section-counter">01 / <span>05</span></div>
        </div>
      </div>

      <!-- About Section -->
      <section class="about-section" id="about">
        <div class="container about-grid">
          <div class="about-card">
            <span class="section-subtitle">Our Philosophy</span>
            <h3>Human Connections <span>First</span>, Code Second</h3>
            <p>
              Our success rests in genuine relationships between people. At Mugogo Inc, we combine constant evolution with constant adaptation to ensure your business thrives in the modern digital era.
            </p>
            <ul class="features-list">
              <li><span class="material-symbols-outlined icon-filled">check_circle</span> Open Source Transparency & Total Product Control</li>
              <li><span class="material-symbols-outlined icon-filled">check_circle</span> Data-Backed Marketing Campaigns</li>
              <li><span class="material-symbols-outlined icon-filled">check_circle</span> Agile Engineering with Continuous Integration</li>
            </ul>
          </div>

          <div class="about-card" style="display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center;">
            <img src="/differ.svg" alt="Innovation and Software Engineering at Mugogo Inc" style="max-height: 260px; margin-bottom: 1.5rem;" />
            <h3>We Do Things Differently</h3>
            <p style="margin-bottom:0;">
              A dedicated team of senior engineers and digital marketing strategists committed to exceeding your expectations.
            </p>
          </div>
        </div>
      </section>

      <!-- Section Line Counter -->
      <div class="container">
        <div class="section-line">
          <div class="section-counter">02 / <span>05</span></div>
        </div>
      </div>

      <!-- Services Section (Retained All Core Pillars) -->
      <section class="services-section" id="services">
        <div class="container">
          <div class="section-header">
            <span class="section-subtitle">Our Core Offerings</span>
            <h2 class="section-title">Solution & Technology Services</h2>
            <p class="section-desc">
              Choose from our comprehensive suite of digital marketing and software services designed to accelerate your growth.
            </p>
          </div>

          <div class="services-grid">
            <!-- 1. Digital Marketing & SEO -->
            <article class="service-card">
              <div class="service-icon">
                <span class="material-symbols-outlined icon-filled">campaign</span>
              </div>
              <h3>Digital Marketing & SEO</h3>
              <p>
                Take your business to the next level with our perfect digital marketing campaigns, Search Engine Optimization (SEO), PPC ads, and conversion rate optimization.
              </p>
              <span class="service-tag"><span class="material-symbols-outlined" style="font-size:0.9rem;">trending_up</span> Growth & Brand Scaling</span>
            </article>

            <!-- 2. Web Application Development -->
            <article class="service-card">
              <div class="service-icon">
                <span class="material-symbols-outlined icon-filled">language</span>
              </div>
              <h3>Web Application & Development</h3>
              <p>
                Mugogo develops responsive, high-performance web applications using state-of-the-art modern frameworks and scalable APIs.
              </p>
              <span class="service-tag"><span class="material-symbols-outlined" style="font-size:0.9rem;">code</span> Full-Stack Engineering</span>
            </article>

            <!-- 3. Mobile App Development -->
            <article class="service-card">
              <div class="service-icon">
                <span class="material-symbols-outlined icon-filled">smartphone</span>
              </div>
              <h3>Cross-Platform Mobile Apps</h3>
              <p>
                Secure our engineering team to perform cross-platform mobile development for iOS and Android with fluid performance and native UI.
              </p>
              <span class="service-tag"><span class="material-symbols-outlined" style="font-size:0.9rem;">devices</span> iOS & Android</span>
            </article>

            <!-- 4. Cloud Computing & Infrastructure -->
            <article class="service-card">
              <div class="service-icon">
                <span class="material-symbols-outlined icon-filled">cloud</span>
              </div>
              <h3>Cloud Computing & Infrastructure</h3>
              <p>
                Mugogo helps clients scale their cloud services and backend systems on AWS, Netlify, and Google Cloud Platform with zero downtime.
              </p>
              <span class="service-tag"><span class="material-symbols-outlined" style="font-size:0.9rem;">settings_suggest</span> DevOps & Cloud</span>
            </article>

            <!-- 5. UI/UX Design -->
            <article class="service-card">
              <div class="service-icon">
                <span class="material-symbols-outlined icon-filled">palette</span>
              </div>
              <h3>UI/UX Design</h3>
              <p>
                Transform complex user interactions into intuitive visual interfaces through detailed user research, wireframing, and interactive design prototypes.
              </p>
              <span class="service-tag"><span class="material-symbols-outlined" style="font-size:0.9rem;">brush</span> User Experience Design</span>
            </article>

            <!-- 6. Machine Learning & Big Data -->
            <article class="service-card">
              <div class="service-icon">
                <span class="material-symbols-outlined icon-filled">psychology</span>
              </div>
              <h3>Machine Learning & Big Data</h3>
              <p>
                As companies thrive in today's competitive business environment, we provide key metrics and intelligent models to drive data-driven decisions.
              </p>
              <span class="service-tag"><span class="material-symbols-outlined" style="font-size:0.9rem;">analytics</span> AI & Data Analytics</span>
            </article>
          </div>
        </div>
      </section>

      <!-- Section Line Counter -->
      <div class="container">
        <div class="section-line">
          <div class="section-counter">03 / <span>05</span></div>
        </div>
      </div>

      <!-- Packages Section -->
      <section class="packages-section" id="packages">
        <div class="container">
          <div class="section-header">
            <span class="section-subtitle">Tailored Solutions</span>
            <h2 class="section-title">Service Packages & Proposals</h2>
            <p class="section-desc">
              Select a package designed specifically for your business size and geographic market to apply instantly.
            </p>
          </div>

          <div class="packages-grid">
            <!-- Package 1: SME Kenya -->
            <article class="package-card">
              <span class="package-badge">Popular in Kenya</span>
              <h3>SME Kenya</h3>
              <span class="package-type">Small & Medium Business (Kenya)</span>
              <p>Comprehensive digital marketing & web solutions optimized for local Kenyan market growth.</p>
              <ul class="package-features">
                <li><span class="material-symbols-outlined icon-filled">check</span> Custom Web & Mobile Solution</li>
                <li><span class="material-symbols-outlined icon-filled">check</span> Local Kenya SEO & Google Ads</li>
                <li><span class="material-symbols-outlined icon-filled">check</span> Social Media Brand Campaign</li>
                <li><span class="material-symbols-outlined icon-filled">check</span> Dedicated Support & Hosting</li>
              </ul>
              <button class="btn btn-primary open-package-modal" data-package="SME Kenya" data-pdf="/SME Proposal-Kenya.pdf">
                Apply for Package <span class="material-symbols-outlined" style="font-size:1.1rem;">arrow_forward</span>
              </button>
            </article>

            <!-- Package 2: SME International -->
            <article class="package-card highlight">
              <span class="package-badge">Global Scale</span>
              <h3>SME International</h3>
              <span class="package-type">Small & Medium Business (Global)</span>
              <p>Scalable web & mobile architecture tailored for international startups and expanding SMEs.</p>
              <ul class="package-features">
                <li><span class="material-symbols-outlined icon-filled">check</span> Multi-Currency Global Web App</li>
                <li><span class="material-symbols-outlined icon-filled">check</span> International SEO & PPC Ads</li>
                <li><span class="material-symbols-outlined icon-filled">check</span> Cloud Infrastructure (AWS / GCP)</li>
                <li><span class="material-symbols-outlined icon-filled">check</span> 24/7 Global SLA Support</li>
              </ul>
              <button class="btn btn-primary open-package-modal" data-package="SME International" data-pdf="/SME Proposal-International.pdf">
                Apply for Package <span class="material-symbols-outlined" style="font-size:1.1rem;">arrow_forward</span>
              </button>
            </article>

            <!-- Package 3: Corporate Kenya -->
            <article class="package-card">
              <h3>Corporate Kenya</h3>
              <span class="package-type">Enterprise Solution (Kenya)</span>
              <p>Enterprise-grade software systems, dedicated engineering teams, and corporate brand positioning.</p>
              <ul class="package-features">
                <li><span class="material-symbols-outlined icon-filled">check</span> Enterprise Custom Software Architecture</li>
                <li><span class="material-symbols-outlined icon-filled">check</span> High-Volume Digital Marketing</li>
                <li><span class="material-symbols-outlined icon-filled">check</span> Security & Compliance Integration</li>
                <li><span class="material-symbols-outlined icon-filled">check</span> Dedicated Account Manager</li>
              </ul>
              <button class="btn btn-primary open-package-modal" data-package="Corporate Kenya" data-pdf="/Corporate Proposal-Kenya.pdf">
                Apply for Package <span class="material-symbols-outlined" style="font-size:1.1rem;">arrow_forward</span>
              </button>
            </article>

            <!-- Package 4: Corporate International -->
            <article class="package-card">
              <span class="package-badge">Global Enterprise</span>
              <h3>Corporate International</h3>
              <span class="package-type">Enterprise Solution (Global)</span>
              <p>Advanced multi-market software ecosystem, AI/Big Data analytics, and global marketing strategies.</p>
              <ul class="package-features">
                <li><span class="material-symbols-outlined icon-filled">check</span> Multi-Market Software Ecosystem</li>
                <li><span class="material-symbols-outlined icon-filled">check</span> Machine Learning & Big Data Analytics</li>
                <li><span class="material-symbols-outlined icon-filled">check</span> Global Omni-Channel Marketing</li>
                <li><span class="material-symbols-outlined icon-filled">check</span> Dedicated Engineering Team</li>
              </ul>
              <button class="btn btn-primary open-package-modal" data-package="Corporate International" data-pdf="/Corporate Proposal-International.pdf">
                Apply for Package <span class="material-symbols-outlined" style="font-size:1.1rem;">arrow_forward</span>
              </button>
            </article>
          </div>
        </div>
      </section>

      <!-- Section Line Counter -->
      <div class="container">
        <div class="section-line">
          <div class="section-counter">04 / <span>05</span></div>
        </div>
      </div>

      <!-- Signature Process Section -->
      <section class="process-section" id="process">
        <div class="container">
          <div class="section-header">
            <span class="section-subtitle">How We Work</span>
            <h2 class="section-title">Process & Control</h2>
            <p class="section-desc">
              We have spent years refining a signature process that delivers predictable, high-impact results for every digital product and campaign.
            </p>
          </div>

          <div class="process-grid">
            <div class="process-card">
              <div class="process-number">01</div>
              <h3>User & Problem Discovery</h3>
              <p>What problems are users facing? We analyze user pain points and market opportunities to define clear requirements.</p>
            </div>

            <div class="process-card">
              <div class="process-number">02</div>
              <h3>Brand Strategy Alignment</h3>
              <p>We align technical and creative solutions with your brand's long-term commercial goals and market positioning.</p>
            </div>

            <div class="process-card">
              <div class="process-number">03</div>
              <h3>User Persona & Research</h3>
              <p>We compile behavioral trends, customer identities, and relevant information to tailor every touchpoint.</p>
            </div>

            <div class="process-card">
              <div class="process-number">04</div>
              <h3>Design & Engineering</h3>
              <p>We map the entire user journey while interacting with a product, writing clean code and scalable diagrams.</p>
            </div>

            <div class="process-card">
              <div class="process-number">05</div>
              <h3>Interactive Prototyping</h3>
              <p>We create functional prototypes to test user experiences, gathering real client feedback before final launch.</p>
            </div>

            <div class="process-card">
              <div class="process-number">06</div>
              <h3>Launch & Optimization</h3>
              <p>Product is ready for launch! We ensure full client satisfaction and continuous optimization after release.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Our Partners Section -->
      <section class="partners-section" id="partners">
        <div class="container">
          <div class="section-header">
            <span class="section-subtitle">Trusted By</span>
            <h2 class="section-title">Our Partners</h2>
            <p class="section-desc">
              We collaborate with leading local brands and businesses to deliver outstanding digital experiences.
            </p>
          </div>
          <div class="partners-grid">
            <a href="https://jambianibeautyspa.com/" target="_blank" rel="noopener noreferrer" class="partner-link" title="Visit Jambiani Beauty Spa">
              <img src="/jambiani.png" alt="Jambiani Beauty Spa Partner Logo" class="partner-logo" loading="lazy" />
            </a>
            <a href="https://zanzibarsportfishing.com/" target="_blank" rel="noopener noreferrer" class="partner-link" title="Visit Zanzibar Sports Club">
              <img src="/zanzibar.png" alt="Zanzibar Sports Club Partner Logo" class="partner-logo" loading="lazy" />
            </a>
            <a href="https://mnaranicinnamonspa.com/" target="_blank" rel="noopener noreferrer" class="partner-link" title="Visit Mnarani Cinnamon Spa">
              <img src="/cinn.png" alt="Mnarani Cinnamon Spa Partner Logo" class="partner-logo" loading="lazy" />
            </a>
            <a href="https://www.beachholidaytours.com" target="_blank" rel="noopener noreferrer" class="partner-link" title="Visit Beach Holiday Tours and Safari">
              <img src="/beachholidaytours.png" alt="Beach Holiday Tours and Safari Partner Logo" class="partner-logo" loading="lazy" />
            </a>
            <a href="https://www.nungwifishingadventures.com/" target="_blank" rel="noopener noreferrer" class="partner-link" title="Visit Nungwi Fishing Adventures">
              <img src="/fising.png" alt="Nungwi Fishing Adventures Partner Logo" class="partner-logo" loading="lazy" />
            </a>
          </div>
        </div>
      </section>

      <!-- Interactive Contact & Lead Capture Section -->
      <section class="contact-section" id="contact">
        <div class="container">
          <div class="section-header">
            <span class="section-subtitle">Let's Connect</span>
            <h2 class="section-title">Start Your Project With Mugogo</h2>
            <p class="section-desc">
              Ready to accelerate your brand through digital marketing or custom software solutions? Reach out to us today.
            </p>
          </div>

          <div class="contact-grid">
            <div class="contact-info-box">
              <div class="contact-item">
                <div class="contact-icon"><span class="material-symbols-outlined icon-filled">location_on</span></div>
                <div class="contact-details">
                  <h4>Headquarters</h4>
                  <p>Nairobi, Kenya</p>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon"><span class="material-symbols-outlined icon-filled">mail</span></div>
                <div class="contact-details">
                  <h4>Email Us</h4>
                  <p><a href="mailto:info@mugogoinc.com">info@mugogoinc.com</a></p>
                  <p><a href="mailto:customerservice@mugogoinc.com">customerservice@mugogoinc.com</a></p>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon"><i class="fa-brands fa-whatsapp" style="font-size:1.3rem;"></i></div>
                <div class="contact-details">
                  <h4>WhatsApp Direct</h4>
                  <p><a href="https://wa.me/254721902248" target="_blank" rel="noopener noreferrer">+254 721 902 248</a></p>
                </div>
              </div>
            </div>

            <form class="contact-form" id="leadForm">
              <div class="form-group">
                <label for="name">Your Name</label>
                <input type="text" id="name" required placeholder="John Doe" class="form-control" />
              </div>

              <div class="form-group">
                <label for="email">Work Email</label>
                <input type="email" id="email" required placeholder="john@company.com" class="form-control" />
              </div>

              <div class="form-group">
                <label for="phone">Phone Number</label>
                <input type="tel" id="phone" required placeholder="+254721902248" class="form-control" />
              </div>

              <div class="form-group">
                <label for="service">Service Interested In</label>
                <select id="service" class="form-control" required>
                  <option value="">Select a Service...</option>
                  <option value="Digital Marketing & SEO">Digital Marketing & SEO</option>
                  <option value="Web Application Development">Web Application Development</option>
                  <option value="Cross-Platform Mobile App">Cross-Platform Mobile App</option>
                  <option value="Cloud Computing & Infrastructure">Cloud Computing & Infrastructure</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Machine Learning & Big Data">Machine Learning & Big Data</option>
                </select>
              </div>

              <div class="form-group">
                <label for="message">Project Details</label>
                <textarea id="message" required placeholder="Tell us about your requirements, timeline, and goals..." class="form-control"></textarea>
              </div>

              <button type="submit" class="btn btn-primary" style="width: 100%;">
                Send Message <span class="material-symbols-outlined" style="font-size:1.1rem;">send</span>
              </button>
              <p id="formFeedback" style="font-size:0.875rem; text-align:center; display:none;"></p>
            </form>
          </div>
        </div>
      </section>
    </main>

    <!-- Interactive Package Application Modal -->
    <div class="modal-overlay" id="packageModal">
      <div class="modal-card">
        <button class="modal-close" id="modalCloseBtn" aria-label="Close Modal"><span class="material-symbols-outlined">close</span></button>

        <div class="modal-header">
          <h3 id="modalPackageTitle">Apply for Package</h3>
          <p>Fill in your business details below to get started with this package.</p>
        </div>

        <form id="packageForm">
          <input type="hidden" id="selectedPackagePdf" value="" />

          <div class="form-group" style="margin-bottom: 1rem;">
            <label for="pkgNameInput">Selected Package</label>
            <input type="text" id="pkgNameInput" readonly class="form-control" style="background:#f1f5f9; font-weight:700; color:var(--color-primary);" />
          </div>

          <div class="form-group" style="margin-bottom: 1rem;">
            <label for="applicantName">Full Name *</label>
            <input type="text" id="applicantName" required placeholder="e.g. Jane Doe" class="form-control" />
          </div>

          <div class="form-group" style="margin-bottom: 1rem;">
            <label for="orgName">Business / Organization Name *</label>
            <input type="text" id="orgName" required placeholder="e.g. Acme Corporation" class="form-control" />
          </div>

          <div class="form-group" style="margin-bottom: 1rem;">
            <label for="phoneNo">Phone Number *</label>
            <input type="tel" id="phoneNo" required placeholder="e.g. +254 712 345 678" class="form-control" />
          </div>

          <div class="form-group" style="margin-bottom: 1rem;">
            <label for="applicantEmail">Email Address *</label>
            <input type="email" id="applicantEmail" required placeholder="e.g. jane@acme.com" class="form-control" />
          </div>

          <div class="form-group" style="margin-bottom: 1.5rem;">
            <label for="projectDesc">Project Description / Requirements (Optional)</label>
            <textarea id="projectDesc" placeholder="Describe your business goals, preferred launch date, or specific questions..." class="form-control"></textarea>
          </div>

          <button type="submit" class="btn btn-primary" style="width: 100%;">
            Send Package Application <span class="material-symbols-outlined" style="font-size:1.1rem;">send</span>
          </button>
          <div id="pkgFormFeedback" style="font-size:0.9rem; text-align:center; display:none; margin-top:1rem;"></div>
        </form>
      </div>
    </div>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-top">
          <div class="footer-brand">
            <a href="#" class="navbar-logo">
              <img src="/logo_t.png" alt="Mugogo Inc Logo" />
              <span class="brand-title">Mugogo<span>.inc</span></span>
            </a>
            <p>
              Reimagining possibilities in digital marketing and enterprise software development.
            </p>
          </div>

          <div class="footer-col">
            <h4>Quick Links</h4>
            <ul class="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#packages">Packages</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#work">Portfolio</a></li>
              <li><a href="#partners">Partners</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Services</h4>
            <ul class="footer-links">
              <li><a href="#services">Digital Marketing</a></li>
              <li><a href="#services">Web Applications</a></li>
              <li><a href="#services">Mobile Apps</a></li>
              <li><a href="#services">Cloud Infrastructure</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Contact Info</h4>
            <ul class="footer-links">
              <li><span class="material-symbols-outlined icon-filled" style="font-size:1rem;">mail</span> info@mugogoinc.com</li>
              <li><span class="material-symbols-outlined icon-filled" style="font-size:1rem;">phone</span> +254 721 902 248</li>
              <li><span class="material-symbols-outlined icon-filled" style="font-size:1rem;">location_on</span> Nairobi, Kenya</li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; Infinity, Mugogo Inc</p>
          <div class="social-links">
            <a href="#" aria-label="Facebook" class="social-icon"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter" class="social-icon"><i class="fa-brands fa-x-twitter"></i></a>
            <a href="#" aria-label="LinkedIn" class="social-icon"><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="#" aria-label="Instagram" class="social-icon"><i class="fa-brands fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  </div>
`;

// ── Mobile Navigation Drawer Toggle ───────────────────────────────────────
const navToggle = document.querySelector("#navToggle");
const navMenu = document.querySelector("#navMenu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    const icon = navToggle.querySelector("#menuIcon");
    if (navMenu.classList.contains("active")) {
      if (icon) icon.textContent = "close";
      document.body.style.overflow = "hidden";
    } else {
      if (icon) icon.textContent = "menu";
      document.body.style.overflow = "";
    }
  });

  // Auto-close menu when a link is tapped
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      document.body.style.overflow = "";
      const icon = navToggle.querySelector("#menuIcon");
      if (icon) icon.textContent = "menu";
    });
  });
}

// Package Modal Logic
const modalOverlay = document.querySelector("#packageModal");
const modalCloseBtn = document.querySelector("#modalCloseBtn");
const modalPackageTitle = document.querySelector("#modalPackageTitle");
const pkgNameInput = document.querySelector("#pkgNameInput");
const selectedPackagePdf = document.querySelector("#selectedPackagePdf");
const packageForm = document.querySelector("#packageForm");
const pkgFormFeedback = document.querySelector("#pkgFormFeedback");

document.querySelectorAll(".open-package-modal").forEach((btn) => {
  btn.addEventListener("click", () => {
    const pkgName = btn.getAttribute("data-package");
    const pdfUrl = btn.getAttribute("data-pdf");

    if (pkgNameInput) pkgNameInput.value = pkgName;
    if (modalPackageTitle) modalPackageTitle.innerText = `Apply for ${pkgName}`;
    if (selectedPackagePdf) selectedPackagePdf.value = pdfUrl || "";
    if (pkgFormFeedback) pkgFormFeedback.style.display = "none";

    if (modalOverlay) modalOverlay.classList.add("active");
  });
});

if (modalCloseBtn && modalOverlay) {
  modalCloseBtn.addEventListener("click", () => {
    modalOverlay.classList.remove("active");
  });

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove("active");
    }
  });
}

// Helper to extract UTM & Click IDs from current URL
function getUrlAttribution() {
  const urlParams = new URLSearchParams(window.location.search);
  return {
    gclid: urlParams.get('gclid') || null,
    fbclid: urlParams.get('fbclid') || null,
    utm_source: urlParams.get('utm_source') || null,
    utm_medium: urlParams.get('utm_medium') || null,
    utm_campaign: urlParams.get('utm_campaign') || null,
    utm_term: urlParams.get('utm_term') || null,
    utm_content: urlParams.get('utm_content') || null,
  };
}

// Package Form Partial Capture Listener
const pkgPhone = document.getElementById('phoneNo');
const pkgEmail = document.getElementById('applicantEmail');
let pkgPartialTimer;

function sendPkgPartial() {
  const phone = pkgPhone?.value?.trim() || '';
  const email = pkgEmail?.value?.trim() || '';

  if (phone.length >= 10 || email.includes('@')) {
    const attribution = getUrlAttribution();
    const payload = {
      event_type: 'partial_submission',
      full_name: document.getElementById('applicantName')?.value || 'Partial Lead',
      phone_number: phone,
      email: email,
      org_name: document.getElementById('orgName')?.value || null,
      package_name: document.getElementById('pkgNameInput')?.value || null,
      message: document.getElementById('projectDesc')?.value || null,
      ...attribution,
    };

    const BU_ID = "25217301-11c6-487b-b905-4b2fb290373b";
    const WORKER_URL = `https://mugogo-lead-router.mugogo2022.workers.dev/?bu_id=${BU_ID}`;

    fetch(WORKER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }).catch((err) => console.debug('Partial package lead sync deferred', err));
  }
}

if (pkgPhone || pkgEmail) {
  [pkgPhone, pkgEmail].forEach((input) => {
    if (!input) return;
    input.addEventListener('blur', sendPkgPartial);
    input.addEventListener('input', () => {
      clearTimeout(pkgPartialTimer);
      pkgPartialTimer = setTimeout(sendPkgPartial, 2500);
    });
  });
}

if (packageForm) {
  packageForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const pkgName = pkgNameInput.value;
    const pdfUrl = selectedPackagePdf.value;

    const submitBtn = packageForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = 'Sending...';
    submitBtn.disabled = true;

    const BU_ID = "25217301-11c6-487b-b905-4b2fb290373b";
    const WORKER_URL = `https://mugogo-lead-router.mugogo2022.workers.dev/?bu_id=${BU_ID}`;

    const attribution = getUrlAttribution();
    const payload = {
      event_type: "full_submission",
      source_channel: "LANDING_PAGE",
      full_name: document.querySelector("#applicantName").value,
      email: document.querySelector("#applicantEmail").value,
      phone_number: document.querySelector("#phoneNo").value,
      org_name: document.querySelector("#orgName").value,
      package_name: pkgName,
      message: document.querySelector("#projectDesc").value,
      ...attribution,
    };

    try {
      // Send to Cloudflare Worker Pipeline
      const response = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`Worker returned HTTP status ${response.status}`);
      }

      pkgFormFeedback.style.display = "block";
      pkgFormFeedback.style.color = "var(--color-primary)";
      pkgFormFeedback.innerHTML = `
        <p style="margin-bottom:0.5rem; font-weight:600;">
          <i class="fa-solid fa-circle-check"></i> Thank you! Redirecting to WhatsApp to complete your application...
        </p>
        ${pdfUrl ? `<a href="${pdfUrl}" download class="btn btn-outline" style="padding:0.4rem 0.8rem; font-size:0.8rem; margin-top:0.5rem;"><i class="fa-solid fa-file-pdf"></i> Download ${pkgName} Proposal PDF</a>` : ""}
      `;

      // WhatsApp Delivery & Booking Feature
      const waMessage = `Hello Mugogo Inc! I just applied for the *${pkgName}* package.\n\n*Name:* ${payload.full_name}\n*Org:* ${payload.org_name}\n*Email:* ${payload.email}\n*Details:* ${payload.message || 'N/A'}`;
      const waUrl = `https://wa.me/254721902248?text=${encodeURIComponent(waMessage)}`;
      
      setTimeout(() => {
        window.open(waUrl, '_blank');
      }, 1000);

      packageForm.reset();
      if (pkgNameInput) pkgNameInput.value = pkgName;
    } catch (error) {
      console.error(error);
      pkgFormFeedback.style.display = "block";
      pkgFormFeedback.style.color = "red";
      pkgFormFeedback.innerText = "There was an error submitting your application. Please try again.";
    } finally {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }
  });
}

// Swiper Portfolio Carousel Initialization
if (window.Swiper) {
  new window.Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
}

// Contact Form Handler & Partial Capture
const leadForm = document.querySelector("#leadForm");
const formFeedback = document.querySelector("#formFeedback");
const contactPhone = document.getElementById('phone');
const contactEmail = document.getElementById('email');
let contactPartialTimer;

function sendContactPartial() {
  const phone = contactPhone?.value?.trim() || '';
  const email = contactEmail?.value?.trim() || '';

  if (phone.length >= 10 || email.includes('@')) {
    const attribution = getUrlAttribution();
    const payload = {
      event_type: 'partial_submission',
      full_name: document.getElementById('name')?.value || 'Partial Lead',
      phone_number: phone,
      email: email,
      service_interested: document.getElementById('service')?.value || null,
      message: document.getElementById('message')?.value || null,
      ...attribution,
    };

    const BU_ID = "25217301-11c6-487b-b905-4b2fb290373b";
    const WORKER_URL = `https://mugogo-lead-router.mugogo2022.workers.dev/?bu_id=${BU_ID}`;

    fetch(WORKER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }).catch((err) => console.debug('Partial contact lead sync deferred', err));
  }
}

if (contactPhone || contactEmail) {
  [contactPhone, contactEmail].forEach((input) => {
    if (!input) return;
    input.addEventListener('blur', sendContactPartial);
    input.addEventListener('input', () => {
      clearTimeout(contactPartialTimer);
      contactPartialTimer = setTimeout(sendContactPartial, 2500);
    });
  });
}

if (leadForm) {
  leadForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const submitBtn = leadForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = 'Sending...';
    submitBtn.disabled = true;

    const BU_ID = "25217301-11c6-487b-b905-4b2fb290373b";
    const WORKER_URL = `https://mugogo-lead-router.mugogo2022.workers.dev/?bu_id=${BU_ID}`;

    const attribution = getUrlAttribution();
    const payload = {
      event_type: "full_submission",
      source_channel: "LANDING_PAGE",
      full_name: document.querySelector("#name").value,
      email: document.querySelector("#email").value,
      phone_number: document.querySelector("#phone").value,
      service_interested: document.querySelector("#service").value,
      message: document.querySelector("#message").value,
      ...attribution,
    };

    try {
      // Send to Cloudflare Worker Pipeline
      const response = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`Worker returned HTTP status ${response.status}`);
      }

      formFeedback.style.display = "block";
      formFeedback.style.color = "var(--color-primary)";
      formFeedback.innerText = "Thank you! Redirecting to WhatsApp to complete your booking...";

      // WhatsApp Delivery & Booking Feature
      const waMessage = `Hello Mugogo Inc! I'm interested in *${payload.service_interested}*.\n\n*Name:* ${payload.full_name}\n*Email:* ${payload.email}\n*Project Details:* ${payload.message}`;
      const waUrl = `https://wa.me/254721902248?text=${encodeURIComponent(waMessage)}`;
      
      setTimeout(() => {
        window.open(waUrl, '_blank');
      }, 1000);

      leadForm.reset();
    } catch (error) {
      console.error(error);
      formFeedback.style.display = "block";
      formFeedback.style.color = "red";
      formFeedback.innerText = "There was an error sending your message. Please try again.";
    } finally {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      setTimeout(() => {
        formFeedback.style.display = "none";
      }, 5000);
    }
  });
}

// Hero Animations via GSAP
heroText(document.querySelector(".hero-title"), 0.2);
heroText(document.querySelector(".hero-desc"), 0.5);
heroImg(document.querySelector(".hero-image-cont"));
