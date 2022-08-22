import { useEffect } from "react"
import { useForm } from "../hooks/useForm";

export const FromWithCustomHook = () => {
    
  
    const {formState, onInputChange,onResetForm,username,email,password} = useForm({
        username:'',
        email:'',
        password:'',
    });

    //const {username,email,password} = formState;
   
    return (
        <>
            <h1>Form with custom hook</h1>
            <hr/>

            <form>
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={onInputChange}
                />
                <input 
                    type="email"
                    className="form-control mt-2"
                    placeholder="david@google.com"
                    name="email"
                    value={email}
                    onChange={onInputChange}
                />

                <input 
                    type="password"
                    className="form-control mt-2"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={onInputChange}
                    autoComplete="off"
                />

                <button onClick={onResetForm} className="btn btn-primary mt-2"> Borrar</button>
            </form>
        </>
    )
}
