import "./style.css";
import List from "./filmlist/list";
import { getHistory } from "./app-history";
import Film from "./film/film";
import "jquery";
import Container from "./container/container";
import { getFilms } from "./localStorage/localStorage";
import Header from "./header/header";
import MainContainer from "./main-container/main-container";
import HeaderText from "./header-text/header-text";
import Footer from "./footer/footer";
import Error from "./error/filmError";
import "bootstrap";
import "popper.js";
getFilms();
const container = new Container();

document.body.appendChild(container.render());

const containerBody = document.querySelector("div.container");
const header = new Header({ filmSaved: updateFilms });
containerBody.appendChild(header.render());

const mainCont = new MainContainer();
containerBody.appendChild(mainCont.render());

const main = document.querySelector("main");
const filmError = new Error();

const history = getHistory();

function renderRoute(path) {
  const films = getFilms();
  let filmFound = false;
  if (path === "/list") {
    main.innerHTML = "";
    const filmsList = films.map(
      (film) =>
        new List({
          film: film,
          filmEdit: updateFilms,
        })
    );
    filmsList.forEach((film) => main.appendChild(film.render()));
  } else if (path === "/search-") {
    main.innerHTML = "";
    const inputFind = document.querySelector("input[name=query]");
    films.forEach((film) => {
      if (film.name.toLowerCase().indexOf(inputFind.value.toLowerCase()) + 1) {
        const chosenFilm = new List({
          film: film,
          filmEdit: updateFilms,
        });
        main.appendChild(chosenFilm.render());
        filmFound = true;
      }
    });
    if (!filmFound) {
      main.innerHTML = "";
      const notFoundFilms = document.createElement("div");
      notFoundFilms.innerText = "Этот фильм не найден";
      notFoundFilms.classList.add("not-found-films");
      main.appendChild(notFoundFilms);
    }
  } else if (path.startsWith("/list-")) {
    const id = path.substr("/list-".length);
    const chosenFilm = films.find((film) => film.id === id);

    if (chosenFilm) {
      main.innerHTML = "";
      const film = new Film(chosenFilm);
      main.appendChild(film.render());
    }
  } else {
    const er = new Error();
    main.appendChild(er.render());
  }
}

history.listen((listener) => {
  console.log("LISTEN", listener);
  renderRoute(listener.location.pathname);
});

if (history.location.pathname === "/") {
  const headerText = new HeaderText();
  main.appendChild(headerText.render());
} else {
  renderRoute(history.location.pathname);
}

const footer = new Footer();
containerBody.appendChild(footer.render());
function updateFilms() {
  main.innerHTML = "";
  const films = getFilms();
  const filmsList = films.map(
    (film) =>
      new List({
        film: film,
        filmEdit: updateFilms,
      })
  );
  filmsList.forEach((film) => main.appendChild(film.render()));
}
