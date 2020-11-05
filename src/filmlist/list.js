import template from "lodash.template";
import html from "./index.html";
const filmsList = require("./film.json");

const templateRenderer = template(html);

class List {
  constructor() {
    this.films = [];

    for (let i = 0; i < filmsList.length; i++) {
      const film = filmsList[i];
      this.films.push(film);
    }
  }

  render() {
    const temp = templateRenderer({
      films: this.films,
    });

    const container = document.createElement("div");
    container.className = "cardElem";
    container.innerHTML = temp;
    document.addEventListener("click", (event) => {
      switch (event.target.dataset.id) {
        case "edit":
          console.log("Edit");
          break;
        case "delete":
          console.log("Delete");
          break;
        case "more":
          console.log("Read more");
          break;
        default:
          console.log("Something went wrong");
      }
    });

    document.body.appendChild(container);
  }
}

export default List;
