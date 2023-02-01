import React from 'react';

function GridHeader() {
    return (
        <div className="box-header">
            <div className="box-left">
                <h2 className="fz-18 fw-med fc-10">그리드으~헤더어~</h2>
                <span className="fz-14 fw-med fc-5"></span>
            </div>
            <div className="box-right">
                <button type="button" className="btn outline aqua btn-ico --txt-ico small">
                    csv 다운로드<i className="ico ico-download IcoGuide"></i>
                </button>
            </div>
        </div>
    );
}

export default GridHeader;