import React from "react";
import GridLeftFooter from "./GridLeftFooter";
import GridRightFooter from "./GridRightFooter";

function GridFooter() {
    return (
        <div className="box-footer">
            <GridLeftFooter/>
            <GridRightFooter/>
        </div>
    );
}

export default GridFooter;
