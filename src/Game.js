import Board from "./Board";
import { calculateWiner } from './Utilities'
import { Component } from "react";

class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            history: [
                {
                    squeres: Array(9).fill(null)
                }
            ],
            xIsNext: true
        }
    }

    handleClick (squerNumber) {
        console.log("hize click" + squerNumber)
        const { history } = this.state
        const current = history[history.length - 1]
        const copySqueres = current.squeres.slice()
        if (calculateWiner(copySqueres) || copySqueres[squerNumber]) {
            return
        }
        copySqueres[squerNumber] = this.state.xIsNext ? 'X' : 'O'
        this.setState({
            history: [...history, {squeres: [...copySqueres]}],
            xIsNext: !this.state.xIsNext
        })
    }

    render() {
        const { history } = this.state
        const current = history[history.length - 1]
        console.log(current)
        const winner = calculateWiner(current.squeres)
        let status
        if (winner) {
            status = `the winner is ${winner} !!`
        } else {
            status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`
        }
        return(
            <div className="game">
                <div className="game-board">
                    <Board squeres={current.squeres} handleClick={(i) => this.handleClick(i)}/>
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol></ol>
                </div>
            </div>
        )
    }
}

export default Game