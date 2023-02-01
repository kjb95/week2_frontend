import React from 'react';

interface SearchConditionsTitleProps {
    title:string
}
function SearchConditionsTitle({title}: SearchConditionsTitleProps) {
    return (
        <div className="filter-label">
            <p className="fz-16 fw-med fc-7">{title}</p>
        </div>
    );
}

export default SearchConditionsTitle;