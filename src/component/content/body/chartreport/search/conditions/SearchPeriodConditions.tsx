import React from 'react';
import moment from "moment/moment";
import {DatePicker} from "antd";

const SearchPeriodConditions = () => {
    const {RangePicker} = DatePicker;
    return (
        <div className="comp-datepicker range">
            <button type="button" className="btn outline gray btn-ico">
                <i className="ico ico-prev"></i>
            </button>
            <RangePicker
                defaultValue={[moment(new Date("2023-01-24")), moment(new Date("2023-01-30"))]}/>
            <button type="button" className="btn outline gray btn-ico">
                <i className="ico ico-next"></i>
            </button>
        </div>
    );
};

export default SearchPeriodConditions;