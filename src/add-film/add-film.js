import { v4 as uuidv4 } from 'uuid';

import html from "./index.html";
import {renderTemplate} from "../template.utils";
import { getHistory } from "../app-history";
import {SetRefreshFilms} from "../localStorage/localStorage";

const history = getHistory();

class Modal {
    constructor(props) {
        this.modal = renderTemplate(html);
        this.edit = props.filmSaved || props.filmEdit;
        this.film = props.editedInfo || "";
        this.modalname = props.modalname;
    }

    hide(event) {
        if (!this.modal.querySelector('.modal-dialog').contains(event.target)
            || this.modal.querySelector(".close").contains(event.target)
            || event.target.hasAttribute('data-dismiss')
        ) {
            this.modal.remove();
        }
    }

   SaveChanges(event) {
        event.preventDefault();

        const newFilm = {
            id: uuidv4(),
            name: this.modal.querySelector("#name").value || "-",
            original: this.modal.querySelector("#original").value || "-",
            photo: this.modal.querySelector("#photo").value ,
            year: this.modal.querySelector("#year").value || "-",
            country: this.modal.querySelector("#country").value || "-",
            slogan: this.modal.querySelector("#slogan").value || "-",
            director: this.modal.querySelector("#director").value || "-",
            producer: this.modal.querySelector("#producer").value || "-",
            scenario: this.modal.querySelector("#scenario").value || "-",
            roles: this.modal.querySelector("#roles").value.split(",") || "-",
            operator: this.modal.querySelector("#operator").value || "-",
            compozer: this.modal.querySelector("#compozer").value || "-",
            rating: this.modal.querySelector("#rating").value || "-",
           description: this.modal.querySelector("#description").value || "",
            like: 0,
            dislike: 0,
            islike: false
        };

        SetRefreshFilms({
            film: newFilm,
            id: this.film.id
        });

        this.hide(event);
        this.edit();
        history.push("/list");
    }

    SaveValue() {
        this.modal.querySelector(".modal-title").innerHTML = this.modalname;
        this.modal.querySelector("#name").value = this.film.name || "";
        this.modal.querySelector("#original").value = this.film.original || "";
        this.modal.querySelector("#photo").value = this.film.photo || "";
        this.modal.querySelector("#year").value = this.film.year || "";
        this.modal.querySelector("#country").value = this.film.country || "";
        this.modal.querySelector("#slogan").value = this.film.slogan || "";
        this.modal.querySelector("#director").value = this.film.director || "";
        this.modal.querySelector("#producer").value = this.film.producer || "";
        this.modal.querySelector("#scenario").value = this.film.scenario || "";
        this.modal.querySelector("#roles").value = this.film.roles || "";
        this.modal.querySelector("#operator").value = this.film.operator || "";
        this.modal.querySelector("#compozer").value = this.film.compozer || "";
        this.modal.querySelector("#rating").value = this.film.rating || "";
        this.modal.querySelector("#description").value = this.film.description || "";
    }

    render() {
        document.body.appendChild(this.modal);
        this.SaveValue();

        this.modal.addEventListener('click',  event => this.hide(event))

        const saveButton = this.modal.querySelector("#save");
       saveButton.addEventListener("click", this.SaveChanges.bind(this))
    }
}

export default Modal;
