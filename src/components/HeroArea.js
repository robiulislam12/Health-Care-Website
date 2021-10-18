import { Button } from "react-bootstrap";

export default function HeroArea({ Img }) {
  return (
    <div className="flex lg:justify-between lg:items-center lg:flex-row md:flex-col sm:flex-col md:py-10 hero-area lg:py-10">
      <div>
        <h1 className="lg:text-5xl md:text-4xl sm:text-3xl">
          Virtual healthcare for you
        </h1>
        <p>
          Doctor virtual healthcare provides progressive, and affordable
          healthcare, accessible on mobile and online for everyone
        </p>
        <Button className="lg:pt-3 md:pt-3 sm:pt-2">Learn More</Button>
      </div>
      <div className="pl-6">
        <img src={Img} alt="" />
      </div>
    </div>
  );
}
