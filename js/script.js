import { tabs } from "./modules/tabs.js";
import { timer } from "./modules/timer.js";
import { modal } from "./modules/modal.js";
import { form } from "./modules/form.js";
("use strict");
window.addEventListener("DOMContentLoaded", () => {
  tabs();
  timer();
  modal();
  form();
});
