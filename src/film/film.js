import html from "./index.html";
import {renderTemplate} from "../template.utils";
import {SetRefreshFilms} from "../localStorage/localStorage"

class Film {
    constructor(film) {
        this.id = film.id || "";
        this.like = film.like || 0 ;
        this.dislike = film.dislike || 0;
        this.isLike = film.isLike || "";
        this.roles = film.roles || "";
        this.film = renderTemplate(html,film)
    }
    buttonOn(likeButtons) {
        for(let button of likeButtons) {
            button.disabled = false
    }
   }
   buttonOff(likeButtons) {
        for(let button of likeButtons) {
            button.disabled = true 
    }
   }
   plusLike(likeButtons) {
        for(let button of likeButtons) {
            button.addEventListener("click", (event) => {
                if (button.contains(event.target)) {
                    button.dataset.count++
                    
                    const newFilm = {
                        like: this.film.querySelector(".btn-like").dataset.count || "0",
                        dislike: this.film.querySelector(".btn-dislike").dataset.count || "0",
                        isLike: true,
                    };

                    this.buttonOff(likeButtons);

                    SetRefreshFilms({
                        films: newFilm,
                        id: this.id
                    });
                }
            })
        }
    }

    render() {
        const likeButtons = this.film.querySelectorAll(".btn-text");
        this.plusLike(likeButtons);
        if (this.isLike) {
            this.buttonOn(likeButtons)
        }

        return this.film
    }
}

export default Film;
