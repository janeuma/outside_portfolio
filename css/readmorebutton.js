var collapse = document.getElementsByClassName("collapsible");
var num;

for (num = 0; num < collapse.length; num++) {
    collapse[num].addEventListener("click", function(){
        this.classList.toggle("active");
        var art = this.nextElementSibling;
        if(art.style.display === "block") {
            console.log("is clicked and brings up articles");
            art.style.display = "none";
        }
        else{
            console.log("articles are hidden");
            art.style.display = "block";
        }
    });
}