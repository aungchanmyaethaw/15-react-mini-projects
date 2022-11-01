import phoneImg from "./assets/phone.svg";
import { useStripeContext } from "./contexts";
const Hero = () => {
  const { closeSubMenu } = useStripeContext();

  return (
    <section className="hero" onMouseOver={closeSubMenu}>
      <div className="hero-center">
        <div className="hero-info">
          <h1>
            Payments infrastructure <br />
            for the internet
          </h1>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button className="btn">Start Now</button>
        </div>
        <div className="hero-images">
          <img src={phoneImg} alt="hero-img" className="phone-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
