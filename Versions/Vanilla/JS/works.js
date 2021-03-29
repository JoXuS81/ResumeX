/*
TABLE OF CONTENTS

1. Click on All
2. Click on Design
3. Click on Figma
4. Click on UX/UI

*/


// Click on All
$(".all").click(function() {
    event.preventDefault();

    $(".works_design").css("color", "white");
    $(".second").css("background-color", "#E84646");

    $(".first").css("background-color", "transparent");
    $(".first").css("border", "1px solid #E84646");
    $(".all").css("color", "#E84646");

    $(".works_figma").css("color", "white");
    $(".third").css("background-color", "#E84646");

    $(".works_ux").css("color", "white");
    $(".fourth").css("background-color", "#E84646");
});

// Click on Design
$(".works_design").click(function() {
    event.preventDefault();

    $(".all").css("color", "white");
    $(".first").css("background-color", "#E84646");

    $(".second").css("background-color", "transparent");
    $(".second").css("border", "1px solid #E84646");
    $(".works_design").css("color", "#E84646");

    $(".works_figma").css("color", "white");
    $(".third").css("background-color", "#E84646");

    $(".works_ux").css("color", "white");
    $(".fourth").css("background-color", "#E84646");
});


// Click on Figma
$(".works_figma").click(function() {
    event.preventDefault();

    $(".works_design").css("color", "white");
    $(".second").css("background-color", "#E84646");

    $(".third").css("background-color", "transparent");
    $(".third").css("border", "1px solid #E84646");
    $(".works_figma").css("color", "#E84646");

    $(".all").css("color", "white");
    $(".first").css("background-color", "#E84646");

    $(".works_ux").css("color", "white");
    $(".fourth").css("background-color", "#E84646");
});


// Click on UX/UI
$(".works_ux").click(function() {
    event.preventDefault();

    $(".works_design").css("color", "white");
    $(".second").css("background-color", "#E84646");

    $(".fourth").css("background-color", "transparent");
    $(".fourth").css("border", "1px solid #E84646");
    $(".works_ux").css("color", "#E84646");

    $(".all").css("color", "white");
    $(".first").css("background-color", "#E84646");

    $(".works_figma").css("color", "white");
    $(".third").css("background-color", "#E84646");
});


$(document).ready(function() {
    $('.list').click(function() {
        const value = $(this).attr('data-filter');
        if(value == 'all') {
            $('.itemBox').show('1000');
        }
        else {
            $('.itemBox').not('.' + value).hide('1000');
            $('.itemBox').filter('.' + value).show('1000');
        }
    })
});