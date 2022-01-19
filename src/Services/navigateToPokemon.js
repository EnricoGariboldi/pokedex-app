



const navigateToPokemon = (element) => {
  let typeArray = [];
  let abilitiesArray = [];
  let statsArray = [];



  const fetchDetails = async () => {

  const fetchDetails = await fetch(`${element.url}`)
   const resp = fetchDetails && await fetchDetails.json();

   defineAbilities(resp);
   defineType(resp);
   defineStats(resp);

   return resp
}

  const defineAbilities = (resp) => {
    resp.abilities.map((getAbilities) => {
      return abilitiesArray.push(getAbilities.ability.name);
    });
  };

  const defineType = (resp) => {
    resp.types.map((getType) => {
      return typeArray.push(getType.type.name);
    });
  };

  
  const defineStats = (resp) => {
    resp.stats.map((getStats) => {
      return statsArray.push(getStats.base_stat);
    });
  };

  

  const defineState = async () => {
    let resp = {}

    const navState = {
         img: null,
         name: null,
         height: null,
         weight: null,
         types: [],
         abilities: [],
         stats: []
    };
   resp = await fetchDetails();
  

    navState.img = resp.sprites.front_default
    navState.name = resp.name
    navState.height = resp.height
    navState.weight = resp.weight
    navState.types = typeArray
    navState.abilities = abilitiesArray
    navState.stats = statsArray
    
    return navState

    
  };


return defineState()

};
export default navigateToPokemon;
