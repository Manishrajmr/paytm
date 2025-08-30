import axios from "axios"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { useState } from "react"
import { useNavigate } from "react-router-dom"



export const Signin = () =>{

    const [email, setEmail] = useState("");
    const [passWord, setPassword] = useState("");
    const navigate = useNavigate();

    return <div className="  h-screen flex justify-center">

        <div className="flex flex-col justify-center">
            <div className="rounded-lg w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        <InputBox placeholder="harkirat@gmail.com" label={"Email"} onChange={(e)=>{
            setEmail(e.target.value);
        }} />
        <InputBox placeholder="123456" label={"Password"} onChange={(e)=>{
            setPassword(e.target.value);
        }} />
        <div className="pt-4">
          <Button label={"Sign in"} onClick={async ()=>{
           
           try{
            const response = await axios.post("https://paytm-uh9g.onrender.com/api/v1/user/login",{
                email:email,
                passWord:passWord
            });

            localStorage.setItem("token", response.data.token);
            navigate(`/dashboard?name=${firstName}`);
            
              
           }
           catch(error){

            if (error.response) {
                console.log("Server responded with error:", error.response.status, error.response.data);
              } else if (error.request) {
                console.log("No response received:", error.request);
              } else {
                console.log("Error setting up request:", error.message);
              }

           }

          }} />
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
            </div>

        </div>

    </div>
}