import React, { Component } from 'react';
import pokemonList from '../data';
import Pokemon from './Pokemon';

export default class PokemonDetails extends Component {
  render() {
    const { match: { params: { id } } } = this.props;
    const pokemon = pokemonList.find((pokemon) => pokemon.id === Number(id));
    console.log(pokemon)
    return (
      <section>
        <h1>{ pokemon.name } details</h1>
        <Pokemon pokemon={ pokemon } showDetailsLink={ false } />
        <p>{ pokemon.summary }</p>
        { pokemon.foundAt.map((location) => (
          <div key={ location.location }>
            <p>{ location.location }</p>
            <img src={ location.map } alt={ location.location } />
          </div>
        )) }
      </section>
    );
  }
}
