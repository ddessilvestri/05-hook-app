import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

    const {user,setUser} = useContext(UserContext);
    console.log(user);
    return (
        <>
            <h1>LoginPage</h1>
            <hr/>
            <pre aria-label="pre">
                {JSON.stringify(user,null,2)}
            </pre>

            <button 

                onClick={()=> setUser({id:123,name:'Juan',email:'juan@gmail.com'})}
            
            className="btn btn-primary">
                Set User
            </button>
        </>
    )
}