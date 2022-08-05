import React from "react";
import Guys from "./Guys";


const GuysList = (props) => {

    let componentArray = props.GuysList.map(guysObj => {
        return <Guys
        key={guysObj.id}
        GuysList={guysObj}
        />
    })

    return(
        <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Name</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
            < Select select={props.select} selectFun={props.selectFun}/>
          </th>
          <th>
            <h3 className="ui center aligned header">Twitter</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Insta</h3>
          </th>
        </tr>
        {componentArray}
      </tbody>
    </table>
    );
}






export default GuysList;