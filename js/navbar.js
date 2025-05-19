let menuVariable = document.getElementById("menuUL");
let logoFade = document.getElementById("logoFade");

var path = window.location.pathname;
var page = path.split("/").pop();

const menuItems = [
    {
        displayName: "Home",
        link: "home.html"
    },
    {
        displayName: "About",
        link: "about.html"
    },
    {
        displayName: "Contact",
        link: "contact.html"
    },
   
];

for(let i = 0; i < menuItems.length; i++){

    if(page == menuItems[i].link){
        menuVariable.innerHTML += "<li class=activeNav>" + "<a href=" + menuItems[i].link + ">" + menuItems[i].displayName + "</a>" + "</li>";
    }

    else{
        menuVariable.innerHTML += "<li>" + "<a href=" + menuItems[i].link + ">" + menuItems[i].displayName + "</a>" + "</li>";
    }

}