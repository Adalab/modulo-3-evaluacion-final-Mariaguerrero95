import PropTypes from "prop-types";
import "../scss/components/ResetButton.scss"; 
import "../scss/components/filter.scss";

function ResetButton({ onReset }) {
    return (
        <button type="button" className="resetButton" onClick={onReset}>Reset</button>
    );
}

ResetButton.propTypes = {
    onReset: PropTypes.func.isRequired, 
};

export default ResetButton;