import Router from "./router/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "./constants/urls";




const App = () => {

 const [loterias, setLoterias] = useState ([])
 const getLoterias = () => 

    axios.get(`${BASE_URL}/loterias`)
    .then((res) => {
        setLoterias(res.data)
    })
    .catch ((error) => {
        console.log(error)
    })

    useEffect(() => {
        getLoterias()
    }, [])

 

    return (
    <div>
            
            <Router/>
        
        
    </div>
       
  

    )
    
}


export default App