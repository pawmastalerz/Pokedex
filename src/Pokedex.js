import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

export default class Pokedex extends Component {
  render() {
    const shuffle = this.props.shuffle;
    const handStrength = this.props.handStrength;
    const winner = this.props.winner;
    return (
      <div className="Pokedex">
        <div className="Pokedex-info">
          <h4 className={`Pokedex-info-title ${winner.className}`}>
            {winner.message}
          </h4>
          <p className="Pokedex-info-total">Total experience: {handStrength}</p>
        </div>
        <div className="Pokedex-cards">
          {shuffle.map((card) => (
            <Pokecard key={card.id} pokemonData={card} />
          ))}
        </div>
      </div>
    );
  }
}
