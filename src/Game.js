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
            xIsNext: true,
            stepNumber: 0
        }
    }

    handleClick (squerNumber) {
        console.log("hize click" + squerNumber)
        const history = this.state.history.slice(0, this.state.stepNumber + 1)
        const current = history[history.length - 1]
        const copySqueres = current.squeres.slice()
        if (calculateWiner(copySqueres) || copySqueres[squerNumber]) {
            return
        }
        copySqueres[squerNumber] = this.state.xIsNext ? 'X' : 'O'
        this.setState({
            history: [...history, {squeres: [...copySqueres]}],
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length
        })
    }

    jump(moveIdx) {
        this.setState({
            stepNumber: moveIdx,
            xIsNext: (moveIdx % 2) === 0
        })
    }

    render() {
        const { history } = this.state
        const current = history[this.state.stepNumber]
        const winner = calculateWiner(current.squeres)

        const moves = history.map((step, moveIdx) => {
            const desc = moveIdx ? `Ir al movimiento ${moveIdx}` : `Ir al inicio`
            return (
                <li key={moveIdx}>
                    <button onClick={() => this.jump(moveIdx)}>{desc}</button>
                </li>
            )
        })

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
                    <ol>{moves}</ol>
                </div>
            </div>
        )
    }
}

export default Game