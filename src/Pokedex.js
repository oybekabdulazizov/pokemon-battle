import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';
import pokemons from './pokemons';

class Pokedex extends Component {
    static defaultProps = {
        pokemons
    }; 

    render() {
        return (
            <div className="Pokedex">
                <h1>Pokedex!</h1>  
                <p>Total experience: {this.props.exp}</p>
                <p>{this.props.isWinner ? 'WINNER!' : 'LOSER!'}</p>
                <div className="Pokedex-cards">
                    {this.props.pokemons.map((p) => (
                        <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                    ))} 
                </div>             
            </div>
        )
    }
}

export default Pokedex;