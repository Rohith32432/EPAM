import React, { useEffect, useState } from 'react';

function Sample() {
  const [pokemon, setPokemon] = useState({});
  const [status, setStatus] = useState(false);

  const getpokemon = async () => {
    try {
      const req = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 100)}/`);
     
      const res = await req.json();
      const imgUrl = res.sprites.other.dream_world.front_default;
     
      setPokemon({
        img: imgUrl,
        species: res.species.name,
      });
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
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  const mystyle = {
    filter: !status ? "brightness(100%)" : "brightness(0.05)"
  };

  const handleNextClick = () => {
    getpokemon();
  };

  return (
    <>
      <div className="App">
        <h1>Poki-dex</h1>
        {pokemon.img && <img src={pokemon.img} style={mystyle} alt="" />}
        <h2>{pokemon.species}</h2>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </>
  );
}

export default Sample;
