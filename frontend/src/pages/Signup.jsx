import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 md:w-90 text-center p-2 h-max px-4">
          <Heading label={"Sign up"} />
          <SubHeading label={"Enter your infromation to create an account"} />
          <InputBox
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            placeholder="John"
            label={"First Name"}
          />
          <InputBox
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            placeholder="Doe"
            label={"Last Name"}
          />
          <InputBox
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="manish@gmail.com"
            label={"Email"}
          />

          <InputBox
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="******"
            label={"Password"}
          />
          <div className="pt-4">
            <Button
              onClick={async () => {
                if (!firstName || !lastName || !email || !password) {
                  alert("Please fill in all the fields");
                  return;
                }

                try {
                  const response = await axios.post(
                    "https://paytm-uh9g.onrender.com/api/v1/user/signup",
                    {
                      email: email,
                      firstName: firstName,
                      lastName: lastName,
                      passWord: password,
                    }
                  );

                  localStorage.setItem("token", response.data.token);
                  navigate("/dashboard");
                } catch (error) {
                  console.error("Signup failed:", error);
                  alert("Signup failed. Please try again.");
                }
              }}
              label={"Sign up"}
            />
          </div>
          <BottomWarning
            label={"Already have an account?"}
            buttonText={"Sign in"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
};
