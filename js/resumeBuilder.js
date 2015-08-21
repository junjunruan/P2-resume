var work = {
	"jobs": [
		{
			"employer": "Hangzhou CS&S Anren Network & Com Co.,Ltd",
			"employerUrl": "http://www.zrar.com/",
			"title": "Software Testing Engineer",
			"location": "Hangzhou, China",
			"dates": "2010-2011",
			"description": "Collaborated with developers, participated in teams through the full Agile software development life cycle:"
						+ "1) read requirements, wrote test plans and designed test cases; 2) set up test environments;"
						+ "3) executed manual testing, posted and tracked bugs; 4) created and ran automated test scripts;"
						+ "5) fiished test reports."
		},
		{
			"employer": "The University of North Carolina at Greensboro",
			"employerUrl": "http://www.uncg.edu/",
			"title": "Graduate Assistant",
			"location": "Greensboro, NC",
			"dates": "2013-2015",
			"description": "Developed an algorithm to reduce social network connectivity with effient cuts in MATLAB language."
						+ "Two measures were defied to evaluate the algorithm: average inverse shortest path length (AIPL) and rumor saturation rate (RSR)."
						+ "The algorithm can be used to slow down rumor spreading."
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Protfolio Site",
			"dates": "2015",
			"description": "It is the first project in Udacity Web Developer Nanodegree. And it is used to show all of my projects.",
			"images": ["images/p1.png"]
		},
		{
			"title": "Big Data Classification",
			"dates": "2014",
			"description": "Confiured Hadoop environment, learned diffrent machine learning approaches,"
						+ "implemented Support Vector Machine (SVM) in R language to solve classifiation problems,"
						+ "and evaluated the advantage of Hadoop system in big data processing.",
			"images": ["images/classification.png"]
		},
		{
			"title": "Network Animation",
			"dates": "2014",
			"description": "Gained experience in the Open Systems Interconnection (OSI) model,"
						+ " created an animation with Java to imitate encoding, decoding and modulation approaches,"
						+ "error detection and correction techniques, shortest path routing mechanism using Dijkstra algorithm.",
			"images": ["images/network.png"]
		},
		{
			"title": "Java Catering Application",
			"dates": "2013",
			"description": "Team project to develop a custom Java application for a wedding catering company."
						+ "Documented requirements, created use-case diagrams and descriptions,"
						+ " designed a Swing GUI and implemented functions.",
			"images": ["images/catering.png"]
		}
	]
};

var bio = {
	"name": "Junjun",
	"role": "Web Developer",
	"welcomeMsg": "I am currently looking for Front-End Engineer position and willing to be relocated!",
	"contacts": {
		"mobile": "410-736-1635",
		"email": "junjunruan@gmail.com",
		"github": "junjunruan",
		"linkedIn": "junjunruan",
		"location": "Durham, NC"
	},
	"skills": ["java","javaScript","HTML","CSS","SQL","MATLAB","R"],
	"bioPic": "images/me.png"
};

var education = {
	"schools": [
		{
			"name": "University of North Carolina at Greensboro",
			"location": "Greensboro, NC",
			"degree": "M.S.",
			"major": "Computer Science",
			"dates": "2013-2015",
			"url": "http://www.uncg.edu/",
			"GPA": "3.2",
			"project": "Bachelor’s Project: Market Trading Management System Development (Advisor: Prof. Fasheng Sheng)"
		},
		{
			"name": "Zhejiang University of Finance & Economics",
			"location": "Hangzhou, China",
			"degree": "B.S.",
			"major": "Computer Science",
			"dates": "2006-2010",
			"url": "http://www.zufe.edu.cn/",
			"GPA": "3.7",
			"project": "Master’s Thesis: Effient Link Cuts in Online Social Networks (Advisor: Prof. Jing Deng)"
		}
	],
	"onlineCourses": [
		{
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"dates": "2015",
			"fakeUrl": "https://www.udacity.com/ud304",
			"realUrl": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
		},
		{
			"title": "Responsive Web Design Fundamentals",
			"school": "Udacity",
			"dates": "2015",
			"fakeUrl": "https://www.udacity.com/ud893",
			"realUrl": "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
		},
		{
			"title": "Responsive Images",
			"school": "Udacity",
			"dates": "2015",
			"fakeUrl": "https://www.udacity.com/ud882",
			"realUrl": "https://www.udacity.com/course/responsive-images--ud882"
		},
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"dates": "2015",
			"fakeUrl": "https://www.udacity.com/ud804",
			"realUrl": "https://www.udacity.com/course/javascript-basics--ud804"
		},
		{
			"title": "Intro to jQuery",
			"school": "Udacity",
			"dates": "2015",
			"fakeUrl": "https://www.udacity.com/ud245",
			"realUrl": "https://www.udacity.com/course/intro-to-jquery--ud245"
		}
	]
};

