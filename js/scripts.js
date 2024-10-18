// Smooth Scrolling for Navigation
$(document).ready(function() {
  $('a.nav-link').on('click', function(event) {
      // Check if the link has a hash (target section)
      if (this.hash !== '') {
          event.preventDefault();
          const targetHash = this.hash;

          // Animate scroll to the target section
          $('html, body').animate({
              scrollTop: $(targetHash).offset().top
          }, 800, function() {
              // Update the URL hash after animation
              window.location.hash = targetHash;
          });
      }
  });

  // Contact Form Validation
  $('#contactForm').on('submit', function(e) {
      e.preventDefault(); // Prevent default form submission
      alert('Thank you for your message! We will get back to you shortly.');
      this.reset(); // Reset the form after submission
  });

  // Fade-in Effect for Elements in Viewport
  $(window).on('scroll', function() {
      $('.fade-in').each(function() {
          if ($(this).isInViewport()) {
              $(this).addClass('visible');
          }
      });
  });

  // jQuery function to check if an element is in the viewport
  $.fn.isInViewport = function() {
      const elementTop = $(this).offset().top;
      const elementBottom = elementTop + $(this).outerHeight();
      const viewportTop = $(window).scrollTop();
      const viewportBottom = viewportTop + $(window).height();
      return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  // Button Hover Effect
  $('.btn').hover(
      function() {
          $(this).addClass('active'); // Add active class on hover
      },
      function() {
          $(this).removeClass('active'); // Remove active class on mouse leave
      }
  );
});
