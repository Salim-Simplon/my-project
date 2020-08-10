import React, { Component } from "react";
import formatPrix from "./Prix"

export default class Produits extends Component {
  render() {
    return (
      <div>
        <ul className="products">
          {this.props.products.map((product) => (
            <li key={product._id}>
              <div className="product">
                <a href={"#" + product._id}>
                  <img src={product.photo} alt={product.titre}></img>
                  <p>{product.titre}</p>
                </a>
                <div className="prix-produit">
                  <div>{formatPrix(product.prix)}</div>
                  <button className="button primary">Ajouter au panier</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
