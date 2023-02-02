import React, {useContext} from 'react';
import {IsChartOnContext} from "../ChartReportContentBody";

function SearchButton() {
    const context = useContext(IsChartOnContext);
    const handleSearchButton = () => {
        context.setIsChartOn(true);
    }
    return (
        <div className="filter-inquire">
            <button type="button" className="btn btn-ico outline blue --ico-txt " onClick={() => handleSearchButton()}>
                <i className="ico ico-filter"></i>선택 조건 조회
            </button>
        </div>
    );
}

export default SearchButton;