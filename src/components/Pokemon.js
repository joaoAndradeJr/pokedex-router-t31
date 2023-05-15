import React from 'react';
import PropTypes from 'prop-types';
import { pokemonType } from '../types';
import '../styles/pokemon.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class Pokemon extends React.Component {
  render() {
    const { pokemon, showDetailsLink } = this.props;
    const { name, type, averageWeight, image } = pokemon;
    return (
      <div className="pokemon">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
        </div>
        <img src={ image } alt={ `${name} sprite` } />
        {
          showDetailsLink &&
            <Link to={ `/pokemon/${pokemon.id}` }>Details</Link>
        }
      </div>
    );
  }
}

Pokemon.defaultProps = {
  showDetailsLink: true,
};

Pokemon.propTypes = {
  pokemon: pokemonType.isRequired,
  showDetailsLink: PropTypes.bool,
};

export default Pokemon;
