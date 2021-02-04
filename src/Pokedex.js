import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            selectedPokemon: 0,
            selectedType: null
        }
        this.listPokemons();
    }
    next(selectedPokemon) {
        const { pokemons } = this.props;
        if(selectedPokemon < pokemons.length -1) { 
            this.setState((prevState) => ({selectedPokemon: prevState.selectedPokemon + 1})
            )
        } else {
            this.setState((prevState) => ({selectedPokemon: 0}))
        };
    }

    listTypes() {
        const { pokemons } = this.props;
        return pokemons.map((pokemons) => pokemons.type)
        .filter((type, index, self) => {
            return self.indexOf(type) === index
        });
       
    }

    setFilter(type) {
        this.setState({
            selectedPokemon: 0,
            selectedType: type,
        })
    }

    listPokemons() {
        const { selectedType } = this.state;
        const { pokemons } = this.props;
        const filtered = pokemons.filter(pokemon => {
            return selectedType
            ? selectedType === pokemon.type
            : true
        })
        return filtered;
    }

    render() {
        const { selectedPokemon } = this.state;
        const types = this.listTypes();
        const list = this.listPokemons();
        return (
            <div className="pokedex">
               <Pokemon pokemon={ list[selectedPokemon] } />
               <button
               type="button" 
               onClick={() => this.next(selectedPokemon)}>
                   Próximo Pokemon
                </button>
                {types.map((type, index) => 
                <button
                    key={index}
                    onClick={() => this.setFilter(type)}>
                        {type}
                </button>)}
            </div>
        );
    }
}

export default Pokedex;
