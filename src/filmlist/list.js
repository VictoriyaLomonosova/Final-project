import {renderTemplate} from "../template.utils"
import listHtml from "./index.html"
import filmsList from "./film.json"
import { getHistory } from "../app-history";
console.log(listHtml)
const history = getHistory();


class List {
  constructor() {
      this.films = renderTemplate(listHtml, {filmsList});
    console.log(this.films)
  }

  onClick(event) {
      if (event.target.tagName !== "button") return;

      event.preventDefault();
      history.push(event.target.href);
  }

  render() {
    this.films.addEventListener("click", this.onClick.bind(this));

    
const container=document.querySelector("div")
    container.addEventListener("click", (event) => {

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
          console.log("Something went wrong");   }
    })

          return this.films
         
}
} 


export default List;
