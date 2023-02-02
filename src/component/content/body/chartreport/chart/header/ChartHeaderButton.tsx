import React from "react";

interface ChartHeaderButtonProps {
    buttonId: string;
    buttonName: string;
}

function ChartHeaderButton({buttonId, buttonName}: ChartHeaderButtonProps) {
    return (
        <div className="ant-select small w-150 ant-select-single ant-select-show-arrow">
            <div className="ant-select-selector">
				<span className="ant-select-selection-search">
					<input type="search" autoComplete="off" className="ant-select-selection-search-input"
                           role="combobox" aria-haspopup="listbox"
                           aria-owns={buttonId + "_list"} aria-autocomplete="list" aria-controls={buttonId + "_list"}
                           aria-activedescendant={buttonId + "_list_0"} readOnly unselectable="on" value=""
                           style={{opacity: 0}} id={buttonId}/>
				</span>
                <span className="ant-select-selection-item" title={buttonName}>
					{buttonName}
				</span>
            </div>
            <span className="ant-select-arrow" unselectable="on" aria-hidden="true" style={{userSelect: "none"}}>
				<span role="img" aria-label="down" className="anticon anticon-down ant-select-suffix">
					<svg viewBox="64 64 896 896" focusable="false" data-icon="down" width="1em" height="1em"
                         fill="currentColor" aria-hidden="true">
						<path
                            d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
					</svg>
				</span>
			</span>
        </div>
    );
}

export default ChartHeaderButton;
