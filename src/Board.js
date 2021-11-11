import { Component } from "react";
import Square from "./Square";

class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            squeres: Array(9).fill(null)
        }
    }

    handleClick (squerNumber) {
        console.log("hize click" + squerNumber)
        const copySqueres = this.state.squeres.slice()
        copySqueres[squerNumber] = 'X'
        this.setState({squeres: copySqueres})
    }


    renderSquare(i) {
        return (<Square
            key={i}
            value={this.state.squeres[i]}
            onClickAccion={() => this.handleClick(i) }/>)
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