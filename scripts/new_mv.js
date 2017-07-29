
console.log("new_mv included");

/* when document has finished loading, do this */
$(window).on("load", function() {
  moveLoader();
  containerBodyFadeIn();
  createProjectsParticleSystem();
  bindHoverProjectEvents();
  bindBackToTopFader();
  bindAnchorLinkSmoothScroll()
  projectsFadeIn();
/* assign nav underline scaling on hover */
$(".nav-item").hover(function(){
    $(this).children().addClass("underline-scaled");
}, function(){
  $(this).children().removeClass("underline-scaled");
});

$(".underline").parent().hover(function(){
  $(this).children().addClass("underline-scaled");
}, function(){
  $(this).children().removeClass("underline-scaled");
});


/* End of window.onload functions */
});

/*Title screen stuff on loaded */
function moveLoader() {
  window.setTimeout( function() {
  $(".loader-upper").addClass("animate");
    $(".loader-lower").addClass("anim-color");
    moveLoaderLowerBox();
  }, 1500);
}

function moveLoaderLowerBox() {
  window.setTimeout( function() {
      $(".loading-box-bottom").addClass("loading-box-bottom-move");
      $(".loadingcircle2").addClass("circle2");
      $(".loading-box-top").addClass("rotate");
      $(".title-text").addClass("title-text-fade-in");
      $(".nav-item").addClass("nav-item-fade-in");
  }, 1000);
}

/* End title screen stuff on loaded */

/*Projects particle system start */
function createProjectsParticleSystem() {
for (i = 0; i < 180; i ++) {
  var windowX = $(".projects-title-container-alpha").offset();
  var windowY = $(".projects-title-container-alpha").offset();
$(".projects-particle-system").append("<div class='p p" + i + "'></div>");
$(".p" + i).css({"left": particleValues(windowX.left, windowX.left + $(".projects-title-container-alpha").width()) +"px", "top": "" + particleValues((windowY.top), (windowY.top + $(".projects-title-container-alpha").height())) + "px", "opacity": "" + Math.random() + ""});
}
}

function particleValues (max, min) {
return Math.floor(Math.random() * (max - min + 1) + min);
}


setInterval(function () {
for (j = 0; j < 180; j ++) {
  var windowX = $(".projects-title-container-alpha").offset();
  var windowY = $(".projects-title-container-alpha").offset();
$(".p" + j).css({"left": particleValues(windowX.left, windowX.left + $(".projects-title-container-alpha").width()) +"px", "top": "" + particleValues((windowY.top), (windowY.top + $(".projects-title-container-alpha").height())) + "px", "opacity": "" + Math.random() + ""});
var size = particleValues(6, 3);
$(".p" + j).css({"width": + size + "px", "height": + size + "px"});
}
}, 2000);

/* Projects particle system end */

/* PROJECTS hover bind events */

function bindHoverProjectEvents() {
$(".project-image-background").hover(function() {
  var i = $(this).attr("id");
  $(".overlap" + i).addClass("scaled");
  $(".overlap1" + i).addClass("scaled2");
  $(".project-image-overlap-text-white" + i).addClass("project-image-overlap-text-white-scale");
}, function() {
  var i = $(this).attr("id");
  $(".overlap" + i).removeClass("scaled");
  $(".overlap1" + i).removeClass("scaled2");
  $(".project-image-overlap-text-white" + i).removeClass("project-image-overlap-text-white-scale");
});
}

/* PROJECTS fade in on scroll into window */
function projectsFadeIn() {
  setInterval(function () {
for (i = 0; i < 5; i++) {
    console.log("fade in projects working");
  if (($("#project-row" + i).offset().top) < ($(window).scrollTop() + ($(window).height()/2 + 200))) {
    $("#project-row" + i).addClass("projects-container-row-fade-in");

  }
}
}, 100);
}

/* PROJECTS END */

/* ABOUT page PARTICLE CONTAINER */
var browserWidth = $(window).width();

function particleEndValues(classNumber) {
    $(".about-p" + classNumber).css({"left": particleValues(browserWidth + 250, browserWidth + 50) +"px", "top": particleValues(475, 25) + "px", "opacity": Math.random(), "transition": "left " + particleValues(15, 13.5) + "s ease, top " + particleValues(15, 13.5) + "s ease, opacity " + particleValues(15, 13) + "s ease"});
}


 function particleValuesAbout (max, min) {
    return (Math.random() * (max - min + 1) + min);
 }

function createParticle(classNumber) {
  $("#about-row1").append("<div class='about-p about-p" + classNumber + "'></div>");
}

var particlesTotal = 0;

setInterval( function() {
  particlesTotal ++;
  createParticle(particlesTotal);
  $(".about-p" + particlesTotal).css({"left": particleValuesAbout(-25, -5) + "px", "top": particleValues(475, 25) + "px"});
  particleEndValues(particlesTotal - 1);
}, 50);


setTimeout(function() {
  deleteParticle(0);
}, 9000);


function deleteParticle(particleNumber) {
  setInterval(function() {
    $(".about-p" + particleNumber).remove();
  particleNumber ++;
  }, 50);
}

/* ABOUT PAGE PARTICAL CONTAINER END */

/* CONTACT BACK TO TOP FADER */

function bindBackToTopFader() {
$(".square").hover(function enterSquare() {
  $(this).addClass("trans").removeClass("trans-out");
}, function exitSquare() {
  $(this).removeClass("trans").addClass("trans-out");
}
);
}



/*  ANCHOR LINKS SMOOTH SCROLLING */
function bindAnchorLinkSmoothScroll() {
$("a").on('click', function(scrollLocation) {

  // Make sure this.hash has a value before overriding default behavior

    // Prevent default anchor click behavior
    scrollLocation.preventDefault();

    // Store hash
    var position = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html').animate({
      scrollTop: $(position).offset().top
    }, 1000, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.scrollLocation = position;
    });

});
}


/* Container body fade in
Display everything below title screen,
and fade in on document loaded */
function containerBodyFadeIn() {
  $(".container-body").addClass("container-body-fade-in");
}
