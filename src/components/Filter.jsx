import "../scss/components/Filter.scss";
import PropTypes from "prop-types";


function Filter({onChangeFilter}) {
    const handleChangeInputSearch = (ev) => {
        onChangeFilter(ev.target.value);
    };
    return(
        <form>
            <label htmlFor="filter"></label>
            <input className="input1" type="text" id="filter" onChange={handleChangeInputSearch}></input>
        </form>
    )
}

Filter.propTypes = {
    onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;