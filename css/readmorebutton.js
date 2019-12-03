var navi = document.querySelector("#access_nav");
// var body = document.body;

// navi.addEventListener('click', function(c){
//     body.className = body.className? '' : 'with_nav';
//     c.preventDefault();
// });

navi.addEventListener('click', function(closebtn){
    document.querySelector("#access_nav").style.width = "0";
});

navi.addEventListener('click', function(openNav){
    console.log("open navigation bar")
    document.querySelector("#access_nav").style.width = "250px";
});