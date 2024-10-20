import { useDispatch } from "react-redux";
/*Action for state handeling*/
import { login_User } from "store/AddUserStor";
export default function LoginValidation(Users,User){
    // Email:Email.value,
    //Password:Password.value
    console.log(Users,User);
    for (let user of Users) {
        console.log(user);
        if(user.info.Email === User.Email && user.info.Password === User.Password){
            return {value:true,user_id:user.id};
        }
    }
    return {value:false,user_id:null};
}