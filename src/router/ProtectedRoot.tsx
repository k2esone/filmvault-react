import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoot = ({children}:React.PropsWithChildren) =>{
if(!localStorage.getItem("TOKEN")){
    return <Navigate to={"/home"} replace></Navigate>
}
return <>{children}</>
}
export default ProtectedRoot;