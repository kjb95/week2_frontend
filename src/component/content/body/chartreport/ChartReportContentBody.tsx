import React, {createContext, useEffect, useMemo, useState} from "react";
import Search from "./search/Search";
import Chart from "./chart/Chart";
import Grid from "./grid/Grid";
import axios from "axios";

interface ChartData {
    name: string,
    data: []
}

interface IUserAccessDataContext {
    isChartOn: boolean
    setIsChartOn: React.Dispatch<React.SetStateAction<boolean>>
    data1: ChartData,
    data2: ChartData,
    pointStart: number,
    userAccessDatas: UserAccessData[]
}

interface UserAccessData {
    basicDate:string;
    impCnt:number;
    clickCnt: number;
    convCnt: number;
    sellCost: number;
    adspend: number;
}

const UserAccessDataContextDefaultValue: IUserAccessDataContext = {
    isChartOn: false,
    setIsChartOn: () => {
    },
    data1: {name: "", data: []},
    data2: {name: "", data: []},
    pointStart: 0,
    userAccessDatas: []
}

export const UserAccessDataContext = createContext(UserAccessDataContextDefaultValue);

export function ChartReportContentBody() {
    const [isChartOn, setIsChartOn] = useState<boolean>(false);
    const [impCnts, setImpCnts] = useState<ChartData>({name: "", data: []});
    const [clickCnts, setClickCnts] = useState<ChartData>({name: "", data: []});
    const [userAccessDatas, setUserAccessDatas] = useState<UserAccessData[]>([]);
    const value = useMemo(() => ({
        isChartOn: isChartOn,
        setIsChartOn: setIsChartOn,
        data1: impCnts,
        data2: clickCnts,
        pointStart: 20230101,
        userAccessDatas: userAccessDatas
    }), [isChartOn, setIsChartOn, impCnts, clickCnts]);

    useEffect(() => {
        axios.get('/api/user-access/all/impCnt/')
            .then(response => {
                setImpCnts(response.data);
            })
        axios.get('/api/user-access/all/clickCnt')
            .then(response => {
                setClickCnts(response.data);
            });
        axios.get('/api/user-access/all')
            .then(response => {
                setUserAccessDatas(response.data);
            });
    }, []);

    return (
        <UserAccessDataContext.Provider value={value}>
            <div className="content-body">
                <div className="container-fluid">
                    <Search/>
                    <Chart/>
                    <Grid/>
                </div>
            </div>
        </UserAccessDataContext.Provider>
    );
}
