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

//define an object
var bio = {};
bio = {
  "name": formattedName,
  "role": formattedRole,
  "contacts": {
    "mobile": "13 11 66",
    "email": "hqtan@bla.id.au",
    "github": "hqtan",
    "twitter": "hqtan",
    "location": "Earth"
  },
  "biopic": "https://avatars1.githubusercontent.com/u/583231?v=3&s=460",
  "welcomeMesaage": "Aloha",
  "skills": ["babysitting", "computery stuff", "dishwashing"]
};

$("#header").append(HTMLemail.replace("%data%", bio.contacts["email"]));
$("#header").append(HTMLbioPic.replace("%data%", bio["biopic"]));

var work = {
  "jobs": [
    {
      "employer": "disney",
      "title": "wit maker",
      "location": "disneyland",
      "dates": "2000-2003",
      "desciption": "I came up with witty remearks" 
    },
    {
      "employer": "nasa",
      "title": "ufo searcher",
      "location": "Pasadena",
      "dates": "2004-present",
      "desciption": "searched for ufos"
    }
  ]
};

var education = {};

education["name"] = "outback high";
education["years"] = "7";
education["city"] = "Uluru";


if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  $("#skills").append(HTMLskills.replace("%data%", bio.skills));
}
//$("#workExperience").append(HTMLworkTitle.replace("%data%", work.jobs));

$("#education").append(HTMLschoolStart);
$("#education").append(HTMLschoolName.replace("%data%", education["name"]));

/*

work contains an array of jobs. Each job object in jobs should contain an
employer, title, location, dates worked and description.

projects contains an array of projects. Each project object in projects should
contain a title, dates worked, description, and an images array with URL strings
for project images.

bio contains a name, role, welcomeMessage, contacts object and skills array.
The contacts object should contain (but doesn't have to) a mobile number,
email address, github username, twitter handle and location.

education contains an array of schools. Each school object in schools contains a
name, location, degree, majors array, dates attended and a url for the school's
website. education also contains an onlineCourses array.
Each onlineCourse object in onlineCourses should contain a title, school, dates
attended and a url for the course.

*/
