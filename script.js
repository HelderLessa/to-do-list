const userInput = document.querySelector("#user-input");
const submitInput = document.querySelector("#submit-btn");
const container = document.querySelector(".container");

// functions:
function createItem() {
  const inputValue = userInput.value;
  userInput.value = "";

  const itemOuterDiv = document.createElement("div");
  itemOuterDiv.className = "list-item";
  container.appendChild(itemOuterDiv);

  const itemH3 = document.createElement("h3");
  itemH3.innerHTML = inputValue;
  itemOuterDiv.appendChild(itemH3);

  const itemDiv = document.createElement("div");
  itemOuterDiv.appendChild(itemDiv);

  const checkIcon = document.createElement("i");
  checkIcon.className = "fa-solid fa-square-check";
  checkIcon.style.color = "#898b90";
  itemDiv.appendChild(checkIcon);

  const trashIcon = document.createElement("i");
  trashIcon.className = "fa-solid fa-trash";
  trashIcon.style.color = "#898b90";
  itemDiv.appendChild(trashIcon);

  trashIcon.addEventListener("click", (e) => {
    const targetEl = e.target;
    const parentEl = targetEl.closest(".list-item");
    parentEl.remove();
  });

  checkIcon.addEventListener("click", () => {
    checkIcon.style.color = "#38a840";
  });

  userInput.focus();
}

document.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    createItem();
  }
});
