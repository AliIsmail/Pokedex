import { useRouter } from "next/router";
import axios from "axios";
import { GetServerSidePropsContext } from "next";

interface Pokemon {
  name: string
}

interface PokemonPageProps {
  pokemon: Pokemon
}

const PokemonPage = ({ pokemon }: PokemonPageProps) => {
  // Your component logic and JSX here
  return (
    <div>
      <h1>{pokemon.name}</h1>
      {/* Render your Pokémon data here */}
    </div>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.params as { id: string };
  let pokemon = {};

  try {
    // Assuming the PokéAPI allows fetching Pokémon by name as well as by numeric ID
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    pokemon = response.data;
  } catch (error) {
    // Handle errors (e.g., Pokémon not found)
    console.error(error);
  }

  return {
    props: { pokemon }, // Will be passed to the page component as props
  };
}

export default PokemonPage;
