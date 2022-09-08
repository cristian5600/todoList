import header from "./html_files/header.html";
import content from "./html_files/content.html";
import  footer from "./html_files/footer.html";
import {storageAvailable} from "./storageAvailable";
import {task} from "./taskFactory.js";
import "./css_files/main_style.css";
import "./css_files/cool.css";
import "./css_files/glitch.css";

import "./pictures/frog.png";
import "./pictures/menu.png";

//import frog from "./assets";

document.body.innerHTML = header;
document.body.innerHTML += content;
document.body.innerHTML += footer;

document.getElementById(`frog`).src = "./assets/images/frog.png";


if (storageAvailable('localStorage')) {
    // Yippee! We can use localStorage awesomeness
    console.log(`st orage available`);

  }
  else {
    // Too bad, no localStorage for us
    console.log(`storage unavailable`);
}   