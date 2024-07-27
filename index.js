var addbtn = document.querySelector(".addbook-btn")
var overlay = document.querySelector(".overlay")
var popupbox = document.querySelector(".popupbox")
addbtn.addEventListener("click", function () {
    overlay.style.display = "block";
    popupbox.style.display = "block";

});

var cancelbtn = document.querySelector(".cancel-btn")

cancelbtn.addEventListener("click", function (event) {
    event.preventDefault();
    overlay.style.display = "none"
    popupbox.style.display = "none"

});

var container = document.querySelector(".container");
var addbtn = document.querySelector(".add-btn")
var addbookname = document.getElementById("bookname")
var addauthorname = document.getElementById("authorname")
var addtextarea = document.getElementById("textarea")



addbtn.addEventListener("click", function (event) {
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class", "book-container")


    div.innerHTML = `<h1>${addbookname.value}</h1>  
              <h2>${addauthorname.value}</h2>
       <p>${addtextarea.value}  </p>
       <button onclick="deletebook(event)">Delete</button>`

    container.append(div)
   
    overlay.style.display = "none"
    popupbox.style.display = "none"

});

function deletebook(event) {
    event.target.parentElement.remove();
}


