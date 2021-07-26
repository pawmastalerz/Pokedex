import React, { Component } from "react";
import "./Pokecard.css";
import { getPokemonImageUrl } from "./helpers";

export default class Pokecard extends Component {
  render() {
    const { id, name, type, base_experience } = this.props.pokemonData;
    return (
      <div className="Pokecard">
        <div className="Pokecard-tile">
          <img
            src={getPokemonImageUrl(id)}
            className="Pokecard-image"
            alt={name}
          />
          <div className="Pokecard-name">{name}</div>
          <div className="Pokecard-type">Type: {type}</div>
          <div className="Pokecard-exp">EXP: {base_experience}</div>
        </div>
      </div>
    );
  }
}
