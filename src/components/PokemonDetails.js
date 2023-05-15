import React, { Component } from 'react';
import pokemonList from '../data';

export default class PokemonDetails extends Component {
  render() {
    const { match: { params: { id } } } = this.props;
    const pokemon = pokemonList.find((pokemon) => pokemon.id === Number(id));
    return (
      <h1>{ pokemon.name } details</h1>
    );
  }
}
