import html from "./index.html";

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