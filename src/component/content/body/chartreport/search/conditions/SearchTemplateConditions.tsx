import React from 'react';
import {Select} from "antd";

const SearchTemplateConditions = () => {
    return (
        <Select
            defaultValue="상품번호"
            style={{width: 300}}
            options={[
                {value: "광고주", label: "광고주"},
                {value: "상품번호", label: "상품번호"},
                {value: "광고그룹명", label: "광고그룹명"},
                {value: "키워드명", label: "키워드명"},
            ]}
        />
    );
};

export default SearchTemplateConditions;