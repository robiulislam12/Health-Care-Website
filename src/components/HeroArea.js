import { Button } from "react-bootstrap";
import HeroImg from '../assets/hero-img.png'


export default function HeroArea (){
    return (
        <div className="flex justify-between items-center  md:py-10">
           <div>
               <h1 className="text-5xl">Virtual healthcare for you</h1>
               <p>Doctor virtual healthcare provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
               <Button>Learn More</Button>
           </div>
           <div className="pl-6">
               <img src={HeroImg} alt="" />
           </div>
        </div>
    )
}