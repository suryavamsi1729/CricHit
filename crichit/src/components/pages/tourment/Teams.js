import {React} from "react";
import LoadingComp from "components/elements/LoadingComp";
import TeamContainer from "./TeamConatainer";
import TeamItm from "./TeamItm";
export default function Team(){
    return(
        <LoadingComp url={'http://localhost:5001/api/teams'} size={12}>
            <TeamContainer pagenation={false}>
                <TeamItm/>
            </TeamContainer>
        </LoadingComp>
    );
}