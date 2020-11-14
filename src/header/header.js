// Идем фильтром по массиву фильмов (Поиск)



import html from "./index.html"


class Header {
    constructor() {
      this.header = html;
    }
  
    render() {
      const container = document.createElement("div");
      container.innerHTML = this.header;
  
      return container;
    }
  }
  
  export default Header;