import React from "react";

const Guy = (props) => {
let {name, Insta, Twitter, amount} = props.guy


return(
    <tr>
        <td>{name}</td>
        <td>{Insta}</td>
        <td>{Twitter}</td>
        <td>{amount}</td>
    </tr>
)
}









export default Guy;