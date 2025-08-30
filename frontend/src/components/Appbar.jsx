import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const Appbar = () =>{

    const navigate = useNavigate();

     const location = useLocation(); // URL se location object milega

  const queryParams = new URLSearchParams(location.search); // ?name=manish
  const name = queryParams.get("name"); // "manish"


    return <div className="shadow h-14 flex items-center bg-black text-white justify-between">

        <div className="flex flex-col justify-center h-full ml-4 text-white  ">
          PayMe
        </div>

        <div className="flex items-center">
        <button className="w-fit mr-2 ml-10 text-white  hover:text-green-500 focus:outline-none  cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 " onClick = {()=>{localStorage.removeItem("token");navigate("/");}}>Logout</button>
            <div className="flex flex-col justify-center h-full mr-4">{name}</div>
            
            <div className="rounded-full h-10 w-10 bg-green-500 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl cursor-pointer">
                    {name.charAt(0)}
                </div>
            </div>

            
            
        </div>
        {/* <Button label={"Logout"} onClick = {()=>{localStorage.setItem("token", response.data.token);}}/> */}

        

    </div>
}