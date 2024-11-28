import "../scss/components/CharacterDetail.scss";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CharacterDetail({ character }) {
    if (character === undefined) {
    return (<p>Cargando...</p>);
}
return (
    <div className="chaDetail">
        <div className="chaDetail__card">
            <img
                className="chaDetail__image" src={character.image} alt={character.name}/>
            <div>
                <h1>{character.name}</h1>
                <p><b>Species:</b> {character.species}</p>
                <p><b>Origin:</b> {character.origin.name}</p>
                <p><b>Number of episodes:</b> {character.episode.length}</p>
                <p><b>Status:</b> {character.status}</p>
            </div>
        </div>
        <Link className="chaDetail__link" to="/">Back</Link>
    </div>
);

}
CharacterDetail.propTypes = {
    character: PropTypes.object,
};

export default CharacterDetail;