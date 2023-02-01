import React, {useState} from "react";
import ChartHeaderButton from "./ChartHeaderButton";

function ChartRightHeader() {
	const [buttonName1, setButtonName1] = useState<string>("노출수");
	const [buttonName2, setButtonName2] = useState<string>("클릭수");

	return (
		<div className="box-right">
			<div className="box-right">
				<ChartHeaderButton buttonId="rc_select_1" buttonName={buttonName1}/>
				<ChartHeaderButton buttonId="rc_select_2" buttonName={buttonName2}/>
			</div>
		</div>
	);
}

export default ChartRightHeader;
