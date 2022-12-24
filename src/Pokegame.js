import React, { Component } from 'react';
import Pokedex from './Pokedex';
import pokemons from './pokemons';

class Pokegame extends Component {
    static defaultProps = {
        pokemons
    }; 

    render() {
        let hand1 = [];
        let hand2 = [ ...this.props.pokemons ];
        while (hand1.length < hand2.length) {
            let randomId = Math.floor(Math.random() * hand2.length);
            let randomPokemon = hand2.splice(randomId, 1)[0];
            hand1.push(randomPokemon);
        }

        let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
        let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
        
        return (
            <div>
                <Pokedex pokemons={hand1} exp={exp1} isWinner={exp1 > exp2} />
                <Pokedex pokemons={hand2} exp={exp2} isWinner={exp2 > exp1} />
            </div>
        )
    }
}

export default Pokegame;