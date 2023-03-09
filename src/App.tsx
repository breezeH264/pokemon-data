import React, { useState } from 'react';
import Search from './components/Search/Search';
import PokemonBox from './components/PokemonBox/PokemonBox';
import PokemonInfo from './components/PokemonInfo/PokemonInfo';
import { fetchPokemon } from './utils/fetchPokemon';
import styles from '../styles/index.module.scss';
import loader from '../public/assets/icons/gridload.svg';

export default function Home() {
  const [pokemon, setPokemon] = useState();
  const [loaded, setLoaded] = useState(false);

  const [notFound, setNotFound] = useState(false);
  const [empty, setEmpty] = useState('tree');

  const getPokemon = async (query: string) => {
    if (!query) {
      setEmpty('Uh oh! You must input a Pokémon!');
      setNotFound(true);
      return;
    }

    setNotFound(false);
    setLoaded(true);
    setTimeout(async () => {
      try {
        const response = await fetchPokemon(query);
        const result = await response.json();
        setPokemon(result);
        setLoaded(false);
      } catch (err) {
        setLoaded(false);
        setNotFound(true);
        setEmpty(`"${query.toUpperCase()}" does not exist. Please, try again!`);
      }
    });
  };

  const unknownType = [
    {
      type: { name: '???' },
    },
  ];

  return (
    <>
      <head>
        <title>Home | Poké Finder</title>
        <meta
          name='description'
          content='A free tool for searching Pokémon information.'
        />
        <link rel='icon' href='/favicon.ico' />
      </head>
      <main>
        <section className={styles.container}>
          <div className={styles['left']}>
            <Search getPokemon={getPokemon} />
            {notFound ? (
              <strong className={styles.errors}>{empty}</strong>
            ) : null}
          </div>
          <div className={styles['right']}>
            {loaded ? (
              <div className={styles.loader}>
                <img src={loader} alt='' />
              </div>
            ) : null}
            {!loaded && pokemon && !notFound ? (
              <PokemonBox
                name={pokemon['name']}
                id={pokemon['id']}
                types={pokemon['types']}
                weightKg={pokemon['weight'] / 10}
                weightLbs={(pokemon['weight'] / 10) * 2.2046}
                heightM={pokemon['height'] / 10}
                heightFt={(pokemon['height'] / 10) * 3.28084}
                artwork={
                  pokemon['sprites']['other']['official-artwork'][
                    'front_default'
                  ]
                }
              />
            ) : null}

            {notFound ? (
              <PokemonBox
                name={'Unknown'}
                id={404}
                types={unknownType}
                weightKg={0}
                weightLbs={0}
                heightM={0}
                heightFt={0}
                artwork={
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png'
                }
              />
            ) : null}
          </div>
        </section>

        {!loaded && pokemon && !notFound ? (
          <section className={styles.abilities}>
            <PokemonInfo
              name={pokemon['name']}
              abilities={pokemon['abilities']}
              stats={pokemon['stats']}
              items={pokemon['held_items']}
              artwork={pokemon['sprites']['other']['home']['front_default']}
              types={pokemon['types']}
            />
          </section>
        ) : null}
      </main>
    </>
  );
}
