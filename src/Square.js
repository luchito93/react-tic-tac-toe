// import { Component } from "react";

// class Square extends Component {

//     render() {
//         const { value, onClickAccion } = this.props
//         return <button
//             className="square"
//             onClick={() => onClickAccion()}>
//                 {value}
//         </button>
//     }
// }

function Square (props) {
    const { value, onClickAccion } = props
    return (
        <button className="square" onClick={onClickAccion}>
            { value }
        </button>
    )
}

export default Square