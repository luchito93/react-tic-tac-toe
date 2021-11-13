import { Component } from "react";
import Square from "./Square";
import calculateWiner from "./Utilities"

class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            squeres: Array(9).fill(null),
            xIsNext: true
        }
    }

    handleClick (squerNumber) {
        console.log("hize click" + squerNumber)
        const copySqueres = this.state.squeres.slice()
        if (calculateWiner(copySqueres) || copySqueres[squerNumber]) {
            return
        }
        copySqueres[squerNumber] = this.state.xIsNext ? 'X' : 'O'
        this.setState({squeres: copySqueres, xIsNext: !this.state.xIsNext})
    }


    renderSquare(i) {
        return (<Square
            key={i}
            value={this.state.squeres[i]}
            onClickAccion={() => this.handleClick(i) }/>)
    }


    render() {
        const winner = calculateWiner(this.state.squeres)
        let status
        if (winner) {
            status = `the winner is ${winner} !!`
        } else {
            status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`
        }
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