// create a var named 'pos' and setting it 'false'
var pos = false;

// If you click on the label or the card a function starts
$("#sliderCard,#sliderLabel").click(function(e) {
    e.preventDefault();
    if (pos) { // if 'pos' is true -> set 'pos' false -> slide back in
        pos = false;
        $("#sliderCard,#sliderLabel").animate({
            left: "-=100px"
        }, 1200, "easeInOutCubic");
    } else { // if 'pos' is false -> set 'pos' true -> slide out
        pos = true;
        //$("#sliderCard").show(); 
        $("#sliderCard,#sliderLabel").animate({
            left: "+=100px"
        }, 1200, "easeInOutCubic");

    }

});
