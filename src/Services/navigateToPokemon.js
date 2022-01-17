
const navigateToPokemon = (element) => {
  let typeArray = [];
  let abilitiesArray = [];
  let statsArray = [];

  const defineAbilities = () => {
    element.abilities.map((getAbilities) => {
      return abilitiesArray.push(getAbilities.ability.name);
    });
  };

  const defineType = () => {
    element.types.map((getType) => {
      return typeArray.push(getType.type.name);
    });
  };

  const defineStats = () => {
    element.stats.map((getStats) => {
      return statsArray.push(getStats.base_stat);
    });
  };

  const defineState = () => {
    const navState = {
         img: null,
         name: null,
         height: null,
         weight: null,
         types: [],
         abilities: [],
         stats: []
    };
    defineAbilities();
    defineType();
    defineStats();

    navState.img = element.sprites.front_default
    navState.name = element.name
    navState.height = element.height
    navState.weight = element.weight
    navState.types = typeArray
    navState.abilities = abilitiesArray
    navState.stats = statsArray

    console.log(navState)
    
    return navState
  };

return defineState()

};
export default navigateToPokemon;