//bio
bio.display = function() {
	//name,role
	var formatedName = HTMLheaderName.replace("%data%",bio.name);
	var formatedRole = HTMLheaderRole.replace("%data%",bio.role);

	$("#header").prepend(formatedRole);
	$("#header").prepend(formatedName);

	//contacts
	var formatedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	formatedEmail = formatedEmail.replace("#",bio.contacts.email);
	var formatedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	var formatedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	var formatedLinkedIn = HTMLlinkedIn.replace("%data%",bio.contacts.linkedIn);
	var formatedLocation = HTMLlocation.replace("%data%",bio.contacts.location);

	$("#topContacts").append(formatedMobile + formatedEmail + formatedGithub + formatedLinkedIn + formatedLocation);
	$("#footerContacts").append(formatedMobile + formatedEmail + formatedGithub + formatedLinkedIn + formatedLocation);

	//biopic, welcomeMessage, skills
	var formatedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);
	var formatedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMsg);
	$("#header").append(formatedBioPic);
	$("#header").append(formatedWelcomeMsg);

	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		for(skill in bio.skills) {
			var formatedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
			$("#skills").append(formatedSkills);
		}
	}
}

//work
work.display = function() {
	for(job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formatedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	formatedEmployer = formatedEmployer.replace("#",work.jobs[job].employerUrl);
	var formatedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var formatedEmployerTitle = formatedEmployer + formatedTitle;
	var formatedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
	var formatedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
	var formatedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

	$(".work-entry:last").append(formatedEmployerTitle + formatedDates + formatedLocation + formatedDescription);

	formatedEmployer.link("http://www.uncg.edu/");
}
}

//projects
projects.display = function() {
	for(project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formatedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		var formatedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		var formatedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);

		$(".project-entry:last").append(formatedTitle + formatedDates + formatedDescription);

		if(projects.projects[project].images.length > 0) {
			for(img in projects.projects[project].images) {
				var formatedImages = HTMLprojectImage.replace("%data%",projects.projects[project].images[img]);
				$(".project-entry:last").append(formatedImages);
			}
		}
	}
}

//education
education.display = function() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formatedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
		formatedSchoolName = formatedSchoolName.replace("#",education.schools[school].url)
		var formatedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formatedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		var formatedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var formatedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
		var formatedSchooldGPA = HTMLschoolGPA.replace("%data%",education.schools[school].GPA);
		var formatedSchoolProject = HTMLschoolProject.replace("%data%",education.schools[school].project);

		$(".education-entry:last").append(formatedSchoolName + formatedSchoolDegree + formatedSchoolDates
										+ formatedSchoolLocation + formatedSchoolMajor + formatedSchooldGPA + formatedSchoolProject);
	}

	$("#education").append(HTMLonlineClasses);
	for(onlineCourse in education.onlineCourses) {

		$("#education").append(HTMLschoolStart);

		var formatedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[onlineCourse].title);
		formatedOnlineTitle = formatedOnlineTitle.replace("#",education.onlineCourses[onlineCourse].realUrl);
		var formatedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[onlineCourse].school);
		var formatedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[onlineCourse].dates);
		var formatedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[onlineCourse].fakeUrl);
		formatedOnlineURL = formatedOnlineURL.replace("#",education.onlineCourses[onlineCourse].realUrl);

		$(".education-entry:last").append(formatedOnlineTitle + formatedOnlineSchool + formatedOnlineDates + formatedOnlineURL);
	}
}

//map display function
function mapDisplay(){
	$("#mapDiv").append(googleMap);
}

//char display function,
//this part of code is learned from D3 Tutorials section in the book of interactive data visualization.
function chartDisplay() {
	$("#chartDiv").append(skillChat);
	var width = $("#chart").width() * 0.8;
	var height = $("#chart").height();
	var barPadding = $("#chart").width()/20;
	var skillLevel = [80, 60, 60, 60, 60, 80];

	//create svg
	var svg = d3.select("#chart")
				.append("svg")
				.attr("width", width)
				.attr("height", height);

	//create bar
	svg.selectAll("rect")
		.data(skillLevel)
		.enter()
		.append("rect")
		.attr("opacity","0.5")
		.attr("x", function(d, i) {
			return i * (width / skillLevel.length);
		})
		.attr("y", function(d) {
			return height - (d * 3);
		})
		.attr("width", width / skillLevel.length - barPadding)
		.attr("height", function(d) {
			return d * 4;
		})
		.attr("fill", "#6699FF");

	//add label on bar
	svg.selectAll("text")
		.data(skillLevel)
		.enter()
		.append("text")
		.text(function(d, i) {
			return bio.skills[i] + " " + d + "%";
		})
		.attr("text-anchor", "middle")
		.attr("x", function(d, i) {
			return i * (width / skillLevel.length) + (width / skillLevel.length - barPadding) / 2;
		})
		.attr("y", function(d) {
			return height - (d * 3) - 5;
		})
		.attr("font-family", "sans-serif")
		.attr("font-size", "1.2em")
		.attr("fill", "black");
}

//call functions
bio.display();
work.display();
projects.display();
education.display();
mapDisplay();
chartDisplay();