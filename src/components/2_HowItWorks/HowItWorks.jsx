import './HowItWorks.css';
import GlassesAnimation from '../GlassesAnimation';


export function HowItWorks() {
  return (
    <>
      <section className="cclub-component-full thin-text-component">
        <div className="marquee-section">
          <div className="marquee-div">
            <p className="black marquee"><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span> <span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span>
            </p>
          </div>

          <div className="marquee-div-2">
            <p className="black marquee">
              <span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span>
            </p>
          </div>

        </div>
      </section>


      <section className="cclub-component steps-wrapper light-blue-background">
        <div className="max-1300">

          <div className="step-1">
            <div className="headline-wrap">
              <div className="number-wrapper">
                <h2 className="number">1</h2>
              </div>
              <h2>Sign up</h2>
              <p>All the rumors are true. <br/>It’s totally <b>FREE</b> & easy to join!</p>
              <a className="trackCTA cta" href="#" data-ctainfo="HP CLUXE CTA">OKAY I'M IN</a>
            </div>

            <img className="pencil-left" src="images/HEARTleft.png" alt="Pencil"/>

            <img className="pencil-right" src="images/HEARTright.png" alt="Pencil"/>
          </div>

          <div className="step-2">
            <div className="headline-wrap">
              <div className="number-wrapper">
                <h2 className="number">2</h2>
              </div>
              <h2>Earn on <br/>every purchase</h2>
              <p>Get a <b>💸$5 REWARD💸</b> <br className="mobile-only"/>every time you <br className="desktop-only"/>shop twice, <br className="mobile-only"/>plus so much more!</p>

              <GlassesAnimation/>

            </div>
          </div>


          <div className="step-3">
            <div className="headline-wrap">
              <div className="number-wrapper">
                <h2 className="number">3</h2>
              </div>
              <h2>Enjoy the perks</h2>
              <p>Use your Rewards <br className="mobile-only"/>for major <br className="desktop-only"/>discounts on all <br className="mobile-only"/>the things you love.</p>
              <a className="trackCTA cta" href="#" data-ctainfo="HP CLUXE CTA">JOIN NOW</a>

              <picture>
                <source media="(min-width:768px)" srcSet="images/perks-animation.gif"/>
                <img className="step-3-img" src="images/perks-animation-mob.gif" alt="Exclusive Deals - Free Shipping - Birthday Treats"/>
              </picture>
            </div>
          </div>

        </div>

        <div className="post-step">

          <div className="repeat-wrapper">
            <div id="trigger1"></div>
            <div id="trigger2"></div>
            <div id="trigger3"></div>

            <p id="animate1" className="line-1"><span>JOIN.GET REWARDS.REPEAT.JOIN.GET REWARDS.REPEAT.</span><span>JOIN.GET REWARDS.REPEAT.JOIN.GET REWARDS.REPEAT.</span><span>JOIN.GET REWARDS.REPEAT.JOIN.GET REWARDS.REPEAT.</span><span>JOIN.GET REWARDS.REPEAT.JOIN.GET REWARDS.REPEAT.</span></p>

            <p id="animate2" className="line-2"><span>JOIN.GET REWARDS.REPEAT.JOIN.GET REWARDS.REPEAT.</span><span>JOIN.GET REWARDS.REPEAT.JOIN.GET REWARDS.REPEAT.</span><span>JOIN.GET REWARDS.REPEAT.JOIN.GET REWARDS.REPEAT.</span><span>JOIN.GET REWARDS.REPEAT.JOIN.GET REWARDS.REPEAT.</span></p>

            <p id="animate3" className="line-3"><span>JOIN.GET REWARDS.REPEAT.JOIN.GET REWARDS.REPEAT.</span><span>JOIN.GET REWARDS.REPEAT.JOIN.GET REWARDS.REPEAT.</span><span>JOIN.GET REWARDS.REPEAT.JOIN.GET REWARDS.REPEAT.</span><span>JOIN.GET REWARDS.REPEAT.JOIN.GET REWARDS.REPEAT.</span><span>JOIN.GET REWARDS.REPEAT.JOIN.GET REWARDS.REPEAT.</span></p>
          </div>

          <div className="cta-wrapper">
            <a className="trackCTA cta" href="#" data-ctainfo="HP CLUXE CTA">JOIN NOW</a>
          </div>
        </div>

      </section>
    </>
  )
}