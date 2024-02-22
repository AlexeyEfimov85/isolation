const reasonButton = document.querySelector("#reasons-label");
const propertyButton = document.querySelector("#property-label");
const reason = document.querySelector(".content__reasons");
const property = document.querySelector(".content__property");
const reasonInput = document.querySelector('#reasons')
const toogleContent = (e) => {
  if (!reasonInput.checked) {
    propertyButton.classList.add('radiobutton__label_checked')
    reasonButton.classList.remove('radiobutton__label_checked')
    reason.classList.add("content__hidden");
    property.classList.remove("content__hidden");
  } else {
    propertyButton.classList.remove('radiobutton__label_checked')
    reasonButton.classList.add('radiobutton__label_checked')
    reason.classList.remove("content__hidden");
    property.classList.add("content__hidden");
  }
};

reasonButton.addEventListener("click", () => {
    toogleContent();
    
});
propertyButton.addEventListener("click", () => {
    toogleContent();
});

const reasonButtontwo = document.querySelector("#reasons-labeltwo");
const propertyButtontwo = document.querySelector("#property-labeltwo");
const reasontwo = document.querySelector(".content__reasonstwo");
const propertytwo = document.querySelector(".content__propertytwo");
const reasonInputtwo = document.querySelector('#reasonstwo')
const toogleContenttwo = () => {
  if (!reasonInputtwo.checked) {
    propertyButtontwo.classList.add('radiobutton__label_checked')
    reasonButtontwo.classList.remove('radiobutton__label_checked')
    reasontwo.classList.add("content__hidden");
    propertytwo.classList.remove("content__hidden");
  } else {
    propertyButtontwo.classList.remove('radiobutton__label_checked')
    reasonButtontwo.classList.add('radiobutton__label_checked')
    reasontwo.classList.remove("content__hidden");
    propertytwo.classList.add("content__hidden");
  }
};

reasonButtontwo.addEventListener("click", () => {
    toogleContenttwo();
    
});
propertyButtontwo.addEventListener("click", () => {
    toogleContenttwo();
});

