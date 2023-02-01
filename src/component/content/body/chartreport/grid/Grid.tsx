import React from 'react';
import GridHeader from "./header/GridHeader";
import GridBody from "./body/GridBody";
import GridFooter from "./footer/GridFooter";

function Grid() {
    return (
        <div className="row">
            <div className="col col-12">
                <section className="wrap-section wrap-datagrid">
                    <GridHeader/>
                    <GridBody/>
                    <GridFooter/>
                </section>
            </div>
        </div>
    );
}

export default Grid;