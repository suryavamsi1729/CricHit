import React from "react";
import LoadingComp from "components/elements/LoadingComp";
import TeamContainer from "./TeamConatainer";
import MatchItm from "./MatchItm";
export default function Matches(){
    return(
        <>
            <LoadingComp url={['http://localhost:5001/api/matches']} size={12}>
                <TeamContainer pagenation={true}>
                    <MatchItm/>
                </TeamContainer>
            </LoadingComp>
        </>
    )
}