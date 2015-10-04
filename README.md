# Project 2: Online Resume
In this project, an online resume should be created based on mockup design. Here is the
[rubric](https://www.udacity.com/course/viewer#!/c-nd001/l-2962818615/m-2971188543) for this project. 
Click this link to visite my online resume: http://junjunruan.github.io/P2-resume/

- Required courses: [JavaScript Basics](https://www.udacity.com/course/javascript-basics--ud804) and [Intro to jQuery] (https://www.udacity.com/course/intro-to-jquery--ud245).
- Required technics: javaScript, jQuery, JSON, HTML, CSS, Bootstrap and Chrome Developer Tools, Google Maps API.

####Process to finish this project:

1. The resume has four distinct sections: work, education, projects and a header with biographical information.

  Build four JSONs, each one representing a different resume section, The objects that created need to follow the names within the schema exactly:

  `bio` contains:
  ```
  name : string
  role : string
  contacts : an object with
        mobile: string
        email: string 
        github: string
        twitter: string 
        location: string
  welcomeMessage: string 
  skills: array of strings
  biopic: url
  display: function
  ```

  `education` contains:
  ```
  schools: array of objects with
       name: string
       location: string
       degree: string
       majors: array of strings
       dates: integer (graduation date)
       url: string
  onlineCourses: array of objects with
       title: string
       school: string
       date: integer (date finished)
       url: string
  display: function
  ```
  
  `work` contains
  ```
  jobs: array of objects with
       employer: string 
       title: string 
       location: string 
       dates: string (works with a hyphen between them)
       description: string 
  display: function
  ```
  
  `projects` contains:
  ```
  projects: array of objects with
        title: string 
        dates: string (works with a hyphen between them)
        description: string
        images: array with string urls
  display: function
  ```

2. Iterate through each JSON and append its information to index.html in the correct section.

  - First off, use jQuery’s selector.append() and selector.prepend() functions to modify index.html. selector.append() makes an element appear at the end of a selected section. selector.prepend() makes an element appear at the beginning of a selected section.

  - Next, pay close attention to the ids of the `<div>s` in index.html and the HTML snippets in helper.js. They are very useful as jQuery selectors for selector.append() and selector.prepend()

  - Then, use the JavaScript method string.replace(old, new) to swap out all the placeholder text (e.g. %data%) for data from resume JSONs.

3. All of your code for adding elements to the resume should be within functions. And all of functions should be encapsulated within the same objects containing your resume data. For instance, functions for appending work experience elements to the page should be found within the same object containing data about work experience.

4. Include an interactive map to show where I lived and worked, and make additional information show up when you click on the pins in the map by using Google Maps API.

5. use `console.log()` to display information about click locations using jQuery onclick handler.

