/* eslint-disable react/prop-types */
import Square from "./Square";

export default function Board({ xIsNext, squares, onPlay }) {
  function handleclick(i) {
    if (squares[i] || calculateWinner(squares)) return;

    const nextSquares = squares.slice();

    nextSquares[i] = xIsNext ? "X" : "O";

    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status = "";
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <>
      <h1>Tic-Tac-Toe Game</h1>
      <div className="status">
        <p>{status}</p>
      </div>
      <div className="board">
        <Square value={squares[0]} onSquareClick={() => handleclick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleclick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleclick(2)} />
        <Square value={squares[3]} onSquareClick={() => handleclick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleclick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleclick(5)} />
        <Square value={squares[6]} onSquareClick={() => handleclick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleclick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleclick(8)} />
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left column
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // diagonal
    [2, 4, 6], // diagonal
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return false;
}
