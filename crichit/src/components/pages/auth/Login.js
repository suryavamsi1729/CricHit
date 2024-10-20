import {React,useState} from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
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
/*Utile*/
import LoginValidation from "utils/LoginValidation";
/*fontawesome-icons*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faLock } from "@fortawesome/free-solid-svg-icons";
/*Action for state handeling*/
import { login_User } from "store/AddUserStor";
export default function Login(){
    //usedispatch
    const dispatch = useDispatch()
    //usenavigate 
    const navigate = useNavigate();
    //useselector function 
    const Users = useSelector((state)=>{
        return state.User;
    });
    const email =useFormInput("");
    const password =useFormInput("");
    const [isloading,setloading] = useState(false);
    //handelSubmit function
    function handelSubmit(e){
        e.preventDefault();
        const login=LoginValidation(Users,{
                                Email:email.value.trim(),
                                Password:password.value.trim()
                            }
                        );
        console.log(login.value);
        if(login.value){
            console.log(login.user_id);
            dispatch(login_User(login.user_id));
            navigate("/home");
        }    
        else{
            console.log("not successfull");
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
                    <div className="w-full h-full md:w-2/4 md:h-3/4 lg:w-1/4 lg:h-3/4  flex flex-col justify-evenly items-center px-6 border-none rounded-[16px] bg-red-50">
                        <form className="w-full h-auto flex flex-col justify-center items-center gap-6 ">
                        <div className="w-24 h-24 rounded-round bg-slate-50 flex flex-col justify-center items-center">
                            <img src={logo} alt="logo" className="w-20 h-20"/>
                        </div>
                        <h1 className="text-center font-mono font-semibold text-4xl text-red-500 mb-10">Login</h1>
                        <Inputfeild val={email.value} change={email.onchange} type={"text"} className={"w-full"} placeholder={"username & email"}>
                            <FontAwesomeIcon icon={faUser} style={{color: "#df7272",}} />
                        </Inputfeild>
                        <Passwordfeild val={password.value} change={password.onchange} type={"password"} className={"w-full"} placeholder={"password"}>
                            <FontAwesomeIcon icon={faLock} style={{color: "#df7272",}}/>
                        </Passwordfeild>
                        <p className="w-auto h-auto self-end font-mono font-normal text-base text-red-400 hover:text-blue-500 hover:cursor-pointer text-right">forgot Password?</p>
                        <button onClick={
                            (e)=>{
                                setloading(!isloading);
                                e.preventDefault();
                                handelSubmit(e);
                                
                            }
                        }
                        className="w-auto h-auto hover:cursor-pointer px-[40px] py-[6px] border-none outline-none rounded-[20px] text-center font-normal text-lg bg-red-400 text-white">login</button>
                        </form>
                        <p className="w-auto h-auto  font-mono font-normal text-base text-red-400">don't have account? <span className="font-mono  text-base text-blue-500 font-semibold  hover:text-red-500 hover:cursor-pointer "><a href="/signup">Signup</a></span></p>
                    </div>
                </CenterContainer>
            </VeiwPortContainer>
       
           
        </>
    )
}