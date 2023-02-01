import React from 'react';

const SearchWordConditions = () => {
    return (
        <div className="input-group ">
            <input type="text" name="searchText" className="tf-comm" placeholder="검색어 입려억~~"/>
            <p className="txt-validation">체크 / 에러 문구 내용 영역</p>
        </div>
    );
};

export default SearchWordConditions;