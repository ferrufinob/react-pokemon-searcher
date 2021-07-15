import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    search: "",
  };

  componentDidMount() {
    fetch(API)
      .then((res) => res.json())
      .then((data) => this.setState({ pokemons: data }));
  }

  handleOnChange = (event) => {
    this.setState({ search: event.target.value });
  };

  addPokemon = (newPokemon) => {
    this.setState({ pokemons: [...this.state.pokemons, newPokemon] });
  };
  render() {
    const filteredPokemons = this.state.pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(this.state.search.toLowerCase())
    );
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search handleOnChange={this.handleOnChange} />
        <br />
        <PokemonCollection pokemons={filteredPokemons} />
      </Container>
    );
  }
}

const API = "http://localhost:3000/pokemon";
export default PokemonPage;
