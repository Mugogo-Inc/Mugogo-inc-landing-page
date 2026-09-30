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
            <i class="fa-solid fa-bars"></i>
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
              <i class="fa-solid fa-chart-line"></i> Digital Marketing & Software Solutions
            </div>
            <h1 class="hero-title">
              Data-Driven <span>Digital Marketing</span> & Enterprise Software
            </h1>
            <p class="hero-desc">
              We engineer modern web & mobile software applications and run targeted digital marketing strategies that turn your business vision into scalable market success.
            </p>

            <div class="hero-buttons">
              <a href="#packages" class="btn btn-primary">
                View Packages <i class="fa-solid fa-arrow-right"></i>
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
              <li><i class="fa-solid fa-check-circle"></i> Open Source Transparency & Total Product Control</li>
              <li><i class="fa-solid fa-check-circle"></i> Data-Backed Marketing Campaigns</li>
              <li><i class="fa-solid fa-check-circle"></i> Agile Engineering with Continuous Integration</li>
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
                <i class="fa-solid fa-bullhorn"></i>
              </div>
              <h3>Digital Marketing & SEO</h3>
              <p>
                Take your business to the next level with our perfect digital marketing campaigns, Search Engine Optimization (SEO), PPC ads, and conversion rate optimization.
              </p>
              <span class="service-tag">Growth & Brand Scaling</span>
            </article>

            <!-- 2. Web Application Development -->
            <article class="service-card">
              <div class="service-icon">
                <i class="fa-solid fa-globe"></i>
              </div>
              <h3>Web Application & Development</h3>
              <p>
                Mugogo develops responsive, high-performance web applications using state-of-the-art modern frameworks and scalable APIs.
              </p>
              <span class="service-tag">Full-Stack Engineering</span>
            </article>

            <!-- 3. Mobile App Development -->
            <article class="service-card">
              <div class="service-icon">
                <i class="fa-solid fa-mobile-screen-button"></i>
              </div>
              <h3>Cross-Platform Mobile Apps</h3>
              <p>
                Secure our engineering team to perform cross-platform mobile development for iOS and Android with fluid performance and native UI.
              </p>
              <span class="service-tag">iOS & Android</span>
            </article>

            <!-- 4. Cloud Computing & Infrastructure -->
            <article class="service-card">
              <div class="service-icon">
                <i class="fa-brands fa-aws"></i>
              </div>
              <h3>Cloud Computing & Infrastructure</h3>
              <p>
                Mugogo helps clients scale their cloud services and backend systems on AWS, Netlify, and Google Cloud Platform with zero downtime.
              </p>
              <span class="service-tag">DevOps & Cloud</span>
            </article>

            <!-- 5. UI/UX Design -->
            <article class="service-card">
              <div class="service-icon">
                <i class="fa-solid fa-pen-ruler"></i>
              </div>
              <h3>UI/UX Design</h3>
              <p>
                Transform complex user interactions into intuitive visual interfaces through detailed user research, wireframing, and interactive design prototypes.
              </p>
              <span class="service-tag">User Experience Design</span>
            </article>

            <!-- 6. Machine Learning & Big Data -->
            <article class="service-card">
              <div class="service-icon">
                <i class="fa-solid fa-brain"></i>
              </div>
              <h3>Machine Learning & Big Data</h3>
              <p>
                As companies thrive in today's competitive business environment, we provide key metrics and intelligent models to drive data-driven decisions.
              </p>
              <span class="service-tag">AI & Data Analytics</span>
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
                <li><i class="fa-solid fa-check"></i> Custom Web & Mobile Solution</li>
                <li><i class="fa-solid fa-check"></i> Local Kenya SEO & Google Ads</li>
                <li><i class="fa-solid fa-check"></i> Social Media Brand Campaign</li>
                <li><i class="fa-solid fa-check"></i> Dedicated Support & Hosting</li>
              </ul>
              <button class="btn btn-primary open-package-modal" data-package="SME Kenya" data-pdf="/SME Proposal-Kenya.pdf">
                Apply for Package <i class="fa-solid fa-arrow-right"></i>
              </button>
            </article>

            <!-- Package 2: SME International -->
            <article class="package-card highlight">
              <span class="package-badge">Global Scale</span>
              <h3>SME International</h3>
              <span class="package-type">Small & Medium Business (Global)</span>
              <p>Scalable web & mobile architecture tailored for international startups and expanding SMEs.</p>
              <ul class="package-features">
                <li><i class="fa-solid fa-check"></i> Multi-Currency Global Web App</li>
                <li><i class="fa-solid fa-check"></i> International SEO & PPC Ads</li>
                <li><i class="fa-solid fa-check"></i> Cloud Infrastructure (AWS / GCP)</li>
                <li><i class="fa-solid fa-check"></i> 24/7 Global SLA Support</li>
              </ul>
              <button class="btn btn-primary open-package-modal" data-package="SME International" data-pdf="/SME Proposal-International.pdf">
                Apply for Package <i class="fa-solid fa-arrow-right"></i>
              </button>
            </article>

            <!-- Package 3: Corporate Kenya -->
            <article class="package-card">
              <h3>Corporate Kenya</h3>
              <span class="package-type">Enterprise Solution (Kenya)</span>
              <p>Enterprise-grade software systems, dedicated engineering teams, and corporate brand positioning.</p>
              <ul class="package-features">
                <li><i class="fa-solid fa-check"></i> Enterprise Custom Software Architecture</li>
                <li><i class="fa-solid fa-check"></i> High-Volume Digital Marketing</li>
                <li><i class="fa-solid fa-check"></i> Security & Compliance Integration</li>
                <li><i class="fa-solid fa-check"></i> Dedicated Account Manager</li>
              </ul>
              <button class="btn btn-primary open-package-modal" data-package="Corporate Kenya" data-pdf="/Corporate Proposal-Kenya.pdf">
                Apply for Package <i class="fa-solid fa-arrow-right"></i>
              </button>
            </article>

            <!-- Package 4: Corporate International -->
            <article class="package-card">
              <span class="package-badge">Global Enterprise</span>
              <h3>Corporate International</h3>
              <span class="package-type">Enterprise Solution (Global)</span>
              <p>Advanced multi-market software ecosystem, AI/Big Data analytics, and global marketing strategies.</p>
              <ul class="package-features">
                <li><i class="fa-solid fa-check"></i> Multi-Market Software Ecosystem</li>
                <li><i class="fa-solid fa-check"></i> Machine Learning & Big Data Analytics</li>
                <li><i class="fa-solid fa-check"></i> Global Omni-Channel Marketing</li>
                <li><i class="fa-solid fa-check"></i> Dedicated Engineering Team</li>
              </ul>
              <button class="btn btn-primary open-package-modal" data-package="Corporate International" data-pdf="/Corporate Proposal-International.pdf">
                Apply for Package <i class="fa-solid fa-arrow-right"></i>
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

      <!-- Section Line Counter -->
      <div class="container">
        <div class="section-line">
          <div class="section-counter">05 / <span>05</span></div>
        </div>
      </div>

      <!-- Work / Portfolio Section -->
      <section class="work-section" id="work">
        <div class="container">
          <div class="section-header">
            <span class="section-subtitle">Proven Results</span>
            <h2 class="section-title">Check Out Our Work</h2>
            <p class="section-desc">
              Together, we'll come up with radical ideas and execute them flawlessly.
            </p>
          </div>

          <div class="swiper mySwiper portfolio-slider-container">
            <div class="swiper-wrapper">
              <!-- Project 1 -->
              <div class="swiper-slide">
                <article class="work-card">
                  <div class="work-img-wrap">
                    <img src="/fising.png" alt="Zanzibar Sports Club Website" loading="lazy" />
                  </div>
                  <div class="work-body">
                    <h3>Zanzibar Sports Club</h3>
                    <p>Sport fishing portal and digital web experience in Zanzibar.</p>
                    <div class="work-actions">
                      <a href="https://zanzibarsportfishing.com/" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
                        View Project <i class="fa-solid fa-arrow-up-right-from-square"></i>
                      </a>
                    </div>
                  </div>
                </article>
              </div>

              <!-- Project 2 -->
              <div class="swiper-slide">
                <article class="work-card">
                  <div class="work-img-wrap">
                    <img src="/travely.png" alt="Travely Mobile App" loading="lazy" />
                  </div>
                  <div class="work-body">
                    <h3>Travely Mobile App</h3>
                    <p>Cross-platform mobile application available on Google Play for travel booking.</p>
                    <div class="work-actions">
                      <a href="https://play.google.com/store/apps/details?id=com.kwanzainc.travely" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
                        Google Play <i class="fa-brands fa-google-play"></i>
                      </a>
                    </div>
                  </div>
                </article>
              </div>

              <!-- Project 3 -->
              <div class="swiper-slide">
                <article class="work-card">
                  <div class="work-img-wrap">
                    <img src="/cinnamon.png" alt="Mnarani Cinnamon Spa Website" loading="lazy" />
                  </div>
                  <div class="work-body">
                    <h3>Mnarani Cinnamon Spa</h3>
                    <p>Digital booking system and marketing campaign for a luxury spa resort.</p>
                    <div class="work-actions">
                      <a href="https://mnaranicinnamonspa.com/" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
                        View Website <i class="fa-solid fa-arrow-up-right-from-square"></i>
                      </a>
                    </div>
                  </div>
                </article>
              </div>

              <!-- Project 4 -->
              <div class="swiper-slide">
                <article class="work-card">
                  <div class="work-img-wrap">
                    <img src="/beauty.png" alt="Jambiani Beauty Spa Platform" loading="lazy" />
                  </div>
                  <div class="work-body">
                    <h3>Jambiani Beauty Spa</h3>
                    <p>Web portal and Google search engine optimization for customer acquisition.</p>
                    <div class="work-actions">
                      <a href="https://jambianibeautyspa.com/" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
                        View Spa <i class="fa-solid fa-arrow-up-right-from-square"></i>
                      </a>
                    </div>
                  </div>
                </article>
              </div>

              <!-- Project 5 -->
              <div class="swiper-slide">
                <article class="work-card">
                  <div class="work-img-wrap">
                    <img src="/tourszanzibar.png" alt="Tours Zanzibar Tourism Website" loading="lazy" />
                  </div>
                  <div class="work-body">
                    <h3>Tours Zanzibar</h3>
                    <p>Tourism and excursion digital portal built for fast loading speeds and high conversion.</p>
                    <div class="work-actions">
                      <a href="https://tourszanzibar.com/" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
                        View Portal <i class="fa-solid fa-arrow-up-right-from-square"></i>
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            </div>

            <!-- Slider controls -->
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>
        </div>
      </section>

      <!-- Our Partners Section -->
      <section class="partners-section" id="partners">
        <div class="container">
          <h2>Our Partners</h2>
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
                <div class="contact-icon"><i class="fa-solid fa-location-dot"></i></div>
                <div class="contact-details">
                  <h4>Headquarters</h4>
                  <p>Nairobi, Kenya</p>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon"><i class="fa-solid fa-envelope"></i></div>
                <div class="contact-details">
                  <h4>Email Us</h4>
                  <p><a href="mailto:info@mugogoinc.com">info@mugogoinc.com</a></p>
                  <p><a href="mailto:customerservice@mugogoinc.com">customerservice@mugogoinc.com</a></p>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon"><i class="fa-brands fa-whatsapp"></i></div>
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
                Send Message <i class="fa-solid fa-paper-plane"></i>
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
        <button class="modal-close" id="modalCloseBtn" aria-label="Close Modal">&times;</button>

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
            Send Package Application <i class="fa-solid fa-paper-plane"></i>
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
              <li><i class="fa-solid fa-envelope"></i> info@mugogoinc.com</li>
              <li><i class="fa-solid fa-phone"></i> +254 721 902 248</li>
              <li><i class="fa-solid fa-location-dot"></i> Nairobi, Kenya</li>
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

