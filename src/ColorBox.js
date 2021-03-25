function ColorBox(props) {
    const {color,name} = props;
    return (
        <div className="colorBox" style={{backgroundColor:color}}>{name}</div>
    );
}

export default ColorBox;