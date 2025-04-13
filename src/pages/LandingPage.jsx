import Header from "../components/header/Header"
import { Card } from "primereact/card"
const LandingPage = () => {
    return (
        <>
        <Header/>
        <Card className="w-full h-screen">
            <div className="pt-0 flex flex-column md:w-6 justify-start align-items-start ml-auto text-justify">
                <h3 className="">Que somos</h3>
                <span className=""> lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum adipisci unde maxime dolor impedit ducimus incidunt. Quos enim, quod impedit natus inventore dolorum quibusdam, animi quis eos minima nihil quidem.</span>
            </div>
            <div className="pt-0 flex flex-column md:w-6 justify-center align-items-start text-justify">
                <h3 className="">Mision</h3>
                <span className=""> lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum adipisci unde maxime dolor impedit ducimus incidunt. Quos enim, quod impedit natus inventore dolorum quibusdam, animi quis eos minima nihil quidem.</span>
            </div>
            <div className="pt-0 flex flex-column md:w-6 justify-center align-items-start text-justify">
                <h3 className="">Vision</h3>
                <span className=""> lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum adipisci unde maxime dolor impedit ducimus incidunt. Quos enim, quod impedit natus inventore dolorum quibusdam, animi quis eos minima nihil quidem.</span>
            </div>


        </Card>

        </>
    )

} 
export default LandingPage