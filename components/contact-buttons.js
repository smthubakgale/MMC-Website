class ContactButtons extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }

        .contact-buttons {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
        }

        .hero-btn {
          backdrop-filter: blur(10px);
          background-color: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #ffffff;
          font-weight: 600;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .hero-btn i {
          margin-right: 0.5rem;
          width: 1.2rem;
          height: 1.2rem;
        }

        .hero-btn:hover {
          background-color: rgba(255, 255, 255, 0.25);
          transform: translateY(-2px);
        }

        /* Optional individual button colors */
        .whatsapp {
          color: #25D366;
          border-color: rgba(37, 211, 102, 0.4);
        }
        .whatsapp:hover {
          color: #ffffff;
          background-color: rgba(37, 211, 102, 0.25);
          border-color: rgba(37, 211, 102, 0.6);
        }

        .call {
          color: #00B4B4;
          border-color: rgba(0, 180, 180, 0.4);
        }
        .call:hover {
          color: #ffffff;
          background-color: rgba(0, 180, 180, 0.25);
          border-color: rgba(0, 180, 180, 0.6);
        }

        .book {
          color: #4FC3B8;
          border-color: rgba(79, 195, 184, 0.4);
        }
        .book:hover {
          color: #ffffff;
          background-color: rgba(79, 195, 184, 0.25);
          border-color: rgba(79, 195, 184, 0.6);
        }

      </style>

      <div class="contact-buttons">
        <a href="https://wa.me/27123456789" class="hero-btn whatsapp">
          <i data-feather="message-circle"></i>
          WhatsApp
        </a>
        <a href="tel:+27123456789" class="hero-btn call">
          <i data-feather="phone"></i>
          Call Now
        </a>
        <a href="#appointment" class="hero-btn book">
          <i data-feather="calendar"></i>
          Book Online
        </a>
      </div>
    `;

    // Initialize Feather Icons
    if (window.feather) {
      window.feather.replace({ width: 16, height: 16 });
    }
  }
}

customElements.define('contact-buttons', ContactButtons);
