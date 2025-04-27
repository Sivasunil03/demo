import React, { useState } from 'react'

const Login = () => {
    const [name,setName] = useState("")
    const[password,setPassword] = useState("")
    const[submit,setSubmit]=useState([{name: "tamil", id:1}])

    const login = ()=>{
        console.log(`${name},${password}`)
        setSubmit([...submit,{name: name , id: submit.length+1}])
        setName("")

    }
    const remove = (id)=>{
        let newlist = submit.filter((data)=> data.id!==id).map((data,index)=> { return {...data, id:index+1}});
        setSubmit(newlist)
        console.log(submit);
        
    }

  return (
    <div>
        <h1>Login Page</h1>
        <label htmlFor="">Name</label>
        <input type="text" 
        value={name}
        onChange={(e)=>setName(e.target.value)}
        /><br/><br/>
        <label htmlFor="">Password</label>
        <input type="password" 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        /><br/><br/>
        <button onClick={login}>Login</button>
        <ol>
            {submit.map((data)=>(
                <li key={data.id}> {data.name} <button onClick={()=>remove(data.id)}>delete</button></li>
            ))}
        </ol>
    </div>
  )
}

export default Login