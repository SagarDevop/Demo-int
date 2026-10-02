document.addEventListener('DOMContentLoaded', function() {
  console.log('4 Lotus Interior Static JS initialized.');

  // Guarantee all images are visible (removing any leftover Next.js opacity-0 classes)
  document.querySelectorAll('img').forEach(function(img) {
    img.classList.remove('opacity-0');
    img.classList.add('opacity-100');
  });

  // --- Initial Preloader Progress & Fadeout ---
  var loader = document.querySelector('.initial-loader-overlay') || document.querySelector('[class*="z-[99999]"]');
  if (loader) {
    document.body.style.overflow = 'hidden';
    var progressEl = loader.querySelector('.font-mono.text-white.text-base.font-bold') || loader.querySelector('span.font-mono');
    var barEl = loader.querySelector('.bg-gradient-to-r');
    var progress = 0;
    var startTime = Date.now();
    var duration = 1200;

    var timer = setInterval(function() {
      var elapsed = Date.now() - startTime;
      progress = Math.min(Math.round((elapsed / duration) * 100), 100);
      if (progressEl) progressEl.textContent = progress + '%';
      if (barEl) barEl.style.width = progress + '%';

      if (progress >= 100) {
        clearInterval(timer);
        setTimeout(function() {
          loader.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          loader.style.opacity = '0';
          loader.style.transform = 'scale(1.02)';
          loader.style.pointerEvents = 'none';
          setTimeout(function() {
            if (loader.parentNode) loader.parentNode.removeChild(loader);
            document.body.style.overflow = '';
          }, 600);
        }, 150);
      }
    }, 20);
  }

  // --- Header Scroll Effect ---
  var header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 25) {
        header.classList.add('bg-[#F8F7F5]/95', 'dark:bg-[#0C0C0C]/95', 'backdrop-blur-md', 'shadow-sm');
      } else {
        header.classList.remove('shadow-sm');
      }
    });
  }

  // --- Theme Toggle Button Listeners ---
  var themeToggleBtns = document.querySelectorAll('button[aria-label*="Switch to"], button[aria-label*="mode"], button[title*="Mode"]');
  themeToggleBtns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      if (typeof toggleTheme === 'function') toggleTheme();
    });
  });

  // --- Mobile Navigation Drawer Toggle ---
  var hamburgerBtns = document.querySelectorAll('button[aria-label*="navigation"], button[aria-label*="menu"], button[class*="lucide-menu"]');
  var mobileNavDrawer = document.querySelector('[role="dialog"][class*="fixed inset-0 z-50"]');
  
  if (!mobileNavDrawer) {
    mobileNavDrawer = document.createElement('div');
    mobileNavDrawer.id = 'mobile-nav-drawer';
    mobileNavDrawer.setAttribute('role', 'dialog');
    mobileNavDrawer.setAttribute('aria-modal', 'true');
    mobileNavDrawer.setAttribute('aria-label', 'Mobile Navigation Menu');
    mobileNavDrawer.className = 'fixed inset-0 z-50 hidden flex flex-col bg-white text-[#181614] overflow-hidden transition-all duration-300';
    mobileNavDrawer.innerHTML = `
      <div class="flex items-center justify-between px-5 py-4 border-b border-black/10 bg-white shrink-0">
        <a href="index.html" class="flex items-center gap-2.5">
          <img src="assets/logo.webp" alt="4 Lotus Interior Logo" class="w-7 h-7 object-contain" />
          <span class="text-sm font-bold tracking-[0.16em] uppercase text-[#181614]">LOTUS INTERIOR</span>
        </a>
        <button type="button" aria-label="Close navigation menu" id="close-mobile-drawer-btn" class="p-2 rounded-full hover:bg-black/5 text-[#181614] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <div class="flex-1 overflow-y-auto px-5 py-4 space-y-1">
        <a href="index.html" class="block py-3 px-2 text-sm font-semibold uppercase tracking-wider text-[#181614] border-b border-black/5 hover:text-amber-800 transition-colors">Home</a>

        <div class="border-b border-black/5">
          <button type="button" class="mobile-accordion-btn flex items-center justify-between w-full py-3 px-2 text-sm font-semibold uppercase tracking-wider text-[#181614] hover:text-amber-800 transition-colors">
            <span>Specialist Services</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down transition-transform duration-200 text-neutral-500">
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </button>
          <div class="mobile-accordion-content hidden pt-2 pb-3 space-y-2.5">
            <a href="interior-designers.html" class="flex items-center gap-3 p-2 rounded-lg bg-neutral-50 hover:bg-neutral-100 border border-black/5 transition-all group">
              <img src="assets/hero_living_room.jpg" alt="Interior Design" class="w-14 h-12 object-cover rounded shrink-0 shadow-sm" />
              <div class="flex-1 min-w-0">
                <div class="text-xs font-bold text-[#181614] group-hover:text-amber-800 truncate">Interior Design & Decoration</div>
                <div class="text-[10.5px] text-neutral-500 truncate">Turnkey Luxury Residences & Villas</div>
              </div>
            </a>

            <a href="bathroom-remodelers.html" class="flex items-center gap-3 p-2 rounded-lg bg-neutral-50 hover:bg-neutral-100 border border-black/5 transition-all group">
              <img src="assets/images/bathroom-designs.webp" alt="Bathroom Design" class="w-14 h-12 object-cover rounded shrink-0 shadow-sm" />
              <div class="flex-1 min-w-0">
                <div class="text-xs font-bold text-[#181614] group-hover:text-amber-800 truncate">Bathroom Design & Renovation</div>
                <div class="text-[10.5px] text-neutral-500 truncate">Vanities, Jacuzzis & Master Spas</div>
              </div>
            </a>

            <a href="kitchen-remodelers.html" class="flex items-center gap-3 p-2 rounded-lg bg-neutral-50 hover:bg-neutral-100 border border-black/5 transition-all group">
              <img src="assets/images/kitchen-designs.webp" alt="Kitchen Remodeling" class="w-14 h-12 object-cover rounded shrink-0 shadow-sm" />
              <div class="flex-1 min-w-0">
                <div class="text-xs font-bold text-[#181614] group-hover:text-amber-800 truncate">Kitchen Design & Remodeling</div>
                <div class="text-[10.5px] text-neutral-500 truncate">German Spec Modular Kitchens</div>
              </div>
            </a>

            <a href="furniture-manufacturer.html" class="flex items-center gap-3 p-2 rounded-lg bg-neutral-50 hover:bg-neutral-100 border border-black/5 transition-all group">
              <img src="assets/images/furniture-design-2.webp" alt="Furniture Manufacturing" class="w-14 h-12 object-cover rounded shrink-0 shadow-sm" />
              <div class="flex-1 min-w-0">
                <div class="text-xs font-bold text-[#181614] group-hover:text-amber-800 truncate">Furniture Design & Manufacturing</div>
                <div class="text-[10.5px] text-neutral-500 truncate">Custom Solid Wood Joinery</div>
              </div>
            </a>
          </div>
        </div>

        <div class="border-b border-black/5">
          <button type="button" class="mobile-accordion-btn flex items-center justify-between w-full py-3 px-2 text-sm font-semibold uppercase tracking-wider text-[#181614] hover:text-amber-800 transition-colors">
            <span>Residential</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down transition-transform duration-200 text-neutral-500">
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </button>
          <div class="mobile-accordion-content hidden pl-3 pb-3 space-y-2 text-xs font-medium text-[#444444]">
            <a class="block py-1 hover:text-black transition-colors" href="residential-interior.html">Residential Interior Architecture</a>
            <a class="block py-1 hover:text-black transition-colors" href="home-interior.html">Luxury Home Interior</a>
            <a class="block py-1 hover:text-black transition-colors" href="bungalow-interior.html">Bungalow Interior Design</a>
            <a class="block py-1 hover:text-black transition-colors" href="flat-interior.html">Flat Interior Renovation</a>
            <a class="block py-1 hover:text-black transition-colors" href="apartment-interior.html">Apartment Interior Design</a>
            <a class="block py-1 hover:text-black transition-colors" href="villa-interior.html">Luxury Villa Interior</a>
            <a class="block py-1 hover:text-black transition-colors" href="penthouse-interior.html">Sky Penthouse Interior</a>
            <a class="block py-1 hover:text-black transition-colors" href="farmhouse-interior.html">Country Farmhouse Interior</a>
          </div>
        </div>

        <div class="border-b border-black/5">
          <button type="button" class="mobile-accordion-btn flex items-center justify-between w-full py-3 px-2 text-sm font-semibold uppercase tracking-wider text-[#181614] hover:text-amber-800 transition-colors">
            <span>Commercial</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down transition-transform duration-200 text-neutral-500">
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </button>
          <div class="mobile-accordion-content hidden pl-3 pb-3 space-y-2 text-xs font-medium text-[#444444]">
            <a class="block py-1 hover:text-black transition-colors" href="commercial-interior.html">Commercial Space Architecture</a>
            <a class="block py-1 hover:text-black transition-colors" href="office-interior.html">Corporate Office Design</a>
            <a class="block py-1 hover:text-black transition-colors" href="shop-interior.html">Boutique Retail Shop Interior</a>
            <a class="block py-1 hover:text-black transition-colors" href="showroom-interior.html">Flagship Showroom Interior</a>
            <a class="block py-1 hover:text-black transition-colors" href="restaurant-interior.html">Fine Dining Restaurant Interior</a>
            <a class="block py-1 hover:text-black transition-colors" href="pub-interior.html">Lounge & Pub Interior</a>
            <a class="block py-1 hover:text-black transition-colors" href="salon-interior.html">Luxury Salon & Spa Interior</a>
            <a class="block py-1 hover:text-black transition-colors" href="hospital-interior.html">Healthcare Hospital Interior</a>
            <a class="block py-1 hover:text-black transition-colors" href="clinic-interior.html">Modern Clinic & OPD Interior</a>
            <a class="block py-1 hover:text-black transition-colors" href="hotel-interior.html">Hospitality Hotel Interior</a>
            <a class="block py-1 hover:text-black transition-colors" href="gym-interior.html">Fitness Center & Gym Interior</a>
            <a class="block py-1 hover:text-black transition-colors" href="school-interior.html">Play School & Academy Interior</a>
            <a class="block py-1 hover:text-black transition-colors" href="banquet-hall-interior.html">Banquet Hall & Event Venue</a>
          </div>
        </div>

        <div class="border-b border-black/5">
          <button type="button" class="mobile-accordion-btn flex items-center justify-between w-full py-3 px-2 text-sm font-semibold uppercase tracking-wider text-[#181614] hover:text-amber-800 transition-colors">
            <span>Locations</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down transition-transform duration-200 text-neutral-500">
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </button>
          <div class="mobile-accordion-content hidden pl-3 pb-3 space-y-2 text-xs font-medium text-[#444444]">
            <a class="block py-1 font-semibold text-black hover:underline" href="locations.html">View All 32 Delhi-NCR Hubs ↗</a>
            <a class="block py-1 hover:text-black transition-colors" href="interior-designers-decorators-in-delhi.html">Delhi NCR Region</a>
            <a class="block py-1 hover:text-black transition-colors" href="interior-designers-decorators-in-gurgaon.html">Gurgaon (Gurugram)</a>
            <a class="block py-1 hover:text-black transition-colors" href="interior-designers-decorators-in-noida.html">Noida & Greater Noida</a>
            <a class="block py-1 hover:text-black transition-colors" href="interior-designers-decorators-in-faridabad.html">Faridabad</a>
            <a class="block py-1 hover:text-black transition-colors" href="interior-designers-decorators-in-sonipat.html">Sonipat</a>
            <a class="block py-1 hover:text-black transition-colors" href="interior-designers-decorators-in-ghaziabad.html">Ghaziabad</a>
            <a class="block py-1 hover:text-black transition-colors" href="interior-designers-south-delhi.html">South Delhi</a>
            <a class="block py-1 hover:text-black transition-colors" href="interior-designers-dwarka.html">Dwarka</a>
            <a class="block py-1 hover:text-black transition-colors" href="interior-designers-greater-kailash.html">Greater Kailash (GK)</a>
            <a class="block py-1 hover:text-black transition-colors" href="interior-designers-vasant-kunj.html">Vasant Kunj</a>
            <a class="block py-1 hover:text-black transition-colors" href="interior-designers-janakpuri.html">Janakpuri HQ</a>
            <a class="block py-1 hover:text-black transition-colors" href="interior-designers-kirti-nagar.html">Kirti Nagar Workshop</a>
          </div>
        </div>

        <a href="about.html" class="block py-3 px-2 text-sm font-semibold uppercase tracking-wider text-[#181614] border-b border-black/5 hover:text-amber-800 transition-colors">About Studio</a>
        <a href="portfolio.html" class="block py-3 px-2 text-sm font-semibold uppercase tracking-wider text-[#181614] border-b border-black/5 hover:text-amber-800 transition-colors">Portfolio</a>
        <a href="reviews.html" class="block py-3 px-2 text-sm font-semibold uppercase tracking-wider text-[#181614] border-b border-black/5 hover:text-amber-800 transition-colors">Reviews</a>
        <a href="contact-us.html" class="block py-3 px-2 text-sm font-semibold uppercase tracking-wider text-[#181614] border-b border-black/5 hover:text-amber-800 transition-colors">Contact Us</a>

        <div class="pt-6 space-y-3 pb-8">
          <button type="button" data-open-consultation class="w-full py-3.5 px-4 rounded-full bg-black hover:bg-neutral-800 text-white font-bold text-xs tracking-wider uppercase text-center transition-colors shadow-md">
            Book Free Consultation ↗
          </button>
          <a href="https://wa.me/919810698082" target="_blank" rel="noopener" class="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-full bg-[#25D366] hover:bg-emerald-600 text-white font-semibold text-xs tracking-wider uppercase text-center transition-colors shadow-sm">
            WhatsApp Us (+91 98106 98082)
          </a>
        </div>
      </div>
    `;
    document.body.appendChild(mobileNavDrawer);

    // Attach Accordion Toggle Listeners
    mobileNavDrawer.querySelectorAll('.mobile-accordion-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var content = btn.nextElementSibling;
        var chevron = btn.querySelector('svg');
        if (content) {
          var isHidden = content.classList.contains('hidden');
          mobileNavDrawer.querySelectorAll('.mobile-accordion-content').forEach(function(c) {
            c.classList.add('hidden');
          });
          mobileNavDrawer.querySelectorAll('.mobile-accordion-btn svg').forEach(function(s) {
            s.classList.remove('rotate-180');
          });
          if (isHidden) {
            content.classList.remove('hidden');
            if (chevron) chevron.classList.add('rotate-180');
          }
        }
      });
    });
  }
  
  function openMobileMenu() {
    if (mobileNavDrawer) {
      mobileNavDrawer.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMobileMenu() {
    if (mobileNavDrawer) {
      mobileNavDrawer.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }

  hamburgerBtns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      if (mobileNavDrawer && mobileNavDrawer.classList.contains('hidden')) {
        openMobileMenu();
      } else {
        closeMobileMenu();
      }
    });
  });

  if (mobileNavDrawer) {
    var closeDrawerBtn = mobileNavDrawer.querySelector('button[aria-label*="navigation"]');
    if (closeDrawerBtn) {
      closeDrawerBtn.addEventListener('click', closeMobileMenu);
    }
    mobileNavDrawer.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', closeMobileMenu);
    });
  }

  // --- Consultation Modal Handling ---
  var consultationModal = document.querySelector('[role="dialog"][aria-labelledby="modal-headline"]') || document.querySelector('.consultation-modal-overlay');
  
  function openConsultationModal() {
    if (consultationModal) {
      consultationModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeConsultationModal() {
    if (consultationModal) {
      consultationModal.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }

  // Intercept buttons or links that trigger consultation modal
  document.addEventListener('click', function(e) {
    var target = e.target.closest('button, a');
    if (!target) return;

    var text = (target.textContent || '').toLowerCase();
    var href = target.getAttribute('href') || '';

    if (
      href === '#consultation' ||
      text.includes('schedule spatial consultation') ||
      text.includes('schedule consultation') ||
      text.includes('book consultation') ||
      text.includes('get free quote') ||
      target.hasAttribute('data-open-consultation')
    ) {
      e.preventDefault();
      openConsultationModal();
    }
  });

  if (consultationModal) {
    // Close modal triggers
    var modalCloseBtns = consultationModal.querySelectorAll('button[aria-label*="Close consultation"]');
    modalCloseBtns.forEach(function(b) {
      b.addEventListener('click', closeConsultationModal);
    });

    consultationModal.addEventListener('click', function(e) {
      if (e.target === consultationModal) {
        closeConsultationModal();
      }
    });

    // Handle Form Submit -> WhatsApp Link Redirect
    var form = consultationModal.querySelector('form');
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        var nameInput = form.querySelector('input[placeholder*="Amit Sharma"]') || form.querySelector('input[type="text"]');
        var phoneInput = form.querySelector('input[placeholder*="098106"]') || form.querySelector('input[type="tel"]');
        var scopeSelect = form.querySelector('select');
        var locationInput = form.querySelectorAll('input[type="text"]')[1];
        var budgetSelect = form.querySelectorAll('select')[1];

        var name = nameInput ? nameInput.value.trim() : '';
        var phone = phoneInput ? phoneInput.value.trim() : '';
        if (!name || !phone) return;

        var projectType = scopeSelect ? scopeSelect.value : 'Residential Flat / Villa';
        var location = locationInput ? locationInput.value : 'Delhi-NCR';
        var budgetRange = budgetSelect ? budgetSelect.value : '₹15 Lakhs - ₹35 Lakhs';

        var messageText = [
          "Hello 4 Lotus Interior,",
          "",
          "I have an interior design consultation enquiry.",
          "",
          "Name: " + name,
          "Phone: " + phone,
          "Project Type: " + projectType,
          "Consultation Mode: Studio Meeting / Site Visit",
          "Location: " + location,
          "Estimated Budget: " + budgetRange,
          "",
          "Please contact me regarding this consultation.",
          "",
          "4 Lotus Interior Website Enquiry"
        ].join("\n");

        var targetUrl = "https://wa.me/919810698082?text=" + encodeURIComponent(messageText);
        window.location.href = targetUrl;
      });
    }
  }

  // --- Escape Key Listener for Modals & Drawers ---
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeMobileMenu();
      closeConsultationModal();
    }
  });

  // --- Scroll To Top Instant On Load ---
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
});
