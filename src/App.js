import React from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import pokemonList from './data';
import Pokedex from './components/Pokedex';
import About from './components/About';
import PokemonDetails from './components/PokemonDetails';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={ (props) => <Pokedex { ...props } pokemonList={ pokemonList } /> }
        />
        <Route path="/about" component={ About } />
        <Route path="/pokemon/:id" component={ PokemonDetails } />
      </Switch>
    </div>
  );
}

export default App;
