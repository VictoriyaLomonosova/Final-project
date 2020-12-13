import filmsArray from "../film.json"

function getItems() {
    try {
        return JSON.parse(localStorage.getItem('films'));
    } catch (e) {
        return [];
    }
}

function getFilms() {
    let films = [];

    if (getItems() !== null) {
        films = getItems()
    } else {
        films = JSON.stringify(filmsArray);
        localStorage.setItem('films', films);
    }

    return films;
}

function setFilms(array) {
    const filmsJson = JSON.stringify(array);
    localStorage.setItem('films', filmsJson);
}
 function SetRefreshFilms(props) {
    const filmsArray = getFilms();
    const filmEdit = filmsArray.find(film => film.id === props.id);

    if (filmEdit) {
        Object.assign(filmEdit, props.film)
    } else {
        filmsArray.push(props.film);
    }

    setFilms(filmsArray);
}


export { getFilms, setFilms,SetRefreshFilms};