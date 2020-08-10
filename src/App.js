import React from "react";
import data from "./data.json";
import Produits from "./components/Produits";

class App extends React.Component {
  state = {
    products: data.products,
    type: "",
    etat: "",
  };
  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">Gorbej</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Produits products={this.state.products} />
            </div>
            <div className="sidebar">Panier</div>
          </div>
        </main>
        <footer>By Amri Salim</footer>
      </div>
    );
  }
}

export default App;
