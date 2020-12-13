import html from "./index.html"
import {renderTemplate} from "../template.utils";
import {getHistory} from "../app-history";
import ModalForm from "../add-film/add-film"
const history=getHistory()
class Header {
    constructor(props) {
      this.header =renderTemplate(html) ;
      this.filmSaved= props.filmSaved;
    }
   showFilms(event) {
      event.preventDefault();
      history.push({ pathname: event.target.href, search: "" });
  }
addFilm =(event)=>{
event.preventDefault()
const newFilm=new ModalForm({
  filmSaved:this.filmSaved,
  modalname:"Добавить фильм"
})
newFilm.render();
}

render() {
 
  const buttonFilms = this.header.querySelector(".all-movies");
  buttonFilms.addEventListener("click", this.showFilms)

  const buttonFilmsAdd = this.header.querySelector(".add-new-film");
  buttonFilmsAdd.addEventListener("click", this.addFilm)
return this.header;
}

}

  
  export default Header