// Mobile Navigation Drawer Toggle
const navToggle = document.querySelector("#navToggle");
const navMenu = document.querySelector("#navMenu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    const icon = navToggle.querySelector("i");
    if (navMenu.classList.contains("active")) {
      icon.className = "fa-solid fa-xmark";
    } else {
      icon.className = "fa-solid fa-bars";
    }
  });

  // Auto-close menu when a link is tapped
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      const icon = navToggle.querySelector("i");
      if (icon) icon.className = "fa-solid fa-bars";
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

if (packageForm) {
  packageForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const pkgName = pkgNameInput.value;
    const pdfUrl = selectedPackagePdf.value;

    pkgFormFeedback.style.display = "block";
    pkgFormFeedback.style.color = "var(--color-primary)";
    pkgFormFeedback.innerHTML = `
      <p style="margin-bottom:0.5rem; font-weight:600;">
        <i class="fa-solid fa-circle-check"></i> Thank you! Your application for <strong>${pkgName}</strong> has been received. Our team will contact you shortly.
      </p>
      ${pdfUrl ? `<a href="${pdfUrl}" download class="btn btn-outline" style="padding:0.4rem 0.8rem; font-size:0.8rem; margin-top:0.5rem;"><i class="fa-solid fa-file-pdf"></i> Download ${pkgName} Proposal PDF</a>` : ""}
    `;

    packageForm.reset();
    if (pkgNameInput) pkgNameInput.value = pkgName;
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

// Contact Form Handler
const leadForm = document.querySelector("#leadForm");
const formFeedback = document.querySelector("#formFeedback");

if (leadForm) {
  leadForm.addEventListener("submit", (e) => {
    e.preventDefault();
    formFeedback.style.display = "block";
    formFeedback.style.color = "var(--color-primary)";
    formFeedback.innerText = "Thank you! Your message has been received. Our team will contact you shortly.";
    leadForm.reset();

    setTimeout(() => {
      formFeedback.style.display = "none";
    }, 5000);
  });
}

// Hero Animations via GSAP
heroText(document.querySelector(".hero-title"), 0.2);
heroText(document.querySelector(".hero-desc"), 0.5);
heroImg(document.querySelector(".hero-image-cont"));
