import header from "./html_files/header.html";
import content from "./html_files/content.html";
import footer from "./html_files/footer.html";
import {storageAvailable} from "./storageAvailable";
import {task} from "./taskFactory.js";
import css from "./css_files/main_style.css";
document.body.innerHTML = header;
document.body.innerHTML += content;
document.body.innerHTML += footer;
if (storageAvailable('localStorage')) {
    // Yippee! We can use localStorage awesomeness
    console.log(`storage available`);

  }
  else {
    // Too bad, no localStorage for us
    console.log(`storage unavailable`);
}

const task1 = task();
task1.constructor();
task1.constructor2();
console.log(this);