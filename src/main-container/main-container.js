import html from "./index.html";
import "./style.css"
class MainContainer {
  constructor() {
    this.MainContainer = html;
  }

  render() {
    const container = document.createElement("div");
    container.innerHTML = this.MainContainer;
    return container;
  }
}

export default MainContainer;