import React from "react";
import LoadingComp from "components/elements/LoadingComp";
import Table from "components/elements/Table";
export default function TourStates(){
    const headers = ["Name", "Age", "Position"];
    const rows = [
        ["John Doe", 28, "Developer"],
        ["Jane Smith", 32, "Designer"],
        ["Sam Wilson", 22, "Intern"],
    ];
    return(
        <>
            {/* <LoadingComp> */}
                <Table header={headers} data={rows}/>
            {/* </LoadingComp> */}
        </>
    );
}