import React from "react";
import SearchConditions from "./SearchConditions";
import SearchWordConditions from "./conditions/SearchWordConditions";
import SearchTemplateConditions from "./conditions/SearchTemplateConditions";
import SearchPeriodConditions from "./conditions/SearchPeriodConditions";
import SearchButton from "./SearchButton";

function Search() {
    return (
        <div className="row">
            <div className="col col-12">
                <section className="wrap-section wrap-filter">
                    <div className="box-body">
                        <div className="filter-icon-area">
                            <i className="ico ico-filter"></i>
                        </div>
                        <div className="filter-content">
                            <div className="filter-row">
                                <SearchConditions title="템플릿 검색 기준">
                                    <SearchTemplateConditions/>
                                </SearchConditions>
                                <SearchConditions title="검색어 입력">
                                    <SearchWordConditions/>
                                </SearchConditions>
                                <SearchConditions title="기간 조해22">
                                    <SearchPeriodConditions/>
                                </SearchConditions>
                            </div>
                        </div>
                        <SearchButton/>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Search;
