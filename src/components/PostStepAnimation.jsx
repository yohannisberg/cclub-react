import { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugin
gsap.registerPlugin(ScrollTrigger);

const PostStepAnimation = () => {
  const boxRef = useRef(null);

  const triggerRef1 = useRef();
  const triggerRef2 = useRef();
  const triggerRef3 = useRef();

  useEffect(() => {
    gsap.to(triggerRef1.current, {
      x: -100,
      scrollTrigger: {
        trigger: triggerRef1.current,
        start: "top 50%",
        end: "top 10%",
        scrub: true,
        markers: false
      },
    });

    gsap.to(triggerRef2.current, {
      x: -150,
      scrollTrigger: {
        trigger: triggerRef2.current,
        start: "top 40%",
        end: "top 10%",
        scrub: true,
        markers: false
      },
    });

    gsap.to(triggerRef3.current, {
      x: -300,
      scrollTrigger: {
        trigger: triggerRef2.current,
        start: "top 35%",
        end: "top 10%",
        scrub: true,
        markers: false
      },
    });
  }, []);

  return (
    <div className="repeat-wrapper">
      <p 
        ref={triggerRef1} 
        className="line-1"
        style={{
          transform: "translateX(-50px)"
        }}
      >
        <span>JOIN.GET REWARDS.REPEAT.JOIN.GET REWARDS.REPEAT.</span><span>JOIN.GET REWARDS.REPEAT.JOIN.GET REWARDS.REPEAT.</span><span>JOIN.GET REWARDS.REPEAT.JOIN.GET REWARDS.REPEAT.</span><span>JOIN.GET REWARDS.REPEAT.JOIN.GET REWARDS.REPEAT.</span>
      </p>

      <p 
        ref={triggerRef2} 
        className="line-2"
        style={{
          transform: "translateX(-175px)"
        }}
      >
        <span>JOIN.GET REWARDS.REPEAT.JOIN.GET REWARDS.REPEAT.</span><span>JOIN.GET REWARDS.REPEAT.JOIN.GET REWARDS.REPEAT.</span><span>JOIN.GET REWARDS.REPEAT.JOIN.GET REWARDS.REPEAT.</span><span>JOIN.GET REWARDS.REPEAT.JOIN.GET REWARDS.REPEAT.</span></p>

      <p 
        ref={triggerRef3} 
        className="line-3"
        style={{
          transform: "translateX(-265px)"
        }}
      >
        <span>JOIN.GET REWARDS.REPEAT.JOIN.GET REWARDS.REPEAT.</span><span>JOIN.GET REWARDS.REPEAT.JOIN.GET REWARDS.REPEAT.</span><span>JOIN.GET REWARDS.REPEAT.JOIN.GET REWARDS.REPEAT.</span><span>JOIN.GET REWARDS.REPEAT.JOIN.GET REWARDS.REPEAT.</span><span>JOIN.GET REWARDS.REPEAT.JOIN.GET REWARDS.REPEAT.</span></p>
    </div>
  );
};

export default PostStepAnimation;