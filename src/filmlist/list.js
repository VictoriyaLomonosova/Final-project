import html from "./index.html";
import "./style.css"
import { renderTemplate } from "../template.utils";
import { getHistory } from "../app-history";
import ModalForm from "../add-film/add-film";
import { getFilms, setFilms } from "../localStorage/localStorage";


const history = getHistory();

class FilmList {
  constructor(props) {
    this.id = props.film.id || "";
    this.photo = props.film.photo || "";
    this.name = props.film.name || "";
    this.original = props.film.original || "";
    this.description = props.film.description || "";
    this.rating = props.film.rating || "";
    this.year = props.film.year || "";
    this.country = props.film.country || "";
    this.slogan = props.film.slogan || "";
    this.director = props.film.director || "";
    this.producer = props.film.producer || "";
    this.scenario = props.film.scenario || "";
    this.roles = props.film.roles || "";
    this.operator = props.film.operator || "";
    this.compozer = props.film.compozer || "";
    this.film = renderTemplate(html, props.film);
    this.filmEdit = props.filmEdit;
  }

  showFilm(event) {
    event.preventDefault();
    history.push(event.target.href);
  }

  filmDelete(event) {
    event.preventDefault();
    const confirmfilmDelete = confirm("Вы хотите удалить этот фильм?");

    if (confirmfilmDelete === true) {
      const filmsArray = getFilms();
      const newFilmsArray = filmsArray.filter((film) => film.id !== this.id);

      setFilms(newFilmsArray);
      this.filmEdit();
    }
  }

  filmEdition() {
    const filmEdition = new ModalForm({
      editedInfo: {
        id: this.id,
        name: this.name,
        original: this.original,
        photo: this.photo,
        description: this.description,
        rating: this.rating,
        year: this.year,
        country: this.country,
        slogan: this.slogan,
        director: this.director,
        producer: this.producer,
        scenario: this.scenario,
        roles: this.roles,
        operator: this.operator,
        compozer: this.compozer,
      },
      filmEdit: this.filmEdit,
      modalname: "Редактировать фильм",
    });
    filmEdition.render();
  }

  render() {
    const buttonMore = this.film.querySelector(".more");
    buttonMore.addEventListener("click", this.showFilm.bind(this));
    const buttonEdit = this.film.querySelector(".btn-edit");
    buttonEdit.addEventListener("click", this.filmEdition.bind(this));

    
    const buttonDelete = this.film.querySelector(".btn-delete");
    buttonDelete.addEventListener("click", this.filmDelete.bind(this));

    return this.film
  }
}

export default FilmList;
