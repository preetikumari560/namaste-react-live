import { useContext } from "react"
import userContext from "../utils/userContext"



const Profile=()=>{

const {setUserName,name}=useContext(userContext)

return<div><h1>It's a user profile</h1>


<div>
<label>provide context name:</label>
<input className="border border-black"  vaule={name} onChange={(e)=>{setUserName(e.target.value)}}></input>

</div>
</div>


}



export default Profile