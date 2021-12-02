
$(document).ready(function () {
    if ($(window).scrollTop() > 60) {
        $(".top").click(function (e) { 
            e.preventDefault();
            $(window).scrollTop(0);
        });
    } 

    if ($(window).innerWidth() >= 480 && $(window).innerWidth()<= 1180) {
        $("#show").fadeIn(300);
    }
    $("#show").click(function (e) { 
        e.preventDefault();
        $("#menu ul").css({
            top :50,
            right : -20
        });
        $("#show").hide(200);
        $("#hide").show(200);
    });

    $("#hide").click(function (e) { 
        e.preventDefault();
        $("#menu ul").css({
            top :-16,
            right : -110 + '%'
        });
        $("#show").show(200);
        $("#hide").hide(200);
    });
    $(window).scroll(function (){
        $("#menu ul").css({
            top :-16,
            right : -110 + '%'
        });
        $("#show").show(200);
        $("#hide").hide(200);
    })
});

window.onload = function() {
    $(".loaders").fadeOut(3000, function() {
        $(".loaders").remove();
    });
}

var sliderImage = Array.from(document.querySelectorAll(".container-slider img")),
    countSlider = sliderImage.length,
    curentSlide = 1,
    slideNumberElement = document.getElementById("slide-number"),
    pervButton = document.getElementById("prev"),
    nextButton = document.getElementById("next");
    nextButton.onclick= nextSlide;
    pervButton.onclick = prevslide;

    var paginationElement = document.createElement("ul");
        paginationElement.setAttribute("id", "pagination-ul" )
    for(var i =  1 ; i <= countSlider; i++ ) {
        var pagintinItem = document.createElement("li");
        pagintinItem.setAttribute("data-index", i);
        pagintinItem.appendChild(document.createTextNode(i));
        paginationElement.appendChild(pagintinItem)
    }
    document.getElementById("indecators").appendChild(paginationElement);
    var paginationCreateTheNew = document.getElementById("pagination-ul");
    var paginationArray = Array.from(document.querySelectorAll("#pagination-ul li"));
    for (let i = 0; i < paginationArray.length ; i++) {
        
        paginationArray[i].onclick = function ()
        {
            curentSlide = parseInt(this.getAttribute('data-index'));
            theChecker (); 
        }
        
    }
    theChecker ();
    function nextSlide() {
        if (nextButton.classList.contains('disabled')) {
            
        } else {
            curentSlide++
            theChecker ();
        }
    }

    function prevslide() {
        if (pervButton.classList.contains('disabled')) {
            
        } else {
            curentSlide--
            theChecker ();
        }
    }

function theChecker () {
    slideNumberElement.textContent = 'slide # ' + curentSlide + 'of ' + countSlider;
    removeAllActiveClass();
    sliderImage[curentSlide - 1].classList.add('active');
    paginationCreateTheNew.children[curentSlide - 1].classList.add('active');
    if(curentSlide == 1){
        pervButton.classList.add('disabled');
    }else
    {
        pervButton.classList.remove('disabled')
    }

    if (curentSlide == countSlider) {
        nextButton.classList.add('disabled')
    } else {
        nextButton.classList.remove('disabled')
    }
}

function removeAllActiveClass() {
    sliderImage.forEach(function (img) {
        img.classList.remove('active')
    });
    
    paginationArray.forEach(function (bulittes) {
        bulittes.classList.remove('active')
    })
}