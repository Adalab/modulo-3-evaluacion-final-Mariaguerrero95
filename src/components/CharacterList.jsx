import "../scss/components/CharacterList.scss";
import CharacterCard from "./CharacterCard";
import PropTypes from "prop-types";


function CharacterList({ characters }) {
  const charactersCards = characters.map((character) => {
    return <CharacterCard key={character.name} character={character} />;
  });
  return <div className="list">{charactersCards}</div>;
}

CharacterList.propTypes = {
  characters: PropTypes.array,
};

export default CharacterList;