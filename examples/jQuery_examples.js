// Examples of jQuery vs JavaScript for syntax reference

// ---------- SELECTING CONTENT ----------
// JavaScript:
document.getElementById("id");
// jQuery:
$("#id");

// ---------- CHANGING CONTENT ----------
// JavaScript:
document.getElementById("id").innerHTML = "Hello World!";
// jQuery:
$("#id").html("Hello World!");

// ---------- EVENT LISTENERS ----------
// JavaScript:
document.getElementById("id")
    .addEventListener("click", function() {
        alert("Element #id was clicked.");
    });
// jQuery:
$("#id").click(function() {
    alert("Element #id was clicked.");
});

// ---------- DOCUMENT READY ----------
// jQuery:
$(document).ready(function() {
    $("id").html("Hello World!");
    // Other function calls can also go inside here
    // So everything runs only once the document is ready.






    
});
// JavaScript
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("demo").innerHTML = "Hello World!";
});


const data = JSON.parse(json);
console.log(data.states.texas.cities);
// Output: ["dallas", "irving"]