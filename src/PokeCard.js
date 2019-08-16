import React, { Component } from 'react';
import './PokeCard.css'


const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = (num) => (num <= 999 ? `00${num}`.slice(-3) : num)

class PokeCard extends Component {
    render() {
        let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
        return (
            <div className="PokeCard">
                <h1 className="PokeCard-title" >{this.props.name}</h1>
                <div className="PokeCard-img">
                    <img src={imgSrc} alt={this.props.name}/>
                </div>
                <div className="PokeCard-data" >
                    type: {this.props.type}
                </div>
                <div className="PokeCard-data">
                    EXP: {this.props.exp}
                </div>
                
            </div>
        )
    }
}

export default PokeCard;