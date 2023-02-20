import React, {useContext} from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from "highcharts-react-official";
import {UserAccessDataContext} from "../../ChartReportContentBody";

let options = {
    chart: {
        height: '25%'
    },
    title: {
        text: null
    },
    xAxis: {
        tickInterval: 1,
        labels: {
            rotation: -45,
            format: '{value:0f}'
        },
    },
    yAxis: [{
        title: {
            text: null
        },
        labels: {
            format: '{value:0f}'
        }
    }, {
        opposite: true,
        title: {
            text: null
        },
        labels: {
            format: '{value:0f}'
        }
    }],
}

const plotOptions = {
    plotOptions: {
        series: {}
    }
}

interface ISeriesOptions {
    series: ChartData[]
}

const seriesOptions: ISeriesOptions = {
    series: []
}

interface ChartData {
    name: string,
    data: [],
}

function HighChart() {
    let {data1, data2, pointStart} = useContext(UserAccessDataContext);
    data1 = {...data1, ...{yAxis: 0}};
    data2 = {...data2, ...{yAxis: 1}};
    seriesOptions.series = [data1, data2];
    plotOptions.plotOptions.series = {...plotOptions.plotOptions.series, ...{pointStart}};
    options = {...options, ...seriesOptions, ...plotOptions};
    return (
        <HighchartsReact highcharts={Highcharts} options={options}/>
    );
}

export default HighChart;