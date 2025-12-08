//  Faq Page
$(document).ready(function(){
    $(".faq-ques").click(function(){
        var $parent = $(this).parent();

        // Remove 'active' class from all elements
        $('.faq-ques').not(this).parent().removeClass('active');

        // Toggle 'active' class on the clicked element's parent
        $parent.toggleClass('active');
    });
});

$(document).ready(function(){
    $(".faq-sticky-ham").click(function(){
        $(".faq-mob-sticky .faq-page-anchors").toggleClass("active");
    })
});

$(document).ready(function() {
    $('.faq-page-anchors #first').on('click', function(event) {
        event.preventDefault();
        setTimeout(function() {
            var targetElement = $('#one');
            if (targetElement.length) {
                var targetOffset = targetElement.offset().top;

                $('html, body').animate({
                    scrollTop: targetOffset
                }, 0); // Adjust the speed (800) as needed
            }
        }, 1000);
    });
});
$(document).ready(function() {
    $('.faq-page-anchors #second').on('click', function(event) {
        event.preventDefault();
        setTimeout(function() {
            var targetElement = $('#two');
            if (targetElement.length) {
                var targetOffset = targetElement.offset().top;

                $('html, body').animate({
                    scrollTop: targetOffset
                }, 0); // Adjust the speed (800) as needed
            }
        }, 1000);
    });
});
$(document).ready(function() {
    $('.faq-page-anchors #third').on('click', function(event) {
        event.preventDefault();
        setTimeout(function() {
            var targetElement = $('#three');
            if (targetElement.length) {
                var targetOffset = targetElement.offset().top;

                $('html, body').animate({
                    scrollTop: targetOffset
                }, 0); // Adjust the speed (800) as needed
            }
        }, 1000);
    });
});
$(document).ready(function() {
    $('.faq-page-anchors #fourth').on('click', function(event) {
        event.preventDefault();
        setTimeout(function() {
            var targetElement = $('#four');
            if (targetElement.length) {
                var targetOffset = targetElement.offset().top;

                $('html, body').animate({
                    scrollTop: targetOffset
                }, 0); // Adjust the speed (800) as needed
            }
        }, 1000);
    });
});
$(document).ready(function() {
    $('.faq-page-anchors #fifth').on('click', function(event) {
        event.preventDefault();
        setTimeout(function() {
            var targetElement = $('#five');
            if (targetElement.length) {
                var targetOffset = targetElement.offset().top;

                $('html, body').animate({
                    scrollTop: targetOffset
                }, 0); // Adjust the speed (800) as needed
            }
        }, 1000);
    });
});
$(document).ready(function() {
    $('.faq-page-anchors #sixth').on('click', function(event) {
        event.preventDefault();
        setTimeout(function() {
            var targetElement = $('#six');
            if (targetElement.length) {
                var targetOffset = targetElement.offset().top;

                $('html, body').animate({
                    scrollTop: targetOffset
                }, 0); // Adjust the speed (800) as needed
            }
        }, 1000);
    });
});
$(document).ready(function() {
    $('.faq-page-anchors #seventh').on('click', function(event) {
        event.preventDefault();
        setTimeout(function() {
            var targetElement = $('#seven');
            if (targetElement.length) {
                var targetOffset = targetElement.offset().top;

                $('html, body').animate({
                    scrollTop: targetOffset
                }, 0); // Adjust the speed (800) as needed
            }
        }, 1000);
    });
});
$(document).ready(function() {
    $('.faq-page-anchors #eighted').on('click', function(event) {
        event.preventDefault();
        setTimeout(function() {
            var targetElement = $('#eight');
            if (targetElement.length) {
                var targetOffset = targetElement.offset().top;

                $('html, body').animate({
                    scrollTop: targetOffset
                }, 0); // Adjust the speed (800) as needed
            }
        }, 1000);
    });
});
$(document).ready(function() {
    $('.faq-page-anchors #ninth').on('click', function(event) {
        event.preventDefault();
        setTimeout(function() {
            var targetElement = $('#nine');
            if (targetElement.length) {
                var targetOffset = targetElement.offset().top;

                $('html, body').animate({
                    scrollTop: targetOffset
                }, 0); // Adjust the speed (800) as needed
            }
        }, 1000);
    });
});
$(document).ready(function() {
    $('.faq-page-anchors #tenth').on('click', function(event) {
        event.preventDefault();
        setTimeout(function() {
            var targetElement = $('#ten');
            if (targetElement.length) {
                var targetOffset = targetElement.offset().top;

                $('html, body').animate({
                    scrollTop: targetOffset
                }, 0); // Adjust the speed (800) as needed
            }
        }, 1000);
    });
});
