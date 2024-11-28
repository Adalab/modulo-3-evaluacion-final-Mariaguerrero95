import "../scss/components/Filter.scss";
import PropTypes from "prop-types";
import ResetButton from "./ResetButton";

function Filter({onChangeFilter}) {
    const handleChangeInputSearch = (ev) => {
        onChangeFilter(ev.target.value);
    };
    const handleReset = () => {
        onChangeFilter(""); 
    };
    return(
        <form className="filter-form">
            <label htmlFor="filter"></label>
            <input className="input1" type="text" id="filter" onChange={handleChangeInputSearch}></input>
            <ResetButton onReset={handleReset} />

        </form>
        
        
    )
}

Filter.propTypes = {
    onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;