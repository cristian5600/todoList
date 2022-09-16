// import panel from "./html_files/panel.html"
export const makePanel = () => {
  const BTN = document.getElementsByClassName(`cybr-btn`);
  BTN[0].addEventListener(`click`, activate);
};
const activate = () => {
  if (document.querySelector(`div.panel`).getAttribute(`id`) === ``)
    document.querySelector(`div.panel`).setAttribute(`id`, `hidden`);
  else document.querySelector(`div.panel`).setAttribute(`id`, ``);
};
