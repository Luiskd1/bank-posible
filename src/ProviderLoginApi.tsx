import { useState } from "react"

export const ProviderLoginApi = () => {

    const [token, setToken] = useState(null)

    const Login = async(username: string, password: string) => {
        try{
            let response = await fetch("https://apibank.ikoodi.site/api/login")
                method:'POST',  
                headers:{  
                  'Content-Type':'application/json' ,   
                },    
                body:JSON.stringify({ account, password })    
            
            if(!response.ok){throw new Error('HTTP error! status: ${response.status}')}
            else return await response.text()
        }catch(error){console.log("Error on login: ", error)}
    }

    // Returns a function that can be used to logout of the system
                




  return (
    <div>ProviderLoginApi</div>
  )
}
