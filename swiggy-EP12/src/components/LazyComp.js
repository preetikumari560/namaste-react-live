import { useContext } from "react"
import userContext from "../utils/userContext"

const LazyCompDummy=()=>{

const {name}=useContext(userContext)

return <div><h1>It's a dummy lazy component</h1>
<h2>{name}</h2>
</div>

}

export default LazyCompDummy