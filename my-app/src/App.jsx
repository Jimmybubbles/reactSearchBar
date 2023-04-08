import "./app.css"
import { useEffect, useState } from "react"
import {Users} from "./users"
import Table from "./table"
import axios from 'axios';
// import the list of users - use map to list out the data.


// create use state for the input of the search box
// use state hook for the input box
// empty string to change state from.
function App(){

    const[query, setQuery] = useState("")
    const[data, setData] = useState([])

    //make useEffect hook for api
    useEffect(()=>{
        const fetchUsers = async () =>{
            const res = await axios.get(`http://localhost:5000?q=${query}`);
            setData(res.data)
        }
        // doesnt search until has 3 letters input in box
        if(query.length === 0 || query.length > 2) fetchUsers()
    },[query])

// // create keys of the object data to use with the .some method
//     const keys = ["first_name", "last_name", "email",]
    
// // create search function for the table data
//     const search = (data) => {
//         return data.filter(item=>

//         keys.some(key=>item[key].toLowerCase().includes(query))

//         // item.first_name.toLowerCase().includes(query) ||
//         // item.last_name.toLowerCase().includes(query) ||
//         // item.email.toLowerCase().includes(query)
        
//         )
//     }

    // convert list to lowercase then include the search parameter
    console.log(Users.filter(user=>user.first_name.toLowerCase().includes("fe")))
    return(
    <div className="app">
        
        <input 
            type="text" 
            placeholder="searchbox.." 
            className="search" 
            onChange={(e) => setQuery(e.target.value)} />
        
{/*        
        <ul className="list">

            {Users.filter((user) => 
                user.first_name.toLowerCase().includes(query)
            ).map((user)=> (
                <li key={user.id} className="listItems">{user.first_name}</li>
            ))}
            

        </ul> */}
    
    <Table data={data}/>

    </div>
    )
}

export default App;