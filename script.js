const form = document.getElementById("resource-form");
const resetButton = document.getElementById("reset-button");

const scrollingWrapper = document.querySelector(".scrolling-wrapper");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const sname = document.getElementById("sname").value;
  const price = document.getElementById("price").value;
  const status = document.getElementById("status").value;
  const imageUrl = document.getElementById("imageurl").value;

  if (sname && price && status) {
    const newCard = document.createElement("div");
    newCard.className = "card";
    newCard.style.backgroundImage = `url(${imageUrl})`;

    const cardContent = `
      <h5>${sname}</h5>
      <span>Price: $${price}</span>
      <span>In Stock: ${status === "instock" ? "Yes" : "No"}</span>
      <button class="remove-button">Remove</button>
    `;
    newCard.innerHTML = cardContent;
    scrollingWrapper.insertBefore(newCard, scrollingWrapper.firstChild);

    form.reset();
  } else {
    alert("Please fill in all fields.");
  }
});

scrollingWrapper.addEventListener("click", function (event) {
  if (event.target.classList.contains("remove-button")) {
    event.target.parentElement.remove();
  }
});

resetButton.addEventListener("click", function () {
  form.reset();
});
