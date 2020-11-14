
import html from "./index.html"


class Footer {
    constructor() {
      this.footer = html;
    }
  
    render() {
      const footer = document.createElement("div");
      footer.innerHTML = this.footer;
  
      return footer.firstChild;
    }
  }
  
  export default Footer;