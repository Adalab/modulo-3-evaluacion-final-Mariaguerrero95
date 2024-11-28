import Filter from "./Filter";
import CharacterList from "./CharacterList";
import { useState } from "react";
import PropTypes from "prop-types";

function Home({ characters }) {

    const [filterInput, SetFilterInput] = useState ("");

    const handleFilter = (value) => {
        SetFilterInput(value);
    };

    

  const filterByName = characters
      .filter((character) => {
          return character.name.toLowerCase().includes(filterInput.toLowerCase());
      })
    .sort((a, b) => {
            if (a.name > b.name) {return 1;
            }
            if (a.name < b.name) {return -1;
            }return 0;
          });
    
    return (
        <>
            <Filter onChangeFilter={handleFilter}/>
            <CharacterList characters={filterByName}/>
        </>
    );
}

Home.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Home;