 import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export const SendMoney = () =>{

    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount, setAmount] = useState(0);


    return <div className="flex justify-center h-screen">
        <div className="h-full flex flex-col justify-center">
            <div className="h-min text-card-forground max-w-md p-4 space-y-8 w-96 bg-white s">

                <div className="flex flex-col  space-y-1.5">
                    <h2 className="text-3xl font-bold text-center">Send Money</h2>
                </div>

                <div className="p-4 ">

                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                            <span>{name[0]}</span>
                        </div>
                        <h3 className="text-2xl font-semibold">{name}</h3>
                    </div>

                    <div className="space-y-4 py-6">
                        <div className="space-y-2">
                           <label className="text-sm  font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="amount" >Amount (in Rs)</label>
                           <input onChange={(e)=>{setAmount(e.target.value)}} type="number" id="amount" placeholder="Enter Amount" className="flex mt-5 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
                        </div>

                        <button onClick={()=>{axios.post("http://localhost:3000/api/v1/account/transfer",{
                            to:id,
                            amount 
                        },
                        {
                            headers:{
                                Authorization:"Bearer"+localStorage.getItem("token")
                            }
                        })}} className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white cursor-pointer">
                            Initiate Transfer
                        </button>
                    </div>

                </div>

            </div>
        </div>
    </div>
}