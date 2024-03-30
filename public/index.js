const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Movie = require('./models/movie.model');
const Product = require('./models/movie.model');

mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));


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











  