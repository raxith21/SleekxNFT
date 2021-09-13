import Createcomponent from "./components/Createcomponent";
import Footer from "./components/Footer";
import Header from "./components/Header";



function create() {
    
    return (
        <div>
            <Header/>

            <section className="sticky bg-gradient-to-r from-primary to-secondary  h-screen flex flex-col flex-grow pb-20">
            <h1 className="text-my-black-color text-3xl font-bold px-76 py-10">Create Collectible</h1>
           <Createcomponent/>
            </section>
           
            <Footer />
        </div>
    )
}

export default create
