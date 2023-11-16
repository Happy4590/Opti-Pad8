$(function(){
    $(".toggle").on("click", function(){
      if($(".menu").hasClass("active")){
          $(".menu").removeClass("active");
          $(this).find("a").html("<ion-icon name='menu-outline'></ion-icon>");
      }else{
        $(".menu").addClass("active");
        $(this).find("a").html("<ion-icon name='close-outline'></ion-icon>");
      }
    })
   });

   

   window.addEventListener("scroll", () => {
  const ul = document.querySelector("nav");
  if (window.scrollY > 600) {
      ul.classList.add("scroll");
  } else {
      ul.classList.remove("scroll");
  }
  if(window.scrollY > 1410){
    ul.classList.remove("scroll");
  }
  if(window.scrollY > 2180){
    ul.classList.add("scroll");
  }
 });
window.addEventListener("scroll", () => {
    const ul = document.querySelector("nav ul");
    if (window.scrollY > 600) {
        ul.classList.add("scroll ");
    } else {
        ul.classList.remove("scroll");
    }
    if(window.scrollY > 1410){
      ul.classList.remove("scroll");
    }
    if(window.scrollY > 2180){
      ul.classList.add("scroll");
    }
  });
  


const spans = document.querySelectorAll('.landing h1 span');
        let index = 0;

        function type() {
            if (index < spans.length) {
                spans[index].style.opacity = 1;
                index++;
                setTimeout(type, 3850); // Adjust the typing speed (milliseconds)
            }
        }
        window.addEventListener('load', type);

        function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show the "Up" button after scrolling 800 pixels
window.addEventListener('scroll', () => {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (window.scrollY >= 652) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});


// Get references to the popup elements
const popupOverlay = document.getElementById('popupOverlay');
const popup = document.getElementById('popup');

// Function to show the popup
function showPopup() {
    popupOverlay.style.display = 'flex';
}

// Function to close the popup
function closePopup() {
    popupOverlay.style.display = 'none';
}

// Show the popup immediately when the page loads
window.addEventListener('load', showPopup);






/* service rotation */

const servicesContainer = document.querySelector('.services-container');
const serviceItems = document.querySelectorAll('.service');

// Function to add the flip class to service elements one by one
function flipServices() {
    let index = 0;
    const flipDuration = 14000; // 14 seconds in milliseconds

    function flipNext() {
        if (index < serviceItems.length) {
            serviceItems[index].classList.add('flip');
            setTimeout(() => {
                serviceItems[index].classList.remove('flip');
                index++;
                flipNext();
            }, flipDuration);
        }
    }

    flipNext();
}

// Observer to detect when the services section becomes visible
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Start flipping the services
            flipServices();
            // Disconnect the observer since we only need it once
            observer.disconnect();
        }
    });
});

// Observe the services container
observer.observe(servicesContainer);




// JavaScript to stop the marquee animation on page load
document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".menu");
    menu.style.animation = "none"; // Disable the marquee animation
});



