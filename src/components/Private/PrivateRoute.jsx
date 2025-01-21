import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router";

const PrivateRoute = ({children}) => {
    const {user, lodding} = useContext(AuthContext)
    console.log(user.email)

    if(lodding){
        return <span className="loading loading-dots loading-xl"></span>
    }
    
    if(user?.email){
        return children;
    }
    
    return <Navigate to= "/login" replace></Navigate>
};

export default PrivateRoute;