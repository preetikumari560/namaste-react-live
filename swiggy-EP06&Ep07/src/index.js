/*
Header
 -logo
 -nav items
   - about us
   -contact us
   -extra

Body
  -SearchBar
  -ResturantCard
    - name
    -img
    -cuisines

Footer
  -copyright
  -links
*/

import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'

import Footer from './components/Footer'

import Body from '/src/components/Body'
import Error from './components/Error'
import AboutUs from './components/About'

import ContactUs from './components/Contact'
import ResturantMenu from './components/ResturantMenu'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import LoginPage from './components/Login'


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
<Outlet /> {/* this tag will be replaced by children component i.e, <Body/> or <AboutUs/> or <ContactUs/> acc. to the route/path */}
<Footer/>
</>
)
}

// const appRouter = createBrowserRouter([
// {
// path:"/",
// element:<App/>,
// errorElement:<Error/>
// },
// {
// path:"/about",
// element:<AboutUs/>,
// },
// {
// path:"/contact",
// element:<ContactUs/>,
// }
// ])

//Nested routing(defining children inside any route):
//children route: about,contact, body has become children of <App/> route/path
//pushing children in <App/> acc. to the route/path.
const appRouter= createBrowserRouter([
{
path:"/",
element:<App/>,

children:[
{
path:"/",
element:<Body/>
},
{
path:"/about",
element:<AboutUs/>

},
{
path:"/contact",
element:<ContactUs/>

},

{
// by using ':' we can define dynamic parameter in a url. here ':id' is a dynamic parameter , nd we can extract its value using 'useParams' hook
path:"/resturant/:id",
element:<ResturantMenu/>

},
{
path:"/login",
element:<LoginPage/>

}
],errorElement:<Error/>,

}])

const root= ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider  router={appRouter}/>)
