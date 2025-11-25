import './offers.css';
import logo1 from "../assets/oflog1.png";
import logo2 from "../assets/oflog2.png";
import logo3 from "../assets/oflog3.png";
import logo4 from "../assets/oflog4.png";
import index50 from "../assets/index50.webp";

function Offers() {
  return (
    <div className="DivA">
      <div className="DivB1">
        <div className="DivB1a">
            <h6>WHY CHOOSE US </h6> 
        </div>
        <div className="DivB1b">
            <div className="DivB1b1">
                <img src={logo1} alt="logo1" />
                <div className="DivB1b1txt">
                     <h6>VERIFIED USED CARS</h6>
                    <p>All cars are inspected for reliability and performance.</p>
                </div>
            </div>
            <div className="DivB1b2">
                <img src={logo2} alt="logo2" />
                <div className="DivB1b2txt">
                    <h6>Fast Global Shipping</h6>
                    <p>Quick delivery to Africa, Middle East, and Asia through trusted logistics partners</p>
                </div>
            </div>
            <div className="DivB1b3">
                <img src={logo3} alt="logo3" />
                <div className="DivB1b3txt">
                    <h6>Competitive Pricing</h6>
                    <p>We provide direct-from-source pricing and volume-based discounts to help you stay competitive in your market</p>
                </div>
            </div>
            <div className="DivB1b4">
                <img src={logo4} alt="logo4" />
                <div className="DivB1b4txt">
                    <h6>FULL EXPORT SERVICES</h6>
                    <p>We handle inspection, documentation, and international shipping-all in on plcace.</p>
                </div>
            </div>
        </div>
        <a className="vm" href='#gallery'>VIEW MORE</a>
      </div>
      <div className="DivB2">
        <div className="Divb2child">
            OUR ADVANTAGES
            <img src={index50} alt='index50'></img>
        </div>
      </div>
    </div>
  );
}

export default Offers;
