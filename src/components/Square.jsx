/* eslint-disable react/prop-types */
const Square = ({ value, onSquareClick }) => {
    return (
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    )
}

export default Square