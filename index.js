$(document).ready(function(){

    // banner owl carousel
    $("#banner-area .owl-carousel").owlCarousel({
        dots: true,
        items: 1
    });

      // top sale owl carousel
      $("#top-sale .owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        responsive : {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000 : {
                items: 5
            }
        }
    });

    // isotope filter
    
    var $grid=$(".grid").isotope({
        itemSelector:'.grid-item',
        layoutMode:'fitRows'
});

 // filter items on button click
 $(".button-group").on("click", "button", function(){
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue});
})


   // New Phone owl carousel
   $("#new-phones .owl-carousel").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    responsive : {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000 : {
            items: 5
        }
    }
   });


 // blogs owl carousel
    $("#blogs.owl-carousel").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        responsive : {
            0: {
                items: 1
            },
            600: {
                items: 3
            }
        }
    })

// product qty section

//---------------------------------------------------------------------
// let $qty_up = $(".qty .qty-up");
// let $qty_down = $(".qty .qty-down");
// let $input = $(".qty .qty-input");
// // click on qty up button
// $qty_up.click(function(e) {
//     if ($input.val() >= 1 && $input.val() < 10) {
//         $input.val(function(i, oldval) {
//             return ++oldval;
//         });
//     }
// });

// $qty_down.click(function(e) {
//     if ($input.val() > 1 && $input.val() <= 10) {
//         $input.val(function(i, oldval) {
//             return --oldval;
//         });
//     }
// });
//------------------------------------------------------------------------

 // Click on qty up button
 $(".qty-up").click(function() {
    let inputField = $(this).closest(".qty").find(".qty_input");
    let currentValue = parseInt(inputField.val());
    if (!isNaN(currentValue) && currentValue < 10) {
        inputField.val(currentValue + 1);
    }
});

// Click on qty down button
$(".qty-down").click(function() {
    let inputField = $(this).closest(".qty").find(".qty_input");
    let currentValue = parseInt(inputField.val());
    if (!isNaN(currentValue) && currentValue > 1) {
        inputField.val(currentValue - 1);
    }
});


});