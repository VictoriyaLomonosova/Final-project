import "./style.css";
import List from "./filmlist/list";
import { getHistory } from "./app-history";

import Container from "./container/container";

import Header from "./header/header";
import MainContainer from "./main-container/main-container";
import HeaderText from "./header-text/header-text"
import Footer from "./footer/footer"
const container = new Container();

document.body.appendChild(container.render());

const containerBody = document.querySelector("div.container");
const header = new Header();
containerBody.appendChild(header.render())

const mainCont = new MainContainer();
containerBody.appendChild(mainCont.render());



const main = document.querySelector("main");

const history = getHistory();

function renderRoute(path) {
    
  switch (path) {
    case "/list":
        const list = new List();
      main.appendChild(list.render());
      break;
    /* case "/":
            p.innerText = "PRODUCTS";
            break;*/
    default:
      console.log("404");
      break;
  }
}

history.listen((listener) => {
  console.log("LISTEN", listener);
  renderRoute(listener.location.pathname);
});

if (history.location.pathname === "/") {
 const headerText=new HeaderText()
 main.appendChild(headerText.render())
} else {
  renderRoute(history.location.pathname);
}
const footer=new Footer()
containerBody.appendChild(footer.render())