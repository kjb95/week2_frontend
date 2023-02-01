import React, {useState} from 'react';
import {AgGridReact} from "ag-grid-react";

function AgGrid() {

    const [rowData] = useState([
        {basicDate: "2022.07.18", impCnt: 0, clickCnt: 100, convCnt: 465, sellCost: 4590, adspend: 4250},
        {basicDate: "2022.07.19", impCnt: 6700, clickCnt: 380, convCnt: 355, sellCost: 3820, adspend: 4250},
    ]);

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
                rowData={rowData}
                columnDefs={columnDefs}>
            </AgGridReact>
        </div>
    );
}

export default AgGrid;