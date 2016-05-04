//Smooth Scrolling! Credits to Devin https://css-tricks.com/snippets/jquery/smooth-scrolling/
// $('a[href*=#]:not([href=#])').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
//         || location.hostname == this.hostname) {

//         var target = $(this.hash);
//         target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//            if (target.length) {
//              $('html,body').animate({
//                  scrollTop: target.offset().top
//             }, 500);
//             return false;
//         }
//     }
// });

var $aboutDetails = $("#about-details");
var $experienceDetails = $("#experience-details");
var $projectsCarousel = $("#projects-carousel");
var numProjects = 2;


function removeCollapse(htmlID) {
    htmlID.addClass('in');
}

function addCollapse(htmlID) {
    htmlID.removeClass('in');
}

function alignProjectDetails(){
    for (var i= 1; i<=numProjects; i++){
        var $project = $(".project-" + i )
        var $projectDetails = $("#project-" + i + "-detail");

        if ($project.hasClass("active")){
            addCollapse($projectDetails);
        } else {
            removeCollapse($projectDetails);
        }
    }
}

//------------------------------------------//

// Code on startup

$(document).ready(function() {
    if ($(window).width() > 800){
        removeCollapse($aboutDetails);
        removeCollapse($experienceDetails);
        removeCollapse($projectsCarousel);
    }
})

//------------------------------------------//

// Removing Collapse when going on Desktop Version

$(window).resize(function() {
    if ($(window).width() > 800){
        removeCollapse($aboutDetails);
        removeCollapse($experienceDetails);
        removeCollapse($projectsCarousel);
    }
});

//-----------------------------------------//

// Projects Detail are aligned with its respective Project

$(document).on("click", "#projects-carousel .carousel-control", function(){
    alignProjectDetails();
});

$(document).on("click", "#projects-heading .plus-button", function(){
    if ($projectsCarousel.attr("display") == "none"){
        for (var i= 1; i<=numProjects; i++){
            //code to add class
        } 
    } else {
        for (var i= 1; i<=numProjects; i++){
            var $projectDetails = $("#project-" + i + "-detail");
            addCollapse($projectDetails);
        } 
    }
})

//-----------------------------------------//
