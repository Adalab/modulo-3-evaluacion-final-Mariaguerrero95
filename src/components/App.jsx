import  "../scss/App.scss";
import Home from "./Home";
import Header from "./Header";
import CharacterDetail from "./CharacterDetail";
import { useState, useEffect } from "react";
import { Route, Routes, useLocation, matchPath } from "react-router-dom";

const App = () => {
const [characters, setCharacters] = useState([]);
useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
        .then((data) => {
            setCharacters(data.results);
        });
}, []);

const { pathname } = useLocation();
const detRouteData = matchPath("/detail/:id", pathname);
const characterId = detRouteData !== null ? detRouteData.params.id : "";
const selCharacter = characters.find((character) => character.id == characterId);

    return (
    <>
    <Header />
    <main>
        <Routes>
            <Route path="/" element={<Home characters={characters} />} />
            <Route path="/detail/:id" element={<CharacterDetail character={selCharacter} />} />
        </Routes>
    </main>
    </>
);
};

export default App;