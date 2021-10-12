import React from "react";

function Block(props) {

    let style = {
        height: "100px",
        width: "100px",
        borderStyle: "solid",
        borderWeight: "2px",
        backgroundColor: props.data.backColor
    }
    return(
        <div className={"Block"} style={style}>

        </div>
    )
}

export default Block;