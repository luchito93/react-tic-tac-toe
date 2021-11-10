import { Component } from "react";
import Square from "./Square";

class Board extends Component {
    renderSquare(i) {
        return <Square key={i} value={i}/>
    }
    render() {
        const status = "Next player: X"
        const squareItems = (arrIds) => arrIds.map(id => {
            return this.renderSquare(id)
        })
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {squareItems([0,1,2])}
                </div>
                <div className="board-row">
                    {squareItems([3,4,5])}
                </div>
                <div className="board-row">
                    {squareItems([6,7,8])}
                </div>
            </div>
        )
    }
}

export default Board