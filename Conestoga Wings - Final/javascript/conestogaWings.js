"use strict";

let slNumber = 0;

showSlides();

function showSlides() 
{

  let slides = document.getElementsByClassName("imageSlides");
  
  for (let i = 0; i < slides.length; i++) 
  {
    slides[i].style.display = "none";  
  }

  slNumber++;

  if (slNumber > slides.length) 
  {
    slNumber = 1
  }    

  slides[slNumber-1].style.display = "block";  

  // Set time out to 5 seconds for each image
  setTimeout(showSlides, 5000); 
}

// When the user clicks on the button, toggle between hiding and showing the dropdown content
function showPlanList() 
{
  document.getElementById("myDropdown").classList.toggle("show");
}

function showManageList() 
{
  document.getElementById("myDropdown2").classList.toggle("show");
}


// Close the dropdown if the user clicks outside of it
window.onclick = function(clickEvent) 
{
  if (clickEvent.target.matches('.dropbtn') == false) 
  {
    var myDropdown = document.getElementById("myDropdown");

    if (myDropdown.classList.contains('show')) 
    {
      myDropdown.classList.remove('show');
    }
  }

  if (clickEvent.target.matches('.dropbtn2') == false) 
  {
    var myDropdown = document.getElementById("myDropdown2");

    if (myDropdown.classList.contains('show')) 
    {
      myDropdown.classList.remove('show');
    }
  }
}

function moveToBookingPage()
{
  window.location.assign("booking.html");
}

function NewTab() 
{
  window.open("https://www.booking.com", "_blank");
}




