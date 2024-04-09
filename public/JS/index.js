window.onscroll = function() {scrollFunction()};

function scrollFunction() {

    var header = document.querySelector("header");
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        header.style.background = "radial-gradient(circle, #8e00bd 0%, #2d003b 100%)";
        header.style.borderBottom = "2px solid white";
    } else {
        header.style.background = "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2))";
        header.style.borderBottom = "none";
    }

}


var userContainer = document.querySelector('.user-container');
var dropdown = document.getElementById('login-dropdown');

userContainer.addEventListener('mouseenter', function() {
    dropdown.style.display = 'block';
});

userContainer.addEventListener('mouseleave', function() {
    dropdown.style.display = 'none';
});



document.addEventListener("DOMContentLoaded", function() {
    const prevMovie = document.getElementById("prevMovie");
    const nextMovie = document.getElementById("nextMovie");
    const movieSlider = document.getElementById("movieSlider");
    const movieCards = document.querySelectorAll(".movieCard");
    const numVisible = 4;

    let currentIndex = 0;


    function updateSlider() {
        prevMovie.style.display = currentIndex > 0 ? "block" : "none";
        nextMovie.style.display = currentIndex + numVisible < movieCards.length ? "block" : "none";

        movieCards.forEach(card => {
            card.style.display = "none";
        });

        for (let i = currentIndex; i < currentIndex + numVisible; i++) {
            if (movieCards[i]) {
                movieCards[i].style.display = "block";
            }
        }
    }

    updateSlider();

    nextMovie.addEventListener("click", function() {
        if (currentIndex + numVisible < movieCards.length) {
            currentIndex++;
            updateSlider();
        }
    });

    prevMovie.addEventListener("click", function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });
});



var posters = document.querySelectorAll('img[src="image/dune2.jpg"], img[src="image/endgame.png"],img[src="image/godz.jpg"],img[src="image/killer.jpg"],img[src="image/conjuring.jpg"],img[src="image/themeg.jpg"],img[src="image/who.jpg"],img[src="image/opp.jpg"],img[src="image/battle.jpg"],img[src="image/john.jpg"]');

posters.forEach(function(poster) {
    poster.addEventListener('click', function() {
        if (poster.src.includes("dune2.jpg")) {
            document.getElementById('popup').style.display = 'block';
        } else if (poster.src.includes("endgame.png")) {
            document.getElementById('popup1').style.display = 'block';
        }
        else if (poster.src.includes("godz.jpg")) {
            document.getElementById('popup2').style.display = 'block';
        }
        else if (poster.src.includes("killer.jpg")) {
            document.getElementById('popup3').style.display = 'block';
        }
        else if (poster.src.includes("conjuring.jpg")) {
            document.getElementById('popup4').style.display = 'block';
        }
        else if (poster.src.includes("themeg.jpg")) {
            document.getElementById('popup5').style.display = 'block';
        }
        else if (poster.src.includes("who.jpg")) {
            document.getElementById('popup6').style.display = 'block';
        }
        else if (poster.src.includes("opp.jpg")) {
            document.getElementById('popup7').style.display = 'block';
        }
        else if (poster.src.includes("battle.jpg")) {
            document.getElementById('popup8').style.display = 'block';
        }
        else if (poster.src.includes("john.jpg")) {
            document.getElementById('popup9').style.display = 'block';
        }
    });
});



document.addEventListener('click', function(event) {
    var popups = document.querySelectorAll('.popup');
    popups.forEach(function(popup) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const movieCards = document.querySelectorAll(".movieCard");
    movieCards.forEach(card => {
        card.addEventListener("mouseover", function() {
            movieCards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.classList.add("grayscale");
                }
            });
        });
        card.addEventListener("mouseout", function() {
            movieCards.forEach(otherCard => {
                otherCard.classList.remove("grayscale");
            });
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const movieCard2s = document.querySelectorAll(".movieCard2");
    movieCard2s.forEach(card => {
        card.addEventListener("mouseover", function() {
            movieCard2s.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.classList.add("grayscale");
                }
            });
        });
        card.addEventListener("mouseout", function() {
            movieCard2s.forEach(otherCard => {
                otherCard.classList.remove("grayscale");
            });
        });
    });
});


const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    
    // Handle scrollbar thumb drag
    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
        
        // Update thumb position on mouse move
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;
            // Ensure the scrollbar thumb stays within bounds
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
            
            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        }
        // Remove event listeners on mouse up
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }
        // Add event listeners for drag interaction
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });
    // Slide images according to the slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });
     // Show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    }
    // Update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }
    // Call these two functions when image list scrolls
    imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
        handleSlideButtons();
    });
}
window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);

function showAlert() {
    alert("Please log in first");
}
