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
    $(".second").css("background-color", "#4fcab0");

    $(".first").css("background-color", "transparent");
    $(".first").css("border", "1px solid #4fcab0");
    $(".all").css("color", "#4fcab0");

    $(".works_figma").css("color", "white");
    $(".third").css("background-color", "#4fcab0");

    $(".works_ux").css("color", "white");
    $(".fourth").css("background-color", "#4fcab0");
});

// Click on Design
$(".works_design").click(function() {
    event.preventDefault();

    $(".all").css("color", "white");
    $(".first").css("background-color", "#4fcab0");

    $(".second").css("background-color", "transparent");
    $(".second").css("border", "1px solid #4fcab0");
    $(".works_design").css("color", "#4fcab0");

    $(".works_figma").css("color", "white");
    $(".third").css("background-color", "#4fcab0");

    $(".works_ux").css("color", "white");
    $(".fourth").css("background-color", "#4fcab0");
});


// Click on Figma
$(".works_figma").click(function() {
    event.preventDefault();

    $(".works_design").css("color", "white");
    $(".second").css("background-color", "#4fcab0");

    $(".third").css("background-color", "transparent");
    $(".third").css("border", "1px solid #4fcab0");
    $(".works_figma").css("color", "#4fcab0");

    $(".all").css("color", "white");
    $(".first").css("background-color", "#4fcab0");

    $(".works_ux").css("color", "white");
    $(".fourth").css("background-color", "#4fcab0");
});


// Click on UX/UI
$(".works_ux").click(function() {
    event.preventDefault();

    $(".works_design").css("color", "white");
    $(".second").css("background-color", "#4fcab0");

    $(".fourth").css("background-color", "transparent");
    $(".fourth").css("border", "1px solid #4fcab0");
    $(".works_ux").css("color", "#4fcab0");

    $(".all").css("color", "white");
    $(".first").css("background-color", "#4fcab0");

    $(".works_figma").css("color", "white");
    $(".third").css("background-color", "#4fcab0");
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