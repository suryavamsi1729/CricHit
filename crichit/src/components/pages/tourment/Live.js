import React from "react";
import LoadingComp from "components/elements/LoadingComp";
import TeamContainer from "./TeamConatainer";
import LiveMatchItm from "./LiveMatchItm";
export default function Live(){
    return(
        <>
            <LoadingComp url={'http://localhost:5001/api/matches'} size={12}>
                <TeamContainer pagenation={true}>
                    <LiveMatchItm/>
                </TeamContainer>
            </LoadingComp>
        </>
    )
}