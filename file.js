alert("JavaScript is connected!");
$(document).ready(function () {

    let currentIndex = 0;

    let slides = $(".slider .slide");
    let dots = $(".slider .dot");

    let totalSlides = slides.length;

    if (totalSlides === 0) {
        console.log("Slides not found!");
        return;
    }

    // Show first image
    slides.hide();
    slides.eq(0).show();

    function showSlide(index) {

        currentIndex = index;

        if (currentIndex >= totalSlides) {
            currentIndex = 0;
        }

        if (currentIndex < 0) {
            currentIndex = totalSlides - 1;
        }

        slides.stop(true, true).fadeOut(300);
        slides.eq(currentIndex).stop(true, true).fadeIn(300);

        // Update dots
        dots.removeClass("active");
        dots.eq(currentIndex).addClass("active");
    }

    // Next button
    $(".next").click(function () {
        showSlide(currentIndex + 1);
    });

    // Previous button
    $(".prev").click(function () {
        showSlide(currentIndex - 1);
    });

    // Dots click
    dots.each(function (index) {
        $(this).click(function () {
            showSlide(index);
        });
    });

    // Automatic slider - 2 seconds
    setInterval(function () {
        showSlide(currentIndex + 1);
    }, 2000);

});
