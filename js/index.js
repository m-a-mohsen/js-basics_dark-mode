console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
// --------------- Selectors-----------------------
const darkSwitch = document.querySelector('[data-js="dark-mode-button"]');
const lightSwitch = document.querySelector('[data-js="light-mode-button"]');
const toggleSwitch = document.querySelector('[data-js="toggle-button"]');

// --------------- Event Listeners -----------------------
darkSwitch.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});
lightSwitch.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
});
toggleSwitch.addEventListener("click", () => {
    bodyElement.classList.toggle("dark");
  });
