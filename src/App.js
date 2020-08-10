import React from "react";
import data from "./data.json";
import Produits from "./components/Produits";
import Filter from "./components/Filter";

class App extends React.Component {
  state = {
    products: data.products,
    type: "",
    etat: "",
    tri: "",
  };

  filterType = (e) => {
    console.log(e.target.value);
    if (e.target.value === "" || e.target.value === "TOUT") {
      this.setState({
        type: e.target.value,
        products: data.products,
      });
    } else {
      this.setState({
        type: e.target.value,
        products: data.products.filter(
          (produit) => produit.type.indexOf(e.target.value) >= 0
        ),
      });
    }
  };

  filterEtat = (e) => {
    console.log(e.target.value);
    if (e.target.value === "" || e.target.value === "TOUT") {
      this.setState({
        etat: e.target.value,
        products: data.products,
      });
    } else {
      this.setState({
        etat: e.target.value,
        products: data.products.filter(
          (produit) => produit.etat.indexOf(e.target.value) >= 0
        ),
      });
    }
  };

  sortPrix = (e) => {
    const tri = e.target.value;
    console.log(e.target.value);
    this.setState((state) => ({
      tri: tri,
      products: this.state.products
        .slice()
        .sort((a, b) =>
          tri === "Moins"
            ? a.prix > b.prix
              ? 1
              : -1
            : tri === "Plus"
            ? a.prix < b.prix
              ? 1
              : -1
            : a._id > b._id
            ? 1
            : -1
        ),
    }));
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
              <Filter
                count={this.state.products.length}
                type={this.state.type}
                etat={this.state.etat}
                tri={this.state.tri}
                filterType={this.filterType}
                filterEtat={this.filterEtat}
                sortPrix={this.sortPrix}
              />
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
