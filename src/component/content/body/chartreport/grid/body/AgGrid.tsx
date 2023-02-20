import React, {useContext, useState} from 'react';
import {AgGridReact} from "ag-grid-react";
import {UserAccessDataContext} from "../../ChartReportContentBody";

function AgGrid() {

    const {userAccessDatas} = useContext(UserAccessDataContext);

    const [columnDefs] = useState([
        {field: 'basicDate', headerName: "날짜"},
        {field: 'impCnt', headerName: "노출 수"},
        {field: 'clickCnt', headerName: "클릭 수"},
        {field: 'convCnt', headerName: "전환 수"},
        {field: 'sellCost', headerName: "총 판매금액"},
        {field: 'adspend', headerName: "할인 광고비"},
    ])

    return (
        <div className="ag-theme-alpine" style={{height: "1200px", width: "1200px"}}>
            <AgGridReact
                rowData={userAccessDatas}
                columnDefs={columnDefs}>
            </AgGridReact>
        </div>
    );
}

export default AgGrid;