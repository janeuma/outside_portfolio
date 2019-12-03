function readMore2019() {
    var more2019Articles = document.querySelector("#more2019art");
    var moreBtn = document.querySelector("#my2019Btn");
    var dots = document.querySelector("#dots");

    if(dots.style.display === "none"){
        console.log("little articles and read more button should be displayed")
        moreBtn.innerHTML = "Read More 2019 Articles";
        more2019Articles.style.display = "none";
        dots.style.display = "inline";
    }
    else{
        more2019Articles.style.display = "inline";
        moreBtn.innerHTML = "Minimize 2019 Articles";
        dots.style.display = "none";
    }
}

function readMore2018() {
    var more2018Articles = document.querySelector("#art2018");
    var moreBtn = document.querySelector("#my2018Btn");
    var dots = document.querySelector("#dots");

    if(dots.style.display === "none"){
        moreBtn.innerHTML = "Read More 2018 Articles";
        more2018Articles.style.display = "none";
        dots.style.display = "inline";
    }
    else{
        more2018Articles.style.display = "inline";
        moreBtn.innerHTML = "Minimize 2018 Articles";
        dots.style.display = "none";
    }
}

function readMore2017() {
    var more2017Articles = document.querySelector("#art2017");
    var moreBtn = document.querySelector("#my2017Btn");
    var dots = document.querySelector("#dots");

    if(dots.style.display === "none"){
        moreBtn.innerHTML = "Read More 2017 Articles";
        more2017Articles.style.display = "none";
        dots.style.display = "inline";
    }
    else{
        more2017Articles.style.display = "inline";
        moreBtn.innerHTML = "Minimize 2017 Articles";
        dots.style.display = "none";
    }
}

function readMore2016() {
    var more2016Articles = document.querySelector("#art2016");
    var moreBtn = document.querySelector("#my2016Btn");
    var dots = document.querySelector("#dots");

    if(dots.style.display === "none"){
        moreBtn.innerHTML = "Read More 2016 Articles";
        more2016Articles.style.display = "none";
        dots.style.display = "inline";
    }
    else{
        more2016Articles.style.display = "inline";
        moreBtn.innerHTML = "Minimize 2016 Articles";
        dots.style.display = "none";
    }
}

function readMore2015() {
    var more2015Articles = document.querySelector("#art2015");
    var moreBtn = document.querySelector("#my2015Btn");
    var dots = document.querySelector("#dots");

    if(dots.style.display === "none"){
        moreBtn.innerHTML = "Read More 2015 Articles";
        more2015Articles.style.display = "none";
        dots.style.display = "inline";
    }
    else{
        more2015Articles.style.display = "inline";
        moreBtn.innerHTML = "Minimize 2015 Articles";
        dots.style.display = "none";
    }
}

function readMore2014() {
    var more2014Articles = document.querySelector("#art2014");
    var moreBtn = document.querySelector("#my2014Btn");
    var dots = document.querySelector("#dots");

    if(dots.style.display === "none"){
        moreBtn.innerHTML = "Read More 2014 Articles";
        more2014Articles.style.display = "none";
        dots.style.display = "inline";
    }
    else{
        more2014Articles.style.display = "inline";
        moreBtn.innerHTML = "Minimize 2014 Articles";
        dots.style.display = "none";
    }
}
