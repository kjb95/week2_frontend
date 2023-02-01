import React from "react";
import SearchConditions from "./SearchConditions";
import SearchWordConditions from "./conditions/SearchWordConditions";
import SearchTemplateConditions from "./conditions/SearchTemplateConditions";
import SearchPeriodConditions from "./conditions/SearchPeriodConditions";

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
						<div className="filter-inquire">
							<button type="button" className="btn btn-ico outline blue --ico-txt ">
								<i className="ico ico-filter"></i>선택 조건 조회
							</button>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}

export default Search;
