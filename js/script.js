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
            removeCollapse($projectDetails);
        } else {
            addCollapse($projectDetails);
        }
    }
}

function reverseAlignProjectDetails() {
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
        removeCollapse($("#project-1-detail"));
    }
})

//------------------------------------------//

// Removing Collapse when going on Desktop Version

$(window).resize(function() {
    if ($(window).width() > 800){
        removeCollapse($aboutDetails);
        removeCollapse($experienceDetails);
        removeCollapse($projectsCarousel);
        $aboutDetails.removeAttr("style");
        $experienceDetails.removeAttr("style");
        $projectsCarousel.removeAttr("style");
        alignProjectDetails();
    }
});

//-----------------------------------------//

// Projects Detail are aligned with its respective Project

$(document).on("click", "#projects-carousel .carousel-control", function(){
    reverseAlignProjectDetails();
});

$(document).on("click", ".carousel-indicators li", function(){
    reverseAlignProjectDetails();
});

$projectsCarousel.on('hidden.bs.collapse', function(){
    for (var i= 1; i<=numProjects; i++){
        var $projectDetails = $("#project-" + i + "-detail");
        addCollapse($projectDetails);
    } 
});

$projectsCarousel.on('shown.bs.collapse', function(){
    for (var i= 1; i<=numProjects; i++){
        alignProjectDetails();
    } 
});


$(document).on("click", "#projects-heading .plus-button", function(){
    var isExpanded = $projectsCarousel.attr("aria-expanded");
    if (isExpanded) {
        for (var i= 1; i<=numProjects; i++){
            var $projectDetails = $("#project-" + i + "-detail");
            addCollapse($projectDetails);
        } 
    }
})

//-----------------------------------------//

