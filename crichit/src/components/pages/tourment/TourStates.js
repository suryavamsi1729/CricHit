import React from "react";
import LoadingComp from "components/elements/LoadingComp";
import Table from "components/elements/Table";
import TableRow from "components/elements/TableRow";
export default function TourStates(){
    const columns = [
        { header: 'Pos', accessor: 'position',render:(row)=>(
            <p className="w-full h-full flex flex-row justify-start items-center ps-2">{row.position}</p>
        ) },
        { header: 'Team Name', accessor: 'team_name',render:(row)=>(<>
            <img src={row.url} className="w-5 h-5 md:w-6 md:h-6  border-none rounded-round"/>
            <p className=" text-xs text-slate-200">{row.team_name}</p>
        </>) },
        { header: 'Matches', accessor: 'matches' },
        { header: 'Points', accessor: 'points' },
        { header: 'Rating', accessor: 'rating' },
      ];
    return(
        <>
            <LoadingComp url={['http://localhost:5001/api/rank']}>
                <Table columns={columns}/>
            </LoadingComp>
        </>
    );
}