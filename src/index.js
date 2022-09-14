import header from "./html_files/header.html";
import content from "./html_files/content.html";
import  footer from "./html_files/footer.html";

import {storageAvailable} from "./storageAvailable";
import {task} from "./taskFactory.js";
import { makePanel } from "./panel.js";
import { Project } from "./project.js";
import {form_module} from "./form.js";
window.Project = Project;

import "./css_files/main_style.css";
import "./css_files/basic_button.css";
import "./css_files/cool.css";
import "./css_files/glitch.css";
import "./css_files/form.css";

import "./pictures/frog.png";
import "./pictures/menu.png";




document.body.innerHTML = header;
document.body.innerHTML += content;
document.body.innerHTML += footer;
document.getElementById(`frog`).src = "./assets/images/frog.png";

const link = document.createElement('link');
link.href = './assets/images/frog.png';
link.rel = 'icon';

let projects = [];
localStorage.setItem(`projects`,[1,2]);
document.getElementsByTagName('head')[0].appendChild(link);
makePanel();
form_module();

let x = new Project(1,2,3,4);
// x.show();

if (storageAvailable('localStorage')) {
    // Yippee! We can use localStorage awesomeness
    console.log(`storage available 22`);

  }
  else {
    // Too bad, no localStorage for us
    console.log(`storage unavailable`);
}   