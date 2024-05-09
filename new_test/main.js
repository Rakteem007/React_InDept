// Add JS here
const menu = document.getElementById("menu");
const food_items = document.getElementsByClassName("food-items")[0];
const foodContainer = document.querySelector(".food-container");

const fav_food = [
  "Indo Chinese",
  "Authentic Chinese",
  "Tibetan",
  "South Indian",
  "Bengali",
];

const cuisine_items = {
  "Indo Chinese": [
    "Fired Rice",
    "Chicken Manchurian",
    "Chilli Chicken",
    "Schezwan Chicken",
  ],
  "Authentic Chinese": [
    "Chicken Wanton soup",
    "Pepper chicken",
    "Noodles",
    "Sweet and sour chicken(extra spicy)",
  ],
  Tibetan: ["Momos", "Baw", "Pork Momos"],
  "South Indian": [
    "Dosa",
    "Idly",
    "Vada",
    "Coconut Chutney",
    "Sambar",
    "Uttapam",
  ],
  Bengali: [
    "Polao",
    "Kochi pathar jhol",
    "Chingri macher malai curry",
    "Posto",
    "Vhetki macher pathuri",
    "Dokhar dalna",
  ],
};

fav_food.forEach((food_item) => {
  const item = document.createElement("li");
  item.className = "list-item btn";
  item.textContent = food_item;
  item.addEventListener("click", handleMenu);
  menu.appendChild(item);
});

foodContainer.classList.remove("show");
function handleMenu(e) {
  var flag = true;

  const cuisine = e.target.textContent;
  food_items.innerHTML = "";
  const fav_items = cuisine_items[cuisine];

  fav_items.forEach((item) => {
    const element = document.createElement("li");
    element.style.backgroundColor = !flag ? "#588157" : "#a3b18a";
    element.className = "list-food-item";
    flag = !flag;
    element.textContent = item;
    food_items.appendChild(element);
  });
  foodContainer.classList.toggle("show");
}
