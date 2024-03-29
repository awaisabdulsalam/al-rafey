import sports1 from "../assets/sports1.png";
import sports2 from "../assets/sports2.png";
import blueRectangle from "../assets/blueRectangle.png"

const SportsProduct = () => {
  return (
    <section className="bg-[#f5f5f5] py-10">
        <div className="flex justify-around">
        <img src={sports1} alt="" srcSet="" />
            <img src={sports2} className="bg-no-repeat bg-bottom" style={{ backgroundImage: `url(${blueRectangle})` }} alt="" srcSet="" />
            <img src={sports1} alt="" srcSet="" />
            <img src={sports2} className="bg-no-repeat bg-bottom" style={{ backgroundImage: `url(${blueRectangle})`}} alt="" srcSet="" />
            <img src={sports1} alt="" srcSet="" />
        </div>
    </section>
  )
}

export default SportsProduct