import { controls, sounds } from "./elements.js";
import * as actions from "./actions.js"

export function registerControls() {
  controls.addEventListener("click", (event) => {
    const action = event.target.dataset.action
    if (typeof actions[action] != "function") {
      return
    }
    actions[action]()
  })

  const buttons = document.querySelectorAll('#sounds button[data-action]');
  buttons.forEach(button => {
    button.addEventListener('click', (event) => {
      buttons.forEach(button => {
        button.classList.remove("active")
      }) 
      button.classList.add("active")
      const action = event.target.dataset.action;
      actions.toggleMusic(action);
    });
  });
}