import React from "react";
import Input from "./Input";



function Login(){

    return(
            <form className="form">
                <h1>Hi</h1>
                <Input
                    type="text"
                    placeholder="UserName"
                />
                
                <Input
                    type="password"
                    placeholder="Password"
                />

                
                <button type="submit">Login</button>
            </form>
        );

}


export default Login;