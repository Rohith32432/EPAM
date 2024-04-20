import React, { useEffect, useState } from 'react';

function Sample() {
  const [pokemon, setPokemon] = useState({});
  const [status, setStatus] = useState(false);
  const [load, setload] = useState(false);
  // const audio = new Audio('');

  const getpokemon = async () => {
    try {
      setload(true);
      const req = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 200)}/`);
      const res = await req.json();
      const imgUrl = res.sprites.other.dream_world.front_default;

      setPokemon({
        img: imgUrl,
        species: res.species.name,
      });
      setload(false);
      setStatus(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getpokemon();
  }, []);

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus(false); 
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  const mystyle = {
    filter: !status ? "brightness(100%)" : "brightness(0.03)"
  };

  const handleNextClick = () => {
    getpokemon();
    // audio.pause(); // Pause audio when fetching new Pokemon
  };

  const handleInputChange = (e) => {
    if (e.target.value === pokemon.species) {
      setStatus(false);
    
    } else {
      setStatus(true);
    }
  };

  return (
    <>
      <div className="App">
        <h1>Poki-dex</h1>
        {!load ?
          pokemon.img && <img src={pokemon.img} style={mystyle} alt="" /> : <h2>loading.........</h2>
        }
        <h2>{pokemon.species} </h2>
        <input
          type="text"
          onChange={handleInputChange}
          name=""
          id=""
        />
        <button onClick={handleNextClick}>Next</button>
      </div>
    </>
  );
}

export default Sample;
