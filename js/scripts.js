jQuery(function ($) {
    'use strict';
    (function () {
        $('#preloader').delay(3000).fadeOut('slow');
    }());
});

jQuery(function(){
   jQuery('.toggleSection').click(function(){
         jQuery('#section'+$(this).attr('target')).fadeToggle(1000);
         if($(this).children(":first").hasClass("fa-plus")){
            $(this).children(":first").addClass("fa-minus");
            $(this).children(":first").removeClass("fa-plus");
         }
         else{
            $(this).children(":first").removeClass("fa-minus");
            $(this).children(":first").addClass("fa-plus");
         }
         
   });
});

function validateForm() {
    var x = document.forms["contactForm"]["name"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    if(/\d/.test(x)){
        alert("Name must not contain any numbers");
        return false;
    }
}

function updateClock ( )
{
  var currentTime = new Date ( );

  var currentHours = currentTime.getHours ( );
  var currentMinutes = currentTime.getMinutes ( );
  var currentSeconds = currentTime.getSeconds ( );

  // Pad the minutes and seconds with leading zeros, if required
  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

  // Choose either "AM" or "PM" as appropriate
  var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

  // Convert the hours component to 12-hour format if needed
  currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

  // Convert an hours component of "0" to "12"
  currentHours = ( currentHours == 0 ) ? 12 : currentHours;

  // Compose the string for display
  var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

  var weekday = new Array(7);
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var month = new Array(13);
    month[1] = "January";
    month[2] = "Febuary";
    month[3] = "March";
    month[4] = "April";
    month[5] = "May";
    month[6] = "June";
    month[7] = "July";
    month[8] = "August";
    month[9] = "September";
    month[10] = "October";
    month[11] = "November";
    month[12] = "December";

  // Update the time display
  document.getElementById("clock").firstChild.nodeValue = currentTimeString;
  document.getElementById("day").innerText = weekday[currentTime.getDay()] + ", " + month[currentTime.getMonth()] + " " + currentTime.getDate() + ", " +currentTime.getFullYear();  
}
$("textarea")
.focus(function(){$(".cf").css("display","block") })
.blur(function(){$(".cf").css("display","none") });