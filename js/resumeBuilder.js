//Lesson 0
//append "hqtan" to DOM objects with id=main
$("#main").append("hqtan");

//Lesson 1
var x = "puppies are awesome";
var funThoughts = "kungfu kats";

$("#main").append("<br>");
$("#main").append(x.replace("puppies", funThoughts));

var formattedName = "hqtan";
var formattedRole = "non-specialist";

$("#header").prepend(HTMLheaderRole.replace("%data%", formattedRole));
$("#header").prepend(HTMLheaderName.replace("%data%", formattedName));
