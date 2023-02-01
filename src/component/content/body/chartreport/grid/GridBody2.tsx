import React from 'react';

function GridBody2() {
    return (
        <div className="box-body">
            <div className="ag-grid-empty">
                <div style={{height: "100%"}}>
                    <div className="ag-root-wrapper ag-ltr ag-keyboard-focus ag-layout-auto-height" role="presentation">
                        <div className="ag-root-wrapper-body ag-focus-managed ag-layout-auto-height" role="presentation">
                            <div className="ag-tab-guard ag-tab-guard-top" role="presentation" tabIndex={0}></div>
                            <div className="ag-root ag-unselectable ag-layout-auto-height" role="grid" aria-colcount={9} aria-rowcount={1}>


                                <div
                                    className="ag-header ag-pivot-off"
                                    role="presentation"
                                    style={{
                                        height: "26px",
                                        minHeight: "26px",
                                    }}
                                >
                                    <div
                                        className="ag-pinned-left-header ag-hidden"
                                        role="presentation"
                                        style={{
                                            width: "0px",
                                            minWidth: "0px",
                                            maxWidth: "0px",
                                        }}
                                    >
                                        <div
                                            className="ag-header-row ag-header-row-column"
                                            role="row"
                                            aria-rowindex={1}
                                            style={{
                                                height: "25px",
                                                top: "0px",
                                                width: "0px",
                                            }}
                                        ></div>
                                    </div>
                                    <div className="ag-header-viewport " role="presentation">
                                        {/*		<div*/}
                                        {/*			className="ag-header-container"*/}
                                        {/*			role="rowgroup"*/}
                                        {/*			style={{*/}
                                        {/*				width: "1199px",*/}
                                        {/*				transform: "translateX(0px)",*/}
                                        {/*			}}*/}
                                        {/*		>*/}
                                        {/*			<div*/}
                                        {/*				className="ag-header-row ag-header-row-column"*/}
                                {/*				role="row"*/}
                                {/*				aria-rowindex={1}*/}
                                {/*				style={{*/}
                                {/*					height: "25px",*/}
                                {/*					top: "0px",*/}
                                {/*					width: "1199px",*/}
                                {/*				}}*/}
                                {/*			>*/}
                                {/*				<div*/}
                                {/*					className="ag-header-cell asdfasdf ag-focus-managed"*/}
                                {/*					role="columnheader"*/}
                                {/*					tabIndex={-1}*/}
                                {/*					aria-colindex={1}*/}
                                {/*					col-id="basicDate"*/}
                                {/*					aria-description="Press Space to toggle all rows selection (unchecked)"*/}
                                {/*					style={{*/}
                                {/*						left: "0px",*/}
                                {/*						width: "135px",*/}
                                {/*					}}*/}
                                {/*				>*/}
                                {/*					<div className="ag-header-cell-resize ag-hidden" role="presentation"></div>*/}
                                {/*					<div role="presentation" className="ag-labeled ag-label-align-right ag-checkbox ag-input-field ag-header-select-all">*/}
                                {/*						<div ref="eLabel" className="ag-input-field-label ag-label ag-hidden ag-checkbox-label" role="presentation"></div>*/}
                                {/*						<div ref="eWrapper" className="ag-wrapper ag-input-wrapper ag-checkbox-input-wrapper" role="presentation">*/}
                                {/*							<input ref="eInput" className="ag-input-field-input ag-checkbox-input" type="checkbox" id="ag-3-input" tabIndex={-1} />*/}
                                {/*						</div>*/}
                                {/*					</div>*/}
                                {/*					<div className="ag-header-cell-comp-wrapper" role="presentation">*/}
                                {/*						<div className="ag-cell-label-container" role="presentation">*/}
                                {/*							<div ref="eLabel" className="ag-header-cell-label" role="presentation">*/}
                                {/*								<span ref="eText" className="ag-header-cell-text">*/}
                                {/*									날짜*/}
                                {/*								</span>*/}
                                {/*								<span ref="eFilter" className="ag-header-icon ag-header-label-icon ag-filter-icon ag-hidden" aria-hidden="true">*/}
                                {/*									<span className="ag-icon ag-icon-filter" unselectable="on" role="presentation"></span>*/}
                                {/*								</span>{" "}*/}
                                {/*								<span className="ag-sort-indicator-container" ref="eSortIndicator">*/}
                                {/*									<span ref="eSortOrder" className="ag-sort-indicator-icon ag-sort-order ag-hidden" aria-hidden="true"></span>*/}
                                {/*									<span ref="eSortAsc" className="ag-sort-indicator-icon ag-sort-ascending-icon ag-hidden" aria-hidden="true"></span>*/}
                                {/*									<span ref="eSortDesc" className="ag-sort-indicator-icon ag-sort-descending-icon ag-hidden" aria-hidden="true"></span>*/}
                                {/*									<span ref="eSortMixed" className="ag-sort-indicator-icon ag-sort-mixed-icon ag-hidden" aria-hidden="true">*/}
                                {/*										<span className="ag-icon ag-icon-none" unselectable="on" role="presentation"></span>*/}
                                {/*									</span>*/}
                                {/*									<span ref="eSortNone" className="ag-sort-indicator-icon ag-sort-none-icon ag-hidden" aria-hidden="true"></span>*/}
                                {/*								</span>*/}
                                {/*							</div>*/}
                                {/*						</div>*/}
                                {/*					</div>*/}
                                {/*				</div>*/}
                                {/*				<div*/}
                                {/*					className="ag-header-cell ag-focus-managed"*/}
                                {/*					role="columnheader"*/}
                                {/*					tabIndex={-1}*/}
                                {/*					aria-colindex={2}*/}
                                {/*					style={{*/}
                                {/*						left: "135px",*/}
                                {/*						width: "133px",*/}
                                {/*					}}*/}
                                {/*					col-id="impCnt"*/}
                                {/*				>*/}
                                {/*					<div className="ag-header-cell-resize ag-hidden" role="presentation"></div>*/}
                                {/*					<div role="presentation" className="ag-labeled ag-label-align-right ag-checkbox ag-input-field ag-header-select-all ag-hidden">*/}
                                {/*						<div ref="eLabel" className="ag-input-field-label ag-label ag-hidden ag-checkbox-label" role="presentation"></div>*/}
                                {/*						<div ref="eWrapper" className="ag-wrapper ag-input-wrapper ag-checkbox-input-wrapper" role="presentation">*/}
                                {/*							<input ref="eInput" className="ag-input-field-input ag-checkbox-input" type="checkbox" id="ag-4-input" tabIndex={-1} />*/}
                                {/*						</div>*/}
                                {/*					</div>*/}
                                {/*					<div className="ag-header-cell-comp-wrapper" role="presentation">*/}
                                {/*						<div className="ag-cell-label-container" role="presentation">*/}
                                {/*							<div ref="eLabel" className="ag-header-cell-label" role="presentation">*/}
                                {/*								<span ref="eSortOrder" className="ag-header-icon ag-sort-order"></span>*/}
                                {/*								<span ref="eSortAsc" className="ag-header-icon ag-sort-ascending-icon"></span>*/}
                                {/*								<span ref="eSortDesc" className="ag-header-icon ag-sort-descending-icon"></span>*/}
                                {/*								<span ref="eSortNone" className="ag-header-icon ag-sort-none-icon"></span>*/}
                                {/*								<span ref="eText" className="ag-header-cell-text" role="columnheader">*/}
                                {/*									노출 수*/}
                                {/*								</span>*/}
                                {/*								<a className="ico-tooltip"></a>*/}
                                {/*								<span ref="eFilter" className="ag-header-icon ag-filter-icon ag-hidden">*/}
                                {/*									<span className="ag-icon ag-icon-filter" unselectable="on" role="presentation"></span>*/}
                                {/*								</span>*/}
                                {/*							</div>*/}
                                {/*						</div>*/}
                                {/*					</div>*/}
                                {/*				</div>*/}
                                {/*				<div*/}
                                {/*					className="ag-header-cell ag-focus-managed"*/}
                                {/*					role="columnheader"*/}
                                {/*					tabIndex={-1}*/}
                                {/*					aria-colindex={3}*/}
                                {/*					style={{*/}
                                {/*						left: "268px",*/}
                                {/*						width: "133px",*/}
                                {/*					}}*/}
                                {/*					col-id="clickCnt"*/}
                                {/*				>*/}
                                {/*					<div className="ag-header-cell-resize ag-hidden" role="presentation"></div>*/}
                                {/*					<div role="presentation" className="ag-labeled ag-label-align-right ag-checkbox ag-input-field ag-header-select-all ag-hidden">*/}
                                {/*						<div ref="eLabel" className="ag-input-field-label ag-label ag-hidden ag-checkbox-label" role="presentation"></div>*/}
                                {/*						<div ref="eWrapper" className="ag-wrapper ag-input-wrapper ag-checkbox-input-wrapper" role="presentation">*/}
                                {/*							<input ref="eInput" className="ag-input-field-input ag-checkbox-input" type="checkbox" id="ag-5-input" tabIndex={-1} />*/}
                                {/*						</div>*/}
                                {/*					</div>*/}
                                {/*					<div className="ag-header-cell-comp-wrapper" role="presentation">*/}
                                {/*						<div className="ag-cell-label-container" role="presentation">*/}
                                {/*							<div ref="eLabel" className="ag-header-cell-label" role="presentation">*/}
                                {/*								<span ref="eText" className="ag-header-cell-text">*/}
                                {/*									클릭 수*/}
                                {/*								</span>*/}
                                {/*								<span ref="eFilter" className="ag-header-icon ag-header-label-icon ag-filter-icon ag-hidden" aria-hidden="true">*/}
                                {/*									<span className="ag-icon ag-icon-filter" unselectable="on" role="presentation"></span>*/}
                                {/*								</span>{" "}*/}
                                {/*								<span className="ag-sort-indicator-container" ref="eSortIndicator">*/}
                                {/*									<span ref="eSortOrder" className="ag-sort-indicator-icon ag-sort-order ag-hidden" aria-hidden="true"></span>*/}
                                {/*									<span ref="eSortAsc" className="ag-sort-indicator-icon ag-sort-ascending-icon ag-hidden" aria-hidden="true"></span>*/}
                                {/*									<span ref="eSortDesc" className="ag-sort-indicator-icon ag-sort-descending-icon ag-hidden" aria-hidden="true"></span>*/}
                                {/*									<span ref="eSortMixed" className="ag-sort-indicator-icon ag-sort-mixed-icon ag-hidden" aria-hidden="true">*/}
                                {/*										<span className="ag-icon ag-icon-none" unselectable="on" role="presentation"></span>*/}
                                {/*									</span>*/}
                                {/*									<span ref="eSortNone" className="ag-sort-indicator-icon ag-sort-none-icon ag-hidden" aria-hidden="true"></span>*/}
                                {/*								</span>*/}
                                {/*							</div>*/}
                                {/*						</div>*/}
                                {/*					</div>*/}
                                {/*				</div>*/}
                                {/*				<div*/}
                                {/*					className="ag-header-cell ag-header-cell-sortable ag-focus-managed"*/}
                                {/*					role="columnheader"*/}
                                {/*					tabIndex={-1}*/}
                                {/*					aria-colindex={4}*/}
                                {/*					style={{*/}
                                {/*						left: "401px",*/}
                                {/*						width: "133px",*/}
                                {/*					}}*/}
                                {/*					col-id="convCnt"*/}
                                {/*					aria-sort="none"*/}
                                {/*					aria-description="Press ENTER to sort."*/}
                                {/*				>*/}
                                {/*					<div className="ag-header-cell-resize ag-hidden" role="presentation"></div>*/}
                                {/*					<div role="presentation" className="ag-labeled ag-label-align-right ag-checkbox ag-input-field ag-header-select-all ag-hidden">*/}
                                {/*						<div ref="eLabel" className="ag-input-field-label ag-label ag-hidden ag-checkbox-label" role="presentation"></div>*/}
                                {/*						<div ref="eWrapper" className="ag-wrapper ag-input-wrapper ag-checkbox-input-wrapper" role="presentation">*/}
                                {/*							<input ref="eInput" className="ag-input-field-input ag-checkbox-input" type="checkbox" id="ag-6-input" tabIndex={-1} />*/}
                                {/*						</div>*/}
                                {/*					</div>*/}
                                {/*					<div className="ag-header-cell-comp-wrapper" role="presentation">*/}
                                {/*						<div className="ag-cell-label-container" role="presentation">*/}
                                {/*							<div ref="eLabel" className="ag-header-cell-label" role="presentation">*/}
                                {/*								<span ref="eText" className="ag-header-cell-text">*/}
                                {/*									전환 수*/}
                                {/*								</span>*/}
                                {/*								<span ref="eFilter" className="ag-header-icon ag-header-label-icon ag-filter-icon ag-hidden" aria-hidden="true">*/}
                                {/*									<span className="ag-icon ag-icon-filter" unselectable="on" role="presentation"></span>*/}
                                {/*								</span>{" "}*/}
                                {/*								<span className="ag-sort-indicator-container" ref="eSortIndicator">*/}
                                {/*									<span ref="eSortOrder" className="ag-sort-indicator-icon ag-sort-order ag-hidden" aria-hidden="true"></span>*/}
                                {/*									<span ref="eSortAsc" className="ag-sort-indicator-icon ag-sort-ascending-icon ag-hidden" aria-hidden="true">*/}
                                {/*										<span className="ag-icon ag-icon-asc" unselectable="on" role="presentation"></span>*/}
                                {/*									</span>*/}
                                {/*									<span ref="eSortDesc" className="ag-sort-indicator-icon ag-sort-descending-icon ag-hidden" aria-hidden="true">*/}
                                {/*										<span className="ag-icon ag-icon-desc" unselectable="on" role="presentation"></span>*/}
                                {/*									</span>*/}
                                {/*									<span ref="eSortMixed" className="ag-sort-indicator-icon ag-sort-mixed-icon ag-hidden" aria-hidden="true">*/}
                                {/*										<span className="ag-icon ag-icon-none" unselectable="on" role="presentation"></span>*/}
                                {/*									</span>*/}
                                {/*									<span ref="eSortNone" className="ag-sort-indicator-icon ag-sort-none-icon" aria-hidden="true">*/}
                                {/*										<span className="ag-icon ag-icon-none" unselectable="on" role="presentation"></span>*/}
                                {/*									</span>*/}
                                {/*								</span>*/}
                                {/*							</div>*/}
                                {/*						</div>*/}
                                {/*					</div>*/}
                                {/*				</div>*/}
                                {/*				<div*/}
                                {/*					className="ag-header-cell ag-focus-managed"*/}
                                {/*					role="columnheader"*/}
                                {/*					tabIndex={-1}*/}
                                {/*					aria-colindex={5}*/}
                                {/*					style={{*/}
                                {/*						left: "534px",*/}
                                {/*						width: "133px",*/}
                                {/*					}}*/}
                                {/*					col-id="directSellCost"*/}
                                {/*				>*/}
                                {/*					<div className="ag-header-cell-resize ag-hidden" role="presentation"></div>*/}
                                {/*					<div role="presentation" className="ag-labeled ag-label-align-right ag-checkbox ag-input-field ag-header-select-all ag-hidden">*/}
                                {/*						<div ref="eLabel" className="ag-input-field-label ag-label ag-hidden ag-checkbox-label" role="presentation"></div>*/}
                                {/*						<div ref="eWrapper" className="ag-wrapper ag-input-wrapper ag-checkbox-input-wrapper" role="presentation">*/}
                                {/*							<input ref="eInput" className="ag-input-field-input ag-checkbox-input" type="checkbox" id="ag-7-input" tabIndex={-1} />*/}
                                {/*						</div>*/}
                                {/*					</div>*/}
                                {/*					<div className="ag-header-cell-comp-wrapper" role="presentation">*/}
                                {/*						<div className="ag-cell-label-container" role="presentation">*/}
                                {/*							<div ref="eLabel" className="ag-header-cell-label" role="presentation">*/}
                                {/*								<span ref="eText" className="ag-header-cell-text">*/}
                                {/*									직접 판매 금액*/}
                                {/*								</span>*/}
                                {/*								<span ref="eFilter" className="ag-header-icon ag-header-label-icon ag-filter-icon ag-hidden" aria-hidden="true">*/}
                                {/*									<span className="ag-icon ag-icon-filter" unselectable="on" role="presentation"></span>*/}
                                {/*								</span>{" "}*/}
                                {/*								<span className="ag-sort-indicator-container" ref="eSortIndicator">*/}
                                {/*									<span ref="eSortOrder" className="ag-sort-indicator-icon ag-sort-order ag-hidden" aria-hidden="true"></span>*/}
                                {/*									<span ref="eSortAsc" className="ag-sort-indicator-icon ag-sort-ascending-icon ag-hidden" aria-hidden="true"></span>*/}
                                {/*									<span ref="eSortDesc" className="ag-sort-indicator-icon ag-sort-descending-icon ag-hidden" aria-hidden="true"></span>*/}
                                {/*									<span ref="eSortMixed" className="ag-sort-indicator-icon ag-sort-mixed-icon ag-hidden" aria-hidden="true">*/}
                                {/*										<span className="ag-icon ag-icon-none" unselectable="on" role="presentation"></span>*/}
                                {/*									</span>*/}
                                {/*									<span ref="eSortNone" className="ag-sort-indicator-icon ag-sort-none-icon ag-hidden" aria-hidden="true"></span>*/}
                                {/*								</span>*/}
                                {/*							</div>*/}
                                {/*						</div>*/}
                                {/*					</div>*/}
                                {/*				</div>*/}
                                {/*				<div*/}
                                {/*					className="ag-header-cell ag-focus-managed"*/}
                                {/*					role="columnheader"*/}
                                {/*					tabIndex={-1}*/}
                                {/*					aria-colindex={6}*/}
                                {/*					style={{*/}
                                {/*						left: "667px",*/}
                                {/*						width: "133px",*/}
                                {/*					}}*/}
                                {/*					col-id="indirSellCost"*/}
                                {/*				>*/}
                                {/*					<div className="ag-header-cell-resize ag-hidden" role="presentation"></div>*/}
                                {/*					<div role="presentation" className="ag-labeled ag-label-align-right ag-checkbox ag-input-field ag-header-select-all ag-hidden">*/}
                                {/*						<div ref="eLabel" className="ag-input-field-label ag-label ag-hidden ag-checkbox-label" role="presentation"></div>*/}
                                {/*						<div ref="eWrapper" className="ag-wrapper ag-input-wrapper ag-checkbox-input-wrapper" role="presentation">*/}
                                {/*							<input ref="eInput" className="ag-input-field-input ag-checkbox-input" type="checkbox" id="ag-8-input" tabIndex={-1} />*/}
                                {/*						</div>*/}
                                {/*					</div>*/}
                                {/*					<div className="ag-header-cell-comp-wrapper" role="presentation">*/}
                                {/*						<div className="ag-cell-label-container" role="presentation">*/}
                                {/*							<div ref="eLabel" className="ag-header-cell-label" role="presentation">*/}
                                {/*								<span ref="eText" className="ag-header-cell-text">*/}
                                {/*									간접 판매 금액*/}
                                {/*								</span>*/}
                                {/*								<span ref="eFilter" className="ag-header-icon ag-header-label-icon ag-filter-icon ag-hidden" aria-hidden="true">*/}
                                {/*									<span className="ag-icon ag-icon-filter" unselectable="on" role="presentation"></span>*/}
                                {/*								</span>{" "}*/}
                                {/*								<span className="ag-sort-indicator-container" ref="eSortIndicator">*/}
                                {/*									<span ref="eSortOrder" className="ag-sort-indicator-icon ag-sort-order ag-hidden" aria-hidden="true"></span>*/}
                                {/*									<span ref="eSortAsc" className="ag-sort-indicator-icon ag-sort-ascending-icon ag-hidden" aria-hidden="true"></span>*/}
                                {/*									<span ref="eSortDesc" className="ag-sort-indicator-icon ag-sort-descending-icon ag-hidden" aria-hidden="true"></span>*/}
                                {/*									<span ref="eSortMixed" className="ag-sort-indicator-icon ag-sort-mixed-icon ag-hidden" aria-hidden="true">*/}
                                {/*										<span className="ag-icon ag-icon-none" unselectable="on" role="presentation"></span>*/}
                                {/*									</span>*/}
                                {/*									<span ref="eSortNone" className="ag-sort-indicator-icon ag-sort-none-icon ag-hidden" aria-hidden="true"></span>*/}
                                {/*								</span>*/}
                                {/*							</div>*/}
                                {/*						</div>*/}
                                {/*					</div>*/}
                                {/*				</div>*/}
                                {/*				<div*/}
                                {/*					className="ag-header-cell ag-focus-managed"*/}
                                {/*					role="columnheader"*/}
                                {/*					tabIndex={-1}*/}
                                {/*					aria-colindex={7}*/}
                                {/*					style={{*/}
                                {/*						left: "800px",*/}
                                {/*						width: "133px",*/}
                                {/*					}}*/}
                                {/*					col-id="sellCost"*/}
                                {/*				>*/}
                                {/*					<div className="ag-header-cell-resize ag-hidden" role="presentation"></div>*/}
                                {/*					<div role="presentation" className="ag-labeled ag-label-align-right ag-checkbox ag-input-field ag-header-select-all ag-hidden">*/}
                                {/*						<div ref="eLabel" className="ag-input-field-label ag-label ag-hidden ag-checkbox-label" role="presentation"></div>*/}
                                {/*						<div ref="eWrapper" className="ag-wrapper ag-input-wrapper ag-checkbox-input-wrapper" role="presentation">*/}
                                {/*							<input ref="eInput" className="ag-input-field-input ag-checkbox-input" type="checkbox" id="ag-9-input" tabIndex={-1} />*/}
                                {/*						</div>*/}
                                {/*					</div>*/}
                                {/*					<div className="ag-header-cell-comp-wrapper" role="presentation">*/}
                                {/*						<div className="ag-cell-label-container" role="presentation">*/}
                                {/*							<div ref="eLabel" className="ag-header-cell-label" role="presentation">*/}
                                {/*								<span ref="eText" className="ag-header-cell-text">*/}
                                {/*									총 판매 금액*/}
                                {/*								</span>*/}
                                {/*								<span ref="eFilter" className="ag-header-icon ag-header-label-icon ag-filter-icon ag-hidden" aria-hidden="true">*/}
                                {/*									<span className="ag-icon ag-icon-filter" unselectable="on" role="presentation"></span>*/}
                                {/*								</span>{" "}*/}
                                {/*								<span className="ag-sort-indicator-container" ref="eSortIndicator">*/}
                                {/*									<span ref="eSortOrder" className="ag-sort-indicator-icon ag-sort-order ag-hidden" aria-hidden="true"></span>*/}
                                {/*									<span ref="eSortAsc" className="ag-sort-indicator-icon ag-sort-ascending-icon ag-hidden" aria-hidden="true"></span>*/}
                                {/*									<span ref="eSortDesc" className="ag-sort-indicator-icon ag-sort-descending-icon ag-hidden" aria-hidden="true"></span>*/}
                                {/*									<span ref="eSortMixed" className="ag-sort-indicator-icon ag-sort-mixed-icon ag-hidden" aria-hidden="true">*/}
                                {/*										<span className="ag-icon ag-icon-none" unselectable="on" role="presentation"></span>*/}
                                {/*									</span>*/}
                                {/*									<span ref="eSortNone" className="ag-sort-indicator-icon ag-sort-none-icon ag-hidden" aria-hidden="true"></span>*/}
                                {/*								</span>*/}
                                {/*							</div>*/}
                                {/*						</div>*/}
                                {/*					</div>*/}
                                {/*				</div>*/}
                                {/*				<div*/}
                                {/*					className="ag-header-cell ag-focus-managed"*/}
                                {/*					role="columnheader"*/}
                                {/*					tabIndex={-1}*/}
                                {/*					aria-colindex={8}*/}
                                {/*					style={{*/}
                                {/*						left: "933px",*/}
                                {/*						width: "133px",*/}
                                {/*					}}*/}
                                {/*					col-id="dcAdspend"*/}
                                {/*				>*/}
                                {/*					<div className="ag-header-cell-resize ag-hidden" role="presentation"></div>*/}
                                {/*					<div role="presentation" className="ag-labeled ag-label-align-right ag-checkbox ag-input-field ag-header-select-all ag-hidden">*/}
                                {/*						<div ref="eLabel" className="ag-input-field-label ag-label ag-hidden ag-checkbox-label" role="presentation"></div>*/}
                                {/*						<div ref="eWrapper" className="ag-wrapper ag-input-wrapper ag-checkbox-input-wrapper" role="presentation">*/}
                                {/*							<input ref="eInput" className="ag-input-field-input ag-checkbox-input" type="checkbox" id="ag-10-input" tabIndex={-1} />*/}
                                {/*						</div>*/}
                                {/*					</div>*/}
                                {/*					<div className="ag-header-cell-comp-wrapper" role="presentation">*/}
                                {/*						<div className="ag-cell-label-container" role="presentation">*/}
                                {/*							<div ref="eLabel" className="ag-header-cell-label" role="presentation">*/}
                                {/*								<span ref="eText" className="ag-header-cell-text">*/}
                                {/*									할인 광고비*/}
                                {/*								</span>*/}
                                {/*								<span ref="eFilter" className="ag-header-icon ag-header-label-icon ag-filter-icon ag-hidden" aria-hidden="true">*/}
                                {/*									<span className="ag-icon ag-icon-filter" unselectable="on" role="presentation"></span>*/}
                                {/*								</span>{" "}*/}
                                {/*								<span className="ag-sort-indicator-container" ref="eSortIndicator">*/}
                                {/*									<span ref="eSortOrder" className="ag-sort-indicator-icon ag-sort-order ag-hidden" aria-hidden="true"></span>*/}
                                {/*									<span ref="eSortAsc" className="ag-sort-indicator-icon ag-sort-ascending-icon ag-hidden" aria-hidden="true"></span>*/}
                                {/*									<span ref="eSortDesc" className="ag-sort-indicator-icon ag-sort-descending-icon ag-hidden" aria-hidden="true"></span>*/}
                                {/*									<span ref="eSortMixed" className="ag-sort-indicator-icon ag-sort-mixed-icon ag-hidden" aria-hidden="true">*/}
                                {/*										<span className="ag-icon ag-icon-none" unselectable="on" role="presentation"></span>*/}
                                {/*									</span>*/}
                                {/*									<span ref="eSortNone" className="ag-sort-indicator-icon ag-sort-none-icon ag-hidden" aria-hidden="true"></span>*/}
                                {/*								</span>*/}
                                {/*							</div>*/}
                                {/*						</div>*/}
                                {/*					</div>*/}
                                {/*				</div>*/}
                                {/*				<div*/}
                                {/*					className="ag-header-cell ag-focus-managed"*/}
                                {/*					role="columnheader"*/}
                                {/*					tabIndex={-1}*/}
                                {/*					aria-colindex={9}*/}
                                {/*					style={{*/}
                                {/*						left: "1066px",*/}
                                {/*						width: "133px",*/}
                                {/*					}}*/}
                                {/*					col-id="column10"*/}
                                {/*				>*/}
                                {/*					<div className="ag-header-cell-resize ag-hidden" role="presentation"></div>*/}
                                {/*					<div role="presentation" className="ag-labeled ag-label-align-right ag-checkbox ag-input-field ag-header-select-all ag-hidden">*/}
                                {/*						<div ref="eLabel" className="ag-input-field-label ag-label ag-hidden ag-checkbox-label" role="presentation"></div>*/}
                                {/*						<div ref="eWrapper" className="ag-wrapper ag-input-wrapper ag-checkbox-input-wrapper" role="presentation">*/}
                                {/*							<input ref="eInput" className="ag-input-field-input ag-checkbox-input" type="checkbox" id="ag-11-input" tabIndex={-1} />*/}
                                {/*						</div>*/}
                                {/*					</div>*/}
                                {/*					<div className="ag-header-cell-comp-wrapper" role="presentation">*/}
                                {/*						<div className="ag-cell-label-container" role="presentation">*/}
                                {/*							<div ref="eLabel" className="ag-header-cell-label" role="presentation">*/}
                                {/*								<span ref="eText" className="ag-header-cell-text">*/}
                                {/*									DP용(라디오)*/}
                                {/*								</span>*/}
                                {/*								<span ref="eFilter" className="ag-header-icon ag-header-label-icon ag-filter-icon ag-hidden" aria-hidden="true">*/}
                                {/*									<span className="ag-icon ag-icon-filter" unselectable="on" role="presentation"></span>*/}
                                {/*								</span>{" "}*/}
                                {/*								<span className="ag-sort-indicator-container" ref="eSortIndicator">*/}
                                {/*									<span ref="eSortOrder" className="ag-sort-indicator-icon ag-sort-order ag-hidden" aria-hidden="true"></span>*/}
                                {/*									<span ref="eSortAsc" className="ag-sort-indicator-icon ag-sort-ascending-icon ag-hidden" aria-hidden="true"></span>*/}
                                {/*									<span ref="eSortDesc" className="ag-sort-indicator-icon ag-sort-descending-icon ag-hidden" aria-hidden="true"></span>*/}
                                        {/*									<span ref="eSortMixed" className="ag-sort-indicator-icon ag-sort-mixed-icon ag-hidden" aria-hidden="true">*/}
                                        {/*										<span className="ag-icon ag-icon-none" unselectable="on" role="presentation"></span>*/}
                                        {/*									</span>*/}
                                        {/*									<span ref="eSortNone" className="ag-sort-indicator-icon ag-sort-none-icon ag-hidden" aria-hidden="true"></span>*/}
                                        {/*								</span>*/}
                                        {/*							</div>*/}
                                        {/*						</div>*/}
                                        {/*					</div>*/}
                                        {/*				</div>*/}
                                        {/*			</div>*/}
                                    </div>
                                </div>



                                {/*	<div*/}
                                {/*		className="ag-pinned-right-header ag-hidden"*/}
                                {/*		role="presentation"*/}
                                {/*		style={{*/}
                                {/*			width: "0px",*/}
                                {/*			minWidth: "0px",*/}
                                {/*			maxWidth: "0px",*/}
                                {/*		}}*/}
                                {/*	>*/}
                                <div
                                    className="ag-header-row ag-header-row-column"
                                    role="row"
                                    aria-rowindex={1}
                                    style={{
                                        height: "25px",
                                        top: "0px",
                                        width: "0px",
                                    }}
                                ></div>
                                {/*	</div>*/}
                                {/*</div>*/}


                                <div
                                    className="ag-floating-top"
                                    role="presentation"
                                    style={{
                                        height: "0px",
                                        minHeight: "0px",
                                        display: "none",
                                        overflowY: "hidden",
                                    }}
                                >
                                    <div className="ag-pinned-left-floating-top ag-hidden" role="presentation"></div>
                                    <div className="ag-floating-top-viewport" role="presentation">
                                        <div
                                            className="ag-floating-top-container"
                                            role="presentation"
                                            style={{
                                                width: "1199px",
                                                transform: "translateX(0px)",
                                            }}
                                        ></div>
                                    </div>
                                    <div className="ag-pinned-right-floating-top ag-hidden" role="presentation"></div>
                                    <div className="ag-floating-top-full-width-container" role="presentation"></div>
                                </div>
                                <div className="ag-body-viewport ag-row-no-animation ag-layout-auto-height" role="presentation">
                                    <div className="ag-pinned-left-cols-container ag-hidden" role="presentation" style={{ height: "1px" }}></div>
                                    <div className="ag-center-cols-clipper" role="presentation" style={{ height: "1px" }}>
                                        <div className="ag-center-cols-viewport" role="presentation" style={{ height: "100%" }}>
                                            <div
                                                className="ag-center-cols-container"
                                                role="presentation"
                                                style={{
                                                    height: "1px",
                                                    width: "1199px",
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                    <div className="ag-pinned-right-cols-container ag-hidden" role="presentation" style={{ height: "1px" }}></div>
                                    <div className="ag-full-width-container" role="presentation" style={{ height: "1px" }}></div>
                                </div>
                                <div
                                    className="ag-sticky-top"
                                    role="presentation"
                                    style={{
                                        height: "0px",
                                        top: "26px",
                                        width: "100%",
                                    }}
                                >
                                    <div className="ag-pinned-left-sticky-top ag-hidden" role="presentation"></div>
                                    <div className="ag-sticky-top-viewport" role="presentation">
                                        <div
                                            className="ag-sticky-top-container"
                                            role="presentation"
                                            style={{
                                                width: "1199px",
                                                transform: "translateX(0px)",
                                            }}
                                        ></div>
                                    </div>
                                    <div className="ag-pinned-right-sticky-top ag-hidden" role="presentation"></div>
                                    <div className="ag-sticky-top-full-width-container" role="presentation"></div>
                                </div>


                                <div
                                    className="ag-floating-bottom"
                                    role="presentation"
                                    style={{
                                        height: "0px",
                                        minHeight: "0px",
                                        display: "none",
                                        overflowY: "hidden",
                                    }}
                                >
                                    <div className="ag-pinned-left-floating-bottom ag-hidden" role="presentation"></div>
                                    <div className="ag-floating-bottom-viewport" role="presentation">
                                        <div
                                            className="ag-floating-bottom-container"
                                            role="presentation"
                                            style={{
                                                width: "1199px",
                                                transform: "translateX(0px)",
                                            }}
                                        ></div>
                                    </div>
                                    <div className="ag-pinned-right-floating-bottom ag-hidden" role="presentation"></div>
                                    <div className="ag-floating-bottom-full-width-container" role="presentation"></div>
                                </div>


                                {/*<div*/}
                                {/*	className="ag-body-horizontal-scroll"*/}
                                {/*	aria-hidden="true"*/}
                                {/*	style={{*/}
                                {/*		height: "0px",*/}
                                {/*		maxHeight: "0px",*/}
                                {/*		minHeight: "0px",*/}
                                {/*	}}*/}
                                {/*>*/}
                                {/*	<div*/}
                                {/*		className="ag-horizontal-left-spacer ag-scroller-corner"*/}
                                {/*		ref="eLeftSpacer"*/}
                                {/*		style={{*/}
                                {/*			width: "0px",*/}
                                {/*			maxWidth: "0px",*/}
                                {/*			minWidth: "0px",*/}
                                {/*		}}*/}
                                {/*	></div>*/}
                                {/*	<div*/}
                                {/*		className="ag-body-horizontal-scroll-viewport"*/}
                                {/*		ref="eViewport"*/}
                                {/*		style={{*/}
                                {/*			height: "0px",*/}
                                {/*			maxHeight: "0px",*/}
                                {/*			minHeight: "0px",*/}
                                {/*		}}*/}
                                {/*	>*/}
                                {/*		<div*/}
                                {/*			className="ag-body-horizontal-scroll-container"*/}
                                {/*			ref="eContainer"*/}
                                {/*			style={{*/}
                                {/*				height: "0px",*/}
                                {/*				maxHeight: "0px",*/}
                                {/*				minHeight: "0px",*/}
                                {/*				width: "1199px",*/}
                                {/*			}}*/}
                                {/*		></div>*/}
                                {/*	</div>*/}
                                {/*	<div*/}
                                {/*		className="ag-horizontal-right-spacer ag-scroller-corner"*/}
                                {/*		ref="eRightSpacer"*/}
                                {/*		style={{*/}
                                {/*			width: "0px",*/}
                                {/*			maxWidth: "0px",*/}
                                {/*			minWidth: "0px",*/}
                                {/*		}}*/}
                                {/*	></div>*/}
                                {/*</div>*/}




                                <div className="ag-overlay" aria-hidden="true">
                                    <div className="ag-overlay-panel">
                                        {/*		<div className="ag-overlay-wrapper ag-layout-auto-height ag-overlay-no-rows-wrapper" ref="eOverlayWrapper">*/}
                                        <div className="ag-react-container">
                                            <div>
                                                <i className="ico ico-empty-data"></i>
                                                <span className="ag-overlay-no-rows-center">데이터가 없습니다.</span>
                                            </div>
                                        </div>
                                        {/*</div>*/}
                                    </div>
                                </div>
                            </div>
                            <div className="ag-tab-guard ag-tab-guard-bottom" role="presentation" tabIndex={0}></div>
                        </div>



                        <div className="ag-paging-panel ag-unselectable ag-hidden" id="ag-2">
                            {/*	<span className="ag-paging-row-summary-panel" role="status">*/}
                            {/*		<span id="ag-2-first-row" ref="lbFirstRowOnPage" className="ag-paging-row-summary-panel-number"></span>*/}
                            {/*		<span id="ag-2-to">to</span>*/}
                            {/*		<span id="ag-2-last-row" ref="lbLastRowOnPage" className="ag-paging-row-summary-panel-number"></span>*/}
                            {/*		<span id="ag-2-of">of</span>*/}
                            {/*		<span id="ag-2-row-count" ref="lbRecordCount" className="ag-paging-row-summary-panel-number"></span>*/}
                            {/*	</span>*/}
                            <span className="ag-paging-page-summary-panel" role="presentation">
													{/*<div ref="btFirst" className="ag-paging-button" role="button" aria-label="First Page">*/}
                                {/*	<span className="ag-icon ag-icon-first" unselectable="on" role="presentation"></span>*/}
                                {/*</div>*/}
                                {/*<div ref="btPrevious" className="ag-paging-button" role="button" aria-label="Previous Page">*/}
                                {/*	<span className="ag-icon ag-icon-previous" unselectable="on" role="presentation"></span>*/}
                                {/*</div>*/}
                                {/*<span className="ag-paging-description" role="status">*/}
                                {/*	<span id="ag-2-start-page">Page</span>*/}
                                {/*	<span id="ag-2-start-page-number" ref="lbCurrent" className="ag-paging-number"></span>*/}
                                {/*	<span id="ag-2-of-page">of</span>*/}
                                {/*	<span id="ag-2-of-page-number" ref="lbTotal" className="ag-paging-number"></span>*/}
                                {/*</span>*/}
                                {/*<div ref="btNext" className="ag-paging-button" role="button" aria-label="Next Page">*/}
                                {/*	<span className="ag-icon ag-icon-next" unselectable="on" role="presentation"></span>*/}
                                {/*</div>*/}
                                <div className="ag-paging-button" role="button" aria-label="Last Page">
														<span className="ag-icon ag-icon-last" unselectable="on" role="presentation"></span>
													</div>
												</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GridBody2;