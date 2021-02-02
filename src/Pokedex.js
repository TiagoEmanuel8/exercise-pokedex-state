import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedPokemon: 0
        }
    }

    next(selectedPokemon) {
        const { pokemons } = this.props;
        if(selectedPokemon < pokemons.length - 1 ) {
        this.setState((prevState) => ({ selectedPokemon: prevState.selectedPokemon + 1 }))
        } else {
        this.setState((prevState) => ({ selectedPokemon: 0 }))
        }
    }
 
    render() {
        const { pokemons } = this.props;
        const { selectedPokemon } = this.state;
        return (
            <div className="pokedex">
               <Pokemon pokemon={ pokemons[selectedPokemon] } />
               <button
               type="button"
               onClick={ () => this.next(selectedPokemon)}>
                   Próximo Pokemon
                </button>
            </div>
        );
    }
}

export default Pokedex;


   // constructor(props) {
        // super(props);
        // this.state = {
        //     selectedPokemon: 0
        // }
    // }
    // next(selectedPokemon) {
    //     // const { selectedPokemon } = this.state;
    //     const { pokemons } = this.props;
    //     if (selectedPokemon < pokemons.length - 1) {
    //     this.setState((prevState) => ({ selectedPokemon: prevState.selectedPokemon + 1 }))
    //     } else {
    //     this.setState((prevState) => ({ selectedPokemon: 0 }))
    //     }
    // }
// const { selectedPokemon } = this.state;
    {/* <button type="button" onClick={() => this.next(selectedPokemon)}>Próximo Pokemon</button> */}