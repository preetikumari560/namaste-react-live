import React from 'react'
import ReactDOM from 'react-dom/client'

import Footer from './components/Footer'

import Body from '/src/components/Body'

//*Default Import :
import Header  from './components/Header'
//or import Header ,{Logo} from './components/Header'

//*Named Import :
// import { Logo } from './components/Header'
// import { Logo ,Header} from './components/Header'

//* to export/access all the everything :
// import * as obj from './components/Header'



const App =()=>{

return (

<>
<Header/>
<Body/>
<Footer/>
</>
)
}

const root= ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)
