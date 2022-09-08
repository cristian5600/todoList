import html from "./file.html";
import {storageAvailable} from "./storageAvailable";
import {task} from "./taskFactory.js";
document.body.innerHTML = html;
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