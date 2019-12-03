var navi = document.querySelector("#access_nav");
var body = document.body;

navi.addEventListener('click', function(c){
    body.className = body.className? '' : 'with_nav';
    c.preventDefault();
});