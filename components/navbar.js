class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
      <!-- Bootstrap CSS -->
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      />

      <style>
        :host {
          --nav-bg: #ffffff;
          --primary: #014F56;
          --primary-light: #007E82;
          --accent: #4FC3B8;
          --highlight: #D9E021;
        } 

        .navbar {
          background-color: var(--nav-bg);
          transition: all 0.3s ease;
          position: sticky;
          top: 0;
          z-index: 1020;
          user-select:none;
        }

        .navbar.scrolled {
          box-shadow: 0 6px 18px rgba(1, 79, 86, 0.15);
        }

        .navbar-brand span {
          color: var(--primary);
          font-weight: 700;
          font-size: 1.15rem;
        }

        .navbar-brand img {
          height: 36px;
        }

        .nav-link {
          color: var(--primary) !important;
          font-weight: 500;
          position: relative;
          cursor: pointer;
        }

        .nav-link:hover {
          color: var(--accent) !important;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -3px;
          height: 2px;
          width: 0;
          background-color: var(--accent);
          transition: width 0.25s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .btn-primary {
          background-color: var(--primary-light);
          border-color: var(--primary-light);
          padding: 0.45rem 1.2rem;
        }

        .btn-primary:hover {
          background-color: var(--accent);
          border-color: var(--accent);
        }

        .navbar-toggler {
          border: none;
          outline:none;
          font-size: 1.4rem;
          color: var(--primary);
        }

        /* Dropdown Styles */
        .nav-item { position: relative; }
        .dropdown-menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          background-color: var(--nav-bg);
          border-radius: 0.5rem;
          box-shadow: 0 6px 12px rgba(0,0,0,0.1);
          min-width: 12rem;
          padding: 0.5rem 0;
          z-index: 9999;
        }
        .dropdown-menu.show { display: block; }
        .dropdown-menu a {
          display: block;
          padding: 0.5rem 1rem;
          color: var(--primary);
          text-decoration: none;
        }
        .dropdown-menu a:hover {
          background-color: var(--accent);
          color: #fff;
        }

        /* Mobile dropdown override */
        @media (max-width: 991px) {
          .dropdown-menu {
            position: relative;
            top: 0;
            box-shadow: none;
            border-radius: 0.5rem;
            margin-left: 0;
          }
        }
      </style>

      <nav class="navbar navbar-expand-lg py-3">
        <div class="container">
          <a class="navbar-brand d-flex align-items-center gap-2" href="/">
            <img src="img/logo.png" alt="Mazibuko Medical Logo" />
            <span>Mazibuko Medical</span>
          </a>

          <button class="navbar-toggler" id="toggleBtn">☰</button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto align-items-lg-center">

              <li class="nav-item"><a class="nav-link mx-2" href="/">Home</a></li>

              <li class="nav-item dropdown">
                <a class="nav-link mx-2">About</a>
                <ul class="dropdown-menu">
                  <li><a href="/about.html">About Us</a></li>
                  <li><a href="/doctors.html">Our Team</a></li>
                  <li><a href="/contact.html">Contact</a></li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link mx-2">Services</a>
                <ul class="dropdown-menu">
                  <li><a href="/services.html">All Services</a></li>
                  <li><a href="/pricing.html">Pricing / Packages</a></li>
                  <li><a href="/faqs.html">FAQ</a></li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link mx-2 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Blog
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="/blogs.html">Articles</a></li>
                  <li><a class="dropdown-item" href="/news.html">News</a></li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link mx-2 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Policies
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="/cookies.html">Cookies Policy</a></li>
                  <li><a class="dropdown-item" href="/terms.html">Terms & Conditions</a></li>
                  <li><a class="dropdown-item" href="/privacy.html">Privacy Policy</a></li>
                  <li><a class="dropdown-item" href="/refund.html">Refund Policy</a></li>
                </ul>
              </li>
 
              <li class="nav-item ms-lg-3">
                <a href="timetable.html" class="btn btn-primary">Book Now</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `;

    this.setupToggle();
    this.setupScroll();
    this.setupDropdownClick();
  }

  setupToggle() {
    const btn = this.shadowRoot.getElementById("toggleBtn");
    const nav = this.shadowRoot.getElementById("navbarNav");
    btn.addEventListener("click", () => nav.classList.toggle("show"));
  }

  setupScroll() {
    const navbar = this.shadowRoot.querySelector(".navbar");
    window.addEventListener("scroll", () => {
      navbar.classList.toggle("scrolled", window.scrollY > 40);
    });
  }

  setupDropdownClick() {
    const navItems = this.shadowRoot.querySelectorAll(".nav-item.dropdown");
    navItems.forEach(item => {
      const link = item.querySelector(".nav-link");
      const dropdown = item.querySelector(".dropdown-menu");

      link.addEventListener("click", e => {
        e.preventDefault();
        // Toggle dropdown visibility
        dropdown.classList.toggle("show");

        // Close other dropdowns
        this.shadowRoot.querySelectorAll(".dropdown-menu").forEach(d => {
          if(d !== dropdown) d.classList.remove("show");
        });
      });
    });

    // Close dropdown if click outside
    window.addEventListener("click", e => {
      if(!this.shadowRoot.host.contains(e.target)) {
        this.shadowRoot.querySelectorAll(".dropdown-menu").forEach(d => d.classList.remove("show"));
      }
    });
  }
}

customElements.define("custom-navbar", CustomNavbar);
