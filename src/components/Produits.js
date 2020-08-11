import React, { Component } from "react";
import formatPrix from "./Prix";

export default class Produits extends Component {
  render() {
    return (
      <div>
        <ul className="products">
          {this.props.products.map((product) => (
            <li key={product._id}>
              <div className="product">
                <img src={product.photo} alt={product.titre}></img>
                <a href={"#" + product._id}>
                  {" "}
                  <p className="title">{product.titre}</p>
                </a>
                <p className="prix-produit">
                  <div>{formatPrix(product.prix)}</div>
                  <button
                    onClick={() => this.props.addPanier(product)}
                    className="button primary"
                  >
                    Ajouter au panier
                  </button>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
