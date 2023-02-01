import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from "highcharts-react-official";

const options = {
    chart: {
        height: '23%'
    },
    title: {
        text: null
    },
    series: [{
        name: '노출수',
        data: [43934, 48656, 65165, 81827, 112143, 142383,
            171533, 165174, 155157, 161454, 43934, 48656, 65165, 81827, 112143, 142383,
            171533, 165174, 155157, 161454, 43934, 48656, 65165, 81827, 112143, 142383,
            171533, 165174, 155157, 161454],
    }, {
        name: '클릭수',
        data: [2491, 3794, 2974, 2985, 3249, 3028, 3812, 3688, 3372, 3424,
            2491, 3794, 2974, 2985, 3249, 3028, 3812, 3688, 3372, 3424,
            2491, 3794, 2974, 2985, 3249, 3028, 3812, 3688, 3372, 3424
        ],
        yAxis: 1,
    }],
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
    }, { // right y axis
        opposite: true,
        title: {
            text: null
        },
        labels: {
            format: '{value:0f}'
        }
    }],
    plotOptions: {
        series: {
            pointStart: 20230101,
        }
    },
}

function HighChart() {
    return (
            <HighchartsReact highcharts={Highcharts} options={options}/>
    );
}

export default HighChart;