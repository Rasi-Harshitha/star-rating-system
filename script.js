$(document).ready(function() {
    var selectedRating = 0;
  
    // Hover effect for stars
    $('.star').on('mouseover', function() {
      var rating = $(this).data('value');
      highlightStars(rating);
    });
  
    // Remove highlight when not hovering
    $('.star').on('mouseout', function() {
      if (selectedRating === 0) {
        $('.star').removeClass('hover');
      } else {
        highlightStars(selectedRating);
      }
    });
  
    // Set rating on click
    $('.star').on('click', function() {
      selectedRating = $(this).data('value');
      $('#rating-value').text(selectedRating);
      highlightStars(selectedRating);
    });
  
    function highlightStars(rating) {
      $('.star').each(function() {
        if ($(this).data('value') <= rating) {
          $(this).addClass('hover');
        } else {
          $(this).removeClass('hover');
        }
      });
    }
  });
  

