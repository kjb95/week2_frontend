import React, {PropsWithChildren} from 'react';
import SearchConditionsTitle from "./SearchConditionsTitle";

interface SearchConditionsProps {
    title: string
}

const SearchConditions = ({title, children}: PropsWithChildren<SearchConditionsProps>) => {
    return (
        <div className="filter-group">
            <SearchConditionsTitle title={title}/>
            <div className="filter-box">
                <div className="filter-col">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default SearchConditions;