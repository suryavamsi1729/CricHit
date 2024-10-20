export default function FormValidation(obj){
    const {fistname,lastname,email,password,confimepassword,terms} = obj;
    const error = {
        fistname:false,
        lastname:false,
        password:false,
        confimepassword:false,
        terms:false
    }
    const Name_rex = /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/;
    const Email_rex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const Password_rex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W?).{8,}$/;
    /*checking is any feild is empty*/
    if(fistname=="" &&  lastname=="" && email=="" && password=="" && confimepassword=="" && terms==false){
        if(fistname==""){
            error.fistname=true;
        }
        if (lastname==""){
            error.lastname=true;
        }
        if(email==""){
            error.email=true;
        }
        if(password==""){
            error.password=true;
        }
        if(confimepassword==""){
            error.confimepassword=true;
        }
        if(terms==false){
            error.terms=true;
        }
    }
    else{
        //if all feild are filled
        //testing fist_name
        if(Name_rex.test(fistname)){
            error.fistname=false;
        }
        else{
            error.fistname=true;
        }
        //testing last_name
        if(Name_rex.test(lastname)){
            error.lastname=false;
        }
        else{
            error.lastname=true;
        }
        //testing email
        if(Email_rex.test(email)){
            error.email=false;
        }
        else{
            error.email=true;
        }
        //testing password
        if(Password_rex.test(password)){
            error.password=false;
        }
        else{
            error.fistname=true;
        }
        //testing confime_password
        if(Password_rex.test(password) && password==confimepassword){
            error.confimepassword=false;
        }
        else{
            error.confimepassword=true;
        }
        //teating terms
        if(terms){
            error.terms=false;
        }
        else{
            error.terms=true;
        }
    }
    const Error_obj = {
        value:(error.fistname || error.lastname || error.password || error.confimepassword || error.terms),
        error_msg:error
    }
    return Error_obj;
}