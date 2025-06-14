import './Hero.css';

export function Hero() {
  return (
    <section className="cclub-component hero-component dark-blue-background">
      <div className="max-1300">

        <img class="hero-top-img" src="images/hero-top-mb.png" alt="C.Club Animations" />

        <div className="text-wrapper">
          <h2 className="white">Welcome to <img src="images/CCLUBlogo.png" alt="C.Club"/></h2>
          <p className="white">C•CLUB is where you get <br className="mobile-only"/>rewarded just <br className="desktop-only"/>for being you. <br className="mobile-only"/>It’s true! Sign up for FREE <br className="mobile-only"/>to unlock <br className="desktop-only"/>exclusive Rewards <br className="mobile-only"/>and endless perks.</p>

          <a className="trackCTA cta" href="#" data-ctainfo="HP CLUXE CTA">Join Now</a>
          <a className="trackCTA cta-no-button" href="#" data-ctainfo="HP CLUXE CTA">SIGN IN</a>

        </div>
        
        <picture>
          <source media="(min-width:768px)" srcSet="images/welcome-animation.gif"/>
          <img className="hero-img" src="images/welcome-animation-mob.gif" alt="C.Club Animations"/>
        </picture>
      </div>
    </section>
  )
}