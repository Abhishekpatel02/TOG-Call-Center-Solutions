$(document).ready(function() {
  $(".help-content-heading > h4").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).siblings(".help-content-article").slideUp();
    }
    else {
      $(".help-content-heading > h4").removeClass("active");
      $(this).addClass("active");
      $(".help-content-article").slideUp();
      $(this).siblings(".help-content-article").slideDown();
    }
  });
});

// video play button using jquery 
$(document).ready(function() {
  $(".play-btn").on("click", function() {
    const videoId = $(this).attr("video-id");
    $(".overlay").show();
    $(".youtubeVideo").attr("src", videoId + "?autoplay=1");
  });

  $(".close-btn").on("click", function() {
    $(".overlay").hide();
    youtubeVideo.attr("src", "");
  });

  $(".overlay").on("click", function() {
   $(".overlay").hide();
    $(".youtubeVideo").attr("src", "");
  });
});


    document.getElementById('myForm').addEventListener('submit', function(event) { 
    document.querySelectorAll('error-message').innerText = ''; 
    document.getElementById('emailError').innerText = ''; 
    document.getElementById('phoneError').innerText = '';
    document.getElementById('dropdownError').innerText = '';
 
    let hasErrors = false; 
 
    // Validate Name 
    const firstnameInput = document.getElementById('first_name').value.trim(); 
    if (firstnameInput === '') { 
        document.getElementById('firstnameError').innerText = 'Name is required.'; 
        hasErrors = true; 
    } 

    const lastnameInput = document.getElementById('last_name').value.trim(); 
    if (lastnameInput === '') { 
        document.getElementById('lastnameError').innerText = 'last Name is required.'; 
        hasErrors = true; 
    } 

       const companynameInput = document.getElementById('company_name').value.trim(); 
    if (companynameInput === '') { 
        document.getElementById('companynameError').innerText = 'company Name is required.'; 
        hasErrors = true; 
    } 
  
    // Validate Email 
    const emailInput = document.getElementById('email').value.trim(); 
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex 
    if (emailInput === '') { 
        document.getElementById('emailError').innerText = 'Email is required.'; 
        hasErrors = true; 
    } else if (!emailPattern.test(emailInput)) { 
        document.getElementById('emailError').innerText = 'Invalid email format.'; 
        hasErrors = true; 
    } 

    const phoneInput = document.getElementById('Phone').value.trim(); 
     const regex = /^(?:\+91[-\s]?)?[789]\d{9}$/; 
    if (phoneInput === '') { 
        document.getElementById('phoneError').innerText = 'Please enter a valid phone number with at least 10 characters.'; 
        hasErrors = true; 
    } else if (!regex.test(phoneInput)) { 
        document.getElementById('phoneError').innerText = 'Invalid phone number.'; 
        hasErrors = true; 
    } 

    const dropdownInput=document.getElementById('dropdown');
    if(dropdownInput.value===''){
         document.getElementById('dropdownError').innerText = 'please give atleast one instrument'; 
        hasErrors = true; 
    }
    

    // vallidate massage 
    // const messageInput = document.getElementById('message').value.trim(); 
    // if (messageInput === '') { 
    //     document.getElementById('messageError').innerText = 'please provide some message.'; 
    //     hasErrors = true; 
    // } 
 
    // Prevent form submission if there are errors 
    if (hasErrors) { 
        event.preventDefault(); 
    } 
}); 

$(document).ready(function(){
    $('.testimonial-box-slider').bxSlider({
      slideWidth: 1113,
      minSlides: 1,
      maxSlides: 1,
      slideMargin: 10
    });
  });
