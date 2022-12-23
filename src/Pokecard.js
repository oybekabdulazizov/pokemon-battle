import React, { Component } from 'react';
import './Pokecard.css';

const POKE_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

class Pokecard extends Component {
    render() {
        let imgSrc = `${POKE_API}/${this.props.id}.png`
        return (
            <div className="Pokecard">
                <img src={imgSrc} alt={this.props.name}/>
                <h1>{this.props.name}</h1>
                <div>Type: {this.props.type}</div>
                <div>Exp: {this.props.exp}</div>
            </div>
        )
    }
}

export default Pokecard;