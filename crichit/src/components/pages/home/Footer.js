import React from "react";
/*fontawesome-icons*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF,faTwitter,faGooglePlusG,faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';
export default function Footer(){
    return(
        <>
            <div className="w-full h-auto py-6 bg-[#00002E]">
                <div className="w-full h-full flex flex-col justify-center items-center gap-3">
                    <h1 className="font-rubik font-medium text-base text-white">CricHit</h1>
                    <p className="w-1/3  text-center font-rubik font-light text-sm text-slate-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                    <div className="flex flex-row justify-center items-center pt-2 gap-4">
                        <FontAwesomeIcon icon={faFacebookF} style={{color:"white",width:"24px"}}/>
                        <FontAwesomeIcon icon={faTwitter} style={{color:"white",width:"24px"}}/>
                        <FontAwesomeIcon icon={faGooglePlusG} style={{color:"white",width:"24px"}}/>
                        <FontAwesomeIcon icon={faLinkedin} style={{color:"white",width:"24px"}}/>
                        <FontAwesomeIcon icon={faGithub} style={{color:"white",width:"24px"}}/>
                    </div>
                    {/* © 2024 Your CricHit. All Rights Reserved.  */}
                </div>
            </div>
            <div className="w-full h-auto text-center font-rubik font-light text-sm text-white bg-slate-900 py-2">© 2024 Your CricHit.  All Rights Reserved</div>
        </>
    )
}