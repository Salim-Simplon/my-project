import React, { Component } from "react";
import formatPrix from "./Prix";

export default class Panier extends Component {
  render() {
    const { panier } = this.props;
    return (
      <div>
        {panier.length === 0 ? (
          <div className="panier panier-header"> Le panier est vide </div>
        ) : (
          <div className="panier panier-header">
            {" "}
            Vous avez {panier.length} produits dans le panier{" "}
          </div>
        )}
        <div>
          <div className="panier">
            <ul className="panier-carte">
              {panier.map((produit) => (
                <li key={produit._id}>
                  <div>
                    <img src={produit.photo} alt={produit.titre}></img>
                  </div>
                  <div>
                    <div>{produit.titre}</div>
                    <div className="right">
                      {formatPrix(produit.prix)}{" "}
                      <button
                        className="button"
                        onClick={() => this.props.supprimerProduit(produit)}
                      >
                        Enlever
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {panier.length !== 0 && (
            <div className="panier">
              <div className="total">
                <div>
                  Total : {formatPrix(panier.reduce((a, b) => a + b.prix, 0))}
                </div>
                <button className="button primary">Passer la commande</button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
