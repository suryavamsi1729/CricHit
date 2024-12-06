import {React,useState} from "react";
import { useNavigate } from "react-router-dom";
import {useDispatch,useSelector  } from "react-redux";
/*components importing*/
import VeiwPortContainer from "components/elements/VeiwPortContainer";
import CenterContainer from "components/elements/CenterContainer";
import Inputfeild from "components/elements/Inputfeild";
import Passwordfeild from "components/elements/Passwordfeild";
/*pages importing*/
import LoadingPage from "../LoadingPage";
/*images*/
import logo from "asserts/circhitlogo.png";
/*hooks*/
import useFormInput from "hooks/useFormInput";
import useOnClick from "hooks/useOnClick";
/*fontawesome-icons*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faLock,faCheck } from "@fortawesome/free-solid-svg-icons";
//utilit functions
import FormValidation from "utils/FormValidataion_signup";
/*Action for state handeling*/
import { Add_User } from "store/AddUserStor";
export default function SignUp(){
    //dispatch function
    const dispatch = useDispatch();
    //useSlector gettors
    const UsersInfo = useSelector((state)=>{
        return state;
    });
    //navigate function
    const navigate = useNavigate();
    //input elemnts setters and getters
    const FistName= useFormInput("");
    const LastName= useFormInput("");
    const Email =useFormInput("");
    const Password =useFormInput("");
    const confPsw = useFormInput("");
    const type = useFormInput("");
    const [isloading,setloading] = useState(false);
    const check =  useOnClick(false);
    //Error States
    const [Error,setError]=useState({
        fistname:false,
        lastname:false,
        email:false,
        password:false,
        confimepassword:false,
        terms:false});
    //submit function - call  when we click on sigup button
    function handelSubmit(e){
        e.preventDefault();
        console.log("submit");
        const obj = {
            fistname:FistName.value,
            lastname:LastName.value,
            email:Email.value,
            password:Password.value,
            confimepassword:confPsw.value,
            terms:check.isclick,
        }
        const Error_obj=FormValidation(obj);
        setError({...Error,...Error_obj.error_msg});
        if(!Error_obj.value){
            setloading(!isloading);
            dispatch(Add_User({
                Name:FistName.value,
                Email:Email.value,
                Password:Password.value
            }));
            navigate("/login");
        }
    }
    return(
        <>
        {
            isloading?
            <LoadingPage/>:
            null
        }
            <VeiwPortContainer>
                <CenterContainer>
                    <div className="w-full h-full md:w-3/5 md:h-[80%] lg:w-2/5 lg:h-[80%] flex flex-col justify-evenly items-center px-6 border-none rounded-[16px] bg-red-50">
                        <form  className="w-full h-auto flex flex-col justify-center items-center gap-6  ">
                        <h1 className="text-center font-mono font-semibold text-4xl text-red-500 ">SignUp</h1>
                        <Inputfeild val={FistName.value} change={FistName.onchange} type={"text"} error={Error.fistname} className={" w-full lg:w-4/5"} placeholder={"Fist Name"}>
                            <FontAwesomeIcon icon={faUser} style={{color: "#df7272",}} />
                        </Inputfeild>
                        <Inputfeild val={LastName.value} change={LastName.onchange} type={"text"} error={Error.lastname} className={" w-full lg:w-4/5"} placeholder={"Last Name"}>
                            <FontAwesomeIcon icon={faUser} style={{color: "#df7272",}} />
                        </Inputfeild>
                        <Inputfeild val={Email.value} change={Email.onchange} type={"email"} error={Error.email} className={" w-full lg:w-4/5"} placeholder={"Email"}>
                            <FontAwesomeIcon icon={faUser} style={{color: "#df7272",}} />
                        </Inputfeild>
                        <Passwordfeild val={Password.value} change={Password.onchange} type={"password"} error={Error.password} className={" w-full lg:w-4/5"} placeholder={"password"}>
                            <FontAwesomeIcon icon={faLock} style={{color: "#df7272",}}/>
                        </Passwordfeild>
                        <Passwordfeild val={confPsw.value} change={confPsw.onchange} type={"password"} error={Error.confimepassword} className={" w-full lg:w-4/5"} placeholder={"conform password"}>
                            <FontAwesomeIcon icon={faLock} style={{color: "#df7272",}}/>
                        </Passwordfeild>

                        <div className="ms-14 self-start flex flex-row justify-start items-center gap-3">
                            <div className="relative w-[24px] h-[24px] flex flex-col justify-center items-center">
                            <span onClick={()=>check.onclick()} className={`w-[15px] h-[15px] absolute border ${check.isclick?" border-sky-400 bg-sky-100":"border-red-400 bg-red-50"} border-solid rounded-[3px] flex flex-col justify-center items-center ${Error.terms?"border-2 border-red-600":null}`}>
                                <FontAwesomeIcon icon={faCheck} beat className={`text-sky-500  ${check.isclick?"":"hidden"}`} style={{width:"10px",height:"10px"}}/>
                            </span>
                            </div>
                            
                            <label className="font-mono font-normal text-base text-red-500 ">Terms and conditions</label>
                        </div>
                        <button onClick={
                            (e)=>{
                                handelSubmit(e);
                            }
                        }
                        className="w-auto h-auto hover:cursor-pointer px-[40px] py-[6px] border-none outline-none rounded-[20px] text-center font-normal text-lg bg-red-400 text-white">Signup</button>
                        </form>
                        <p className="w-auto h-auto  font-mono font-normal text-base text-red-400">Did you have account? <span className="font-mono text-base text-blue-500 font-semibold  hover:text-red-500 hover:cursor-pointer "><a href="/login">Login</a></span></p>
                    </div>
                </CenterContainer>
            </VeiwPortContainer>
       
           
        </>
    )
}