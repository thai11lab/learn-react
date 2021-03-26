import PropTypes from "prop-types";

function ColorBox(props) {
    const {color,name} = props;
    return (
        <div className="colorBox" style={{backgroundColor:color}}>{name}</div>
    );
}

ColorBox.propTypes={
    color : PropTypes.string.isRequired,
    name  : PropTypes.string.isRequired
}
export default ColorBox;