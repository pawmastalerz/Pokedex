import React, { Component } from "react";
import pokemons from "./pokemons";
import { assessWinner, shuffle4 } from "./helpers";
import Pokedex from "./Pokedex";
import "./Pokegame.css";
import { calculateHandStrength } from "./helpers";

export default class Pokegame extends Component {
  render() {
    const shuffled = shuffle4(pokemons);

    const selectedStrength = calculateHandStrength(shuffled.selected);
    const restStrength = calculateHandStrength(shuffled.rest);
    return (
      <div className="Pokegame">
        <Pokedex
          shuffle={shuffled.selected}
          handStrength={selectedStrength}
          winner={assessWinner(selectedStrength, restStrength)}
        />
        <Pokedex
          shuffle={shuffled.rest}
          handStrength={restStrength}
          winner={assessWinner(restStrength, selectedStrength)}
        />
      </div>
    );
  }
}
