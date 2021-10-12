import React from "react";

function Block(props) {

    let style = {
        display:"inline-block",
        float:"left",
        height: "50px",
        width: "50px",
        borderStyle: "solid",
        borderWeight: "1px",
        backgroundColor: props.data.backColor
    }
    return(
        <div className={"Block"} style={style}>

        </div>
    )
}

export default Block;