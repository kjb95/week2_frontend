import React, {createContext, useMemo, useState} from "react";
import Search from "./search/Search";
import Chart from "./chart/Chart";
import Grid from "./grid/Grid";

interface IIsChartOnContextDefaultValue {
    isChartOn: boolean
    setIsChartOn: React.Dispatch<React.SetStateAction<boolean>>
}

const IsChartOnContextDefaultValue: IIsChartOnContextDefaultValue = {
    isChartOn: false,
    setIsChartOn: () => {
    },
}

export const IsChartOnContext = createContext(IsChartOnContextDefaultValue);

export function ChartReportContentBody() {
    const [isChartOn, setIsChartOn] = useState<boolean>(false);
    const value = useMemo(() => ({isChartOn, setIsChartOn}), [isChartOn, setIsChartOn]);

    return (
        <IsChartOnContext.Provider value={value}>
            <div className="content-body">
                <div className="container-fluid">
                    <Search/>
                    <Chart/>
                    <Grid/>
                </div>
            </div>
        </IsChartOnContext.Provider>
    );
}
