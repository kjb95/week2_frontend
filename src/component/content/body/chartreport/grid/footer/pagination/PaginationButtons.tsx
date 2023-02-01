import React from 'react';
import PaginationButton from "./PaginationButton";

function PaginationButtons() {
    return (
        <div className="page-nav">
            <PaginationButton className="btn-nav first"/>
            <PaginationButton className="btn-nav prev"/>
            <PaginationButton className="btn-nav next"/>
            <PaginationButton className="btn-nav last"/>
        </div>
    );
}

export default PaginationButtons;