export default function GameBoard({ onSelectSquare, board }) {
    return (
        <div id="game-board">
            {board.map((row, rowIndex) => 
                row.map((playerSymbol, colIndex) => (
                    <button 
                        key={`${rowIndex}-${colIndex}`} 
                        onClick={() => onSelectSquare(rowIndex, colIndex)} 
                        disabled={playerSymbol !== null}
                    >
                        {playerSymbol}
                    </button>
                ))
            )}
        </div>
    );
 }
 