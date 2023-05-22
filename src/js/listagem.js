const pokedex = document.getElementById("pokedex");

// Função para fazer uma requisição para a PokeAPI
async function fetchPokemonData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Erro ao buscar dados do Pokémon:", error);
  }
}

// Função para fazer uma requisição para a PokeAPI usando a URL de uma espécie de Pokémon
async function fetchPokemonSpeciesData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Erro ao buscar dados da espécie do Pokémon:", error);
  }
}

// Função para criar elementos <li> para cada Pokémon
async function criarElementosPokemon() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const data = await response.json();
    const pokemonList = data.results;

    for (const pokemon of pokemonList) {
      const pokemonData = await fetchPokemonData(pokemon.url);
      const pokemonSpeciesData = await fetchPokemonSpeciesData(pokemonData.species.url);

      const li = document.createElement("li");
      li.className = "cartao-pokemon";

      const divInformacoes = document.createElement("div");
      divInformacoes.className = "informacoes";

      const spanName = document.createElement("span");
      spanName.textContent = pokemonData.name;

      const spanNumber = document.createElement("span");
      spanNumber.textContent = `#${pokemonData.id}`;

      divInformacoes.appendChild(spanName);
      divInformacoes.appendChild(spanNumber);

      const img = document.createElement("img");
      img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemonData.id}.gif`;
      img.alt = pokemonData.name;
      img.className = "gif";

      const ulTipos = document.createElement("ul");
      ulTipos.className = "tipos";

      pokemonData.types.forEach(type => {
        const liType = document.createElement("li");
        liType.className = "tipo " + type.type.name;
        liType.textContent = type.type.name;
        ulTipos.appendChild(liType);
      });

      const pDescricao = document.createElement("p");
      pDescricao.className = "descricao";
      
      const englishDescriptions = pokemonSpeciesData.flavor_text_entries.filter(entry => entry.language.name === "en");
      const descriptionText = englishDescriptions[0].flavor_text;
      pDescricao.textContent = descriptionText;
      

      li.appendChild(divInformacoes);
      li.appendChild(img);
      li.appendChild(ulTipos);
      li.appendChild(pDescricao);

      pokedex.appendChild(li);
    }
  } catch (error) {
    console.log("Erro ao buscar a lista de Pokémon:", error);
  }
}

// Chama a função para criar os elementos dos Pokémon
criarElementosPokemon();