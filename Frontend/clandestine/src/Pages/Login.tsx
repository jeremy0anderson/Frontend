import {useMutation, gql} from '@apollo/client';
import {useState} from "react";
import {Input} from "@nextui-org/react";
import * as IO from 'react-icons/io5';

function Login(){
    const [state, setState] = useState({email:'', password:''})
    // noinspection GraphQLUnresolvedReference
    const [login]= useMutation(gql`
        mutation Mutation($email: String!, $password: String!) {
            login(email: $email, password: $password)
        }
    `)

    return(
        <form onSubmit={async(e)=>{
            e.preventDefault();
            await login({
                variables:{
                    email: state.email,
                    password:state.password
                },
                onCompleted: ({login})=>{
                    localStorage.setItem('token', login);
                },
                onError: (e)=>{
                    console.log(e);
                }
            })
        }}>
        <Input
            onChange={(e)=>setState({
                ...state,
                email: e.target.value
            })}
            labelPlaceholder={"Email"}/>
        <Input
            type={"password"}
            contentLeft={<IO.IoLockClosed/>}
            onChange={(e)=>setState({
                ...state,
                password: e.target.value
            })}
            labelPlaceholder={"Password"}/>
            <button>Submit</button>
        </form>
    )
}

export default Login;