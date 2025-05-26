let menuVariable = document.getElementById("menuUL");
let burgerMenuVariable = document.getElementById("burgerMenuUL");

var path = window.location.pathname;
var page = path.split("/").pop();

const menuItems = [
    {
        displayName: "Forside",
        link: "home.html"
    },
    {
        displayName: "Gavekurve",
        link: "gavekurve.html"
    },
    {
        displayName: "Delikatesser",
        link: "delikatesser.html"
    },
    {
        displayName: "Interiør",
        link: "interioer.html"
    },
    {
        displayName: "Kunsthåndværk",
        link: "kunsthaandvaerk.html"
    },
    {
        displayName: "Kontakt os",
        link: "kontakt.html"
    },
    {
        displayName: "Kurv",
        link: "kurv.html"
    },
   
];

for(let i = 0; i < menuItems.length; i++){

    if(page == menuItems[i].link){
        menuVariable.innerHTML += "<li class=activeNav>" + "<a href=" + menuItems[i].link + ">" + menuItems[i].displayName + "</a>" + "</li>"
        burgerMenuVariable.innerHTML += "<li class=activeNav>" + "<a href=" + menuItems[i].link + ">" + menuItems[i].displayName + "</a>" + "</li>";
    }

    else{
        menuVariable.innerHTML += "<li>" + "<a href=" + menuItems[i].link + ">" + menuItems[i].displayName + "</a>" + "</li>";
        burgerMenuVariable.innerHTML += "<li>" + "<a href=" + menuItems[i].link + ">" + menuItems[i].displayName + "</a>" + "</li>"
    }

}

/* Burger Menu */

function burgerMenuFunction() {
  var x = document.getElementById("burgerMenuUL");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

var jsMedia = window.matchMedia("(max-width: 768px)")

jsMedia.addEventListener("change", function(){
    jsMediaFunction(jsMedia);
})

function jsMediaFunction(){
    var x = document.getElementById("burgerMenuUL");
    x.style.display = "none";
}