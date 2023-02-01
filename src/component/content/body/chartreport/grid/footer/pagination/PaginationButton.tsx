import React from 'react';

interface PaginationButtonProps {
    className: string
}

function PaginationButton({className}: PaginationButtonProps) {
    return (
        <button type="button" className={className} disabled>
            <i className="ico"></i>
        </button>
    );
}

export default PaginationButton;