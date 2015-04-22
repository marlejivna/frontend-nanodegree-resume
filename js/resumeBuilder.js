//$("#main").append("Maria");

//var awesomeThoughts="I am Maria and I am AWESOME";

//var funThoughts=awesomeThoughts.replace("AWESOME","FUN")

//$("#main").append(funThoughts);

//var formattedName="Maria";
//var formattedRole="QA";

//$("#header").prepend(HTMLheaderName.replace("%data%", formattedName));
//$("#header").append(HTMLheaderRole.replace("%data%", formattedRole));

var bio =
{
	"name" : "Maria",
	"lastname" : "Godlevska",
	"role" : ["QA", "Team Lead"],
	"age" : 31
};

//var work={};
//work.current="Senior QA Engineer";
//work.employer="N-iX";
//work.city="Lviv";

//var education={};
//education["degree"]="master";

var work =
{
	"projects" : [
		{
			"name" : "StreamServe",
			"position" : ["Senior QA Engineer", "Team Lead"]
		},
		{
			"name" : "Lebara",
			"position" : ["Senior QA Engineer"]
		}
	]
};

var education =
{
	"schools" : [
		{
			"name" : "Banking Univercity",
			"city" : "Lviv",
			"degree" : "BA",
			"major" : "Banking"
		},
		{
			"name" : "Banking Univercity",
			"city" : "Lviv",
			"degree" : "Masters",
			"major" : ["Economic Cybernetics"]
		}
	],
	"online courses" : [
		{
			"title" : "Introduction to computer science",
			"school" : "Udacity"
		}
	]
};

$("#header").prepend(HTMLheaderName.replace("%data%", bio.name + " " + bio.lastname));
//$("#main").append(bio.role);
$("#main").append("My current position is: " + work.projects[0].position + "<br/>");
$("#main").append("My degree is: " + education.schools[0].degree);
