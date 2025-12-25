class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          --footer-bg: #014F56;          /* dark teal from logo */
          --footer-heading: #4FC3B8;     /* accent teal */
          --footer-text: #ffffff;
          --footer-link-hover: #D9E021;  /* highlight yellow */
        }

        footer {
          background-color: var(--footer-bg);
          color: var(--footer-text);
          padding: 3rem 1rem;
          font-family: sans-serif;
        }

        h3, h4 {
          color: var(--footer-heading);
          margin-bottom: 1rem;
        }

        p, span, li {
          color: var(--footer-text);
          font-size: 0.9rem;
        }

        .footer-link {
          color: var(--footer-text);
          display: flex;
          align-items: center;
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .footer-link:hover {
          color: var(--footer-link-hover);
          transform: translateX(5px);
        }

        .social-icons a {
          color: var(--footer-text);
          margin-right: 0.75rem;
          transition: all 0.2s ease;
        }

        .social-icons a:hover {
          color: var(--footer-link-hover);
        }

        .footer-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .footer-grid > div {
          flex: 1 1 200px;
          min-width: 200px;
        }

        .border-t {
          border-top: 1px solid rgba(255,255,255,0.2);
          margin-top: 2rem;
          padding-top: 1rem;
          text-align: center;
          font-size: 0.85rem;
        }

        i[data-feather] {
          transition: all 0.2s ease;
        }

        a:hover i[data-feather] {
          transform: scale(1.1);
        }

        ul {
          padding: 0;
          list-style: none;
        }

        ul li {
          margin-bottom: 0.5rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .contact-item i {
          margin-right: 0.5rem;
          color: var(--footer-heading);
          min-width: 20px;
        }
      </style>

      <footer>
        <div class="footer-grid">
          <!-- Brand -->
          <div>
            <h3>
              <i data-feather="heart"></i> Mazibuko Medical
            </h3>
            <p>Compassionate healthcare for you and your family.</p>
            <div class="social-icons">
              <a href="#"><i data-feather="facebook"></i></a>
              <a href="#"><i data-feather="twitter"></i></a>
              <a href="#"><i data-feather="instagram"></i></a>
              <a href="#"><i data-feather="linkedin"></i></a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><a class="footer-link" href="/"><i data-feather="chevron-right"></i> Home</a></li>
              <li><a class="footer-link" href="about.html"><i data-feather="chevron-right"></i> About</a></li>
              <li><a class="footer-link" href="services.html"><i data-feather="chevron-right"></i> Services</a></li>
              <li><a class="footer-link" href="doctors.html"><i data-feather="chevron-right"></i> Doctors</a></li>
              <li><a class="footer-link" href="contact.html"><i data-feather="chevron-right"></i> Contact</a></li>
            </ul>
          </div>

          <!-- Services -->
          <div>
            <h4>Services</h4>
            <ul>
              <li><a class="footer-link" href="#"><i data-feather="chevron-right"></i> Cardiology</a></li>
              <li><a class="footer-link" href="#"><i data-feather="chevron-right"></i> Neurology</a></li>
              <li><a class="footer-link" href="#"><i data-feather="chevron-right"></i> Pediatrics</a></li>
              <li><a class="footer-link" href="#"><i data-feather="chevron-right"></i> Orthopedics</a></li>
              <li><a class="footer-link" href="#"><i data-feather="chevron-right"></i> General Medicine</a></li>
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h4>Contact Us</h4>
            <div class="contact-item">
              <i data-feather="map-pin"></i>
              <span>Hyde Park: 123 Rivonia Road, Sandton</span>
            </div>
            <div class="contact-item">
              <i data-feather="map-pin"></i>
              <span>Heidelberg: 45 Hospital Street, Heidelberg</span>
            </div>
            <div class="contact-item">
              <i data-feather="phone"></i>
              <span>Sandton: (011) 234 5678</span>
            </div>
            <div class="contact-item">
              <i data-feather="phone"></i>
              <span>Heidelberg: (016) 345 6789</span>
            </div>
            <div class="contact-item">
              <i data-feather="mail"></i>
              <span>info@medicarepulse.com</span>
            </div>
            <div class="contact-item">
              <i data-feather="clock"></i>
              <span>Mon-Fri: 8:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>

        <div class="border-t">
          &copy; ${new Date().getFullYear()} MediCare Pulse. All rights reserved.
        </div>
      </footer>

      <script>
        feather.replace();
      </script>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);
