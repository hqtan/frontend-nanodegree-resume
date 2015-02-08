//Lesson 0
//append "hqtan" to DOM objects with id=main
//$("#main").append("hqtan");

//Lesson 1
//var x = "puppies are awesome";
//var funThoughts = "kungfu kats";

//$("#main").append("<br>");
//$("#main").append(x.replace("puppies", funThoughts));

var formattedName = "hq tan";
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
      "description": "I came up with witty remearks" 
    },
    {
      "employer": "nasa",
      "title": "ufo searcher",
      "location": "Pasadena",
      "dates": "2004-present",
      "description": "searched for ufos"
    }
  ]
};

work.jobs.map(function x(j){
  $("#workExperience").append(HTMLworkStart);
  var formattedEmployerTitle = HTMLworkEmployer.replace("%data%", j.employer) +
                                HTMLworkTitle.replace("%data%", j.title);
  var formattedDatesLocation = HTMLworkDates.replace("%data%", j.dates) +
                                HTMLworkLocation.replace("%data%", j["location"]);
  $(".work-entry:last").append(formattedEmployerTitle);
  $(".work-entry:last").append(formattedDatesLocation);
  $(".work-entry:last").append(HTMLworkDescription.replace("%data%", j.description));
  $("#workExperience").append(HTMLworkStart);
});


var education = {};

education["name"] = "outback high";
education["years"] = "7";
education["city"] = "Uluru";


if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  $("#skills").append(HTMLskills.replace("%data%", bio.skills));
}

$("#education").append(HTMLschoolStart);
$("#education").append(HTMLschoolName.replace("%data%", education["name"]));

$("#main").append(internationalizeButton);

function inName(n) {
  var nArray = n.split(' ');
  var firstName = nArray[0][0].toUpperCase() + nArray[0].slice(1);
  var lastName = nArray[1].toUpperCase();

  return firstName + " " + lastName;
}

var projects = {
  "projects": [
    {
      "title": "find a ufo",
      "dates": "2010 - ongoing",
      "description": "searching for ufos",
      "images": ["https://upload.wikimedia.org/wikipedia/en/d/d5/Marvin_the_Martian.svg"]
    },  
    {
      "title": "make a robot",
      "dates": "2013 - ongoing",
      "description": "make a robot for mavin",
      "images": [
                  "https://upload.wikimedia.org/wikipedia/en/3/39/R2-D2_Droid.png",
                  "http://vignette1.wikia.nocookie.net/space-dandy/images/8/8f/QT.png/revision/latest?cb=20140210061941" 
                ]
    }  
  ],
  "display": function(){
    document.getElementById('projects').style.backgroundColor = 'white';
    this.projects.map(function(p){
      //console.log("this is: " + p.title);
      $("#projects").append(HTMLprojectStart);
      $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", p.title));
      $(".project-entry:last").append(HTMLprojectDates.replace("%data%", p.dates));
      $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", p.description));
      p.images.map(function(i){
        $(".project-entry:last").append(HTMLprojectImage.replace("%data%", i));
      });
    });
  }
};

projects.display();

$("#mapDiv").append(googleMap);

