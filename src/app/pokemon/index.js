import axios from "axios";
import Link from "next/link";

export default function Home({ pokemons }) {
  return (
    <div>
      <h1>Pokédex</h1>
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>
            <Link href={`/pokemon/${index + 1}`}>
              <a>{pokemon.name}</a>
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
