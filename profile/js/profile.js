// target element
var el = document.querySelector('.c-rating');

// current rating, or initial rating
var currentRating = $("ul li.c-rating");

// max rating, i.e. number of stars you want
var maxRating= 5;

// rating instance
var myRating = rating(el, currentRating, maxRating);
// gets the rating
var userRating = myRating.getRating();