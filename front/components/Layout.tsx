import Footer from "./Footer";
import Navbar from "./Navbar";
import Topbar from "./Topbar";

const Layout = ({ children }:any) => {
    return ( 
        <div>
            <Topbar />
            <Navbar />
            { children }
            <Footer />
        </div>
     );
}
 
export default Layout;