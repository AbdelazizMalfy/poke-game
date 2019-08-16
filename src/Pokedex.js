import React, { Component } from 'react'
import './Pokedex.css'

import PokeCard from './PokeCard'

class Pokedex extends Component {
    // static defaultProps = {
    //     pokemons: [
    //         {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
    //         {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
    //         {id: 11, name: 'Matapod', type: 'bug', base_experience: 72},
    //         {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
    //         {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
    //         {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
    //         {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
    //         {id: 133, name: 'Eevee', type: 'norma', base_experience: 65},
    //     ]
    // }

    render() {
        
        return (
            <div className="Pokedex">
                <h1>Pokedex!</h1>
                <p>Total Experience: {this.props.exp}</p>
                <p></p>
                <div className="Pokedex-cards">
                    {this.props.pokemons.map((pokemon) => (
                        <PokeCard 
                        id={pokemon.id} 
                        name={pokemon.name}
                        type={pokemon.type}
                        exp={pokemon.base_experience}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Pokedex