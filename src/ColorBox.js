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

//Mặc định nếu không có props có tên name thì sẽ gán giá trị mặc định là Đàm Anh Thái
ColorBox.defaultProps={
    name:"Đàm Anh Thái"
}
export default ColorBox;