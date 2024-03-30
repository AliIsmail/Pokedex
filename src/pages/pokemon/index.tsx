import axios from "axios";
import Link from "next/link";

interface Pokemon {
  name: string;
  url: string;
}

interface HomeProps {
  pokemons: Pokemon[];
}


export default function Home({ pokemons }: HomeProps) {
  return (
    <div>
      <h1>Pokédex</h1>
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>
            <Link href={`/pokemon/${index + 1}`}>
              {pokemon.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");
  const pokemons = res.data.results;
  return {
    props: {
      pokemons,
    },
  };
}
