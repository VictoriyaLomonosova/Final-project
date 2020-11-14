import html from "./index.html"


class HeaderText {
    constructor() {
      this.headerText = html;
    }
  
    render() {
      const container = document.createElement("div");
      container.innerHTML = this.headerText;
  
      return container;
    }
  }
  
  export default HeaderText;