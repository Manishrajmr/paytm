import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"


export const Dashboard = () => {

  
    return <div className="mx-auto">
        <Appbar />

        <div className="m-4 md:m-8">
            <Balance value={"10,000"} />
            <Users />
        </div>

    </div>
}