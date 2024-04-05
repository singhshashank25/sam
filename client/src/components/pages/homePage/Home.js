import NavBar from "./Navbar"
import  Carousel  from "./Carousel";
import Content from "./Content";
import Footer from "./Footer";

function Home(){
    return(
<div position="relative">
<NavBar/>
<Carousel/>
<Content></Content>
<Footer/>
</div>
    );
}

export default Home;