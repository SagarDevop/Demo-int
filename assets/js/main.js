document.addEventListener('DOMContentLoaded', function() {
  console.log('4 Lotus Interior Static JS initialized.');

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
  var hamburgerBtns = document.querySelectorAll('button[aria-label*="navigation menu"]');
  var mobileNavDrawer = document.querySelector('[role="dialog"][class*="fixed inset-0 z-50"]');
  
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
      if (mobileNavDrawer && mobileNavDrawer.classList.contains('hidden')) {
        openMobileMenu();
      } else {
        closeMobileMenu();
      }
    });
  });

  if (mobileNavDrawer) {
    var closeDrawerBtn = mobileNavDrawer.querySelector('button[aria-label*="close navigation"]');
    if (closeDrawerBtn) {
      closeDrawerBtn.addEventListener('click', closeMobileMenu);
    }
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
