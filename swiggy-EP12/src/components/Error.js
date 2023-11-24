
import { useRouteError } from "react-router-dom";

const Error =()=>{

const err = useRouteError()

console.log(err)
return (
<>
        <h1>OOPs! </h1>
        <h3>{err.status}</h3>
        <h4>{err.statusText}</h4>
</>
)

}

export default Error;