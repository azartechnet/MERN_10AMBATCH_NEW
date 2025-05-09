import ReactDOM from "react-dom/client";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";

export default function App()
{
    return(
        <BrowserRouter>
         <Routes>
            <Route path="/" element={<Layout/>}>
               <Route index element={<Home/>}/>
               <Route path="blogs" element={<Blogs/>}/>
               <Route path="contact" element={<Contact/>}/>
               <Route path="*" element={<NoPage/>}/>
            </Route>
         </Routes>
        </BrowserRouter>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)
