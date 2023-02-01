import React from 'react';
import PaginationSelector from "./pagination/PaginationSelector";
import PaginationButtons from "./pagination/PaginationButtons";

function GridRightFooter() {
    return (
        <div className="box-right">
            <div className="pagenation">
                <PaginationSelector/>
                <PaginationButtons/>
            </div>
        </div>
    );
}

export default GridRightFooter;