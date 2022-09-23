<template>
  <TransitionGroup appear @enter="onEnter" tag="div" class="tr_div">
    <div key="1" class="deco1"></div>
    <div key="2" class="deco2"></div>
    <div key="3" class="deco3"></div>
    <div key="4" class="deco4"></div>
    <div key="5" class="deco5"></div>
  </TransitionGroup>
</template>
<script>
import { gsap } from "gsap";

export default {
  setup() {
    function onEnter(el, done) {
      let mm = gsap.matchMedia();
      mm.add({
        isMonitor: "(min-height: 800px)",
        isLaptop: "(max-height: 799px)",
        }, (context) => {
        let { isMonitor, isLaptop } = context.conditions;

        let duration = context.isReverted ? 0 : 1
        gsap.to(".deco1", {
          duration: 1,
          height: "100%",
          onComplete: () => {
            gsap.to(".deco1", {
              duration: duration,
              width: isLaptop ? 100: 200,
              onComplete: done,
            });
          },
        });
        gsap.to(".deco2", {
          duration: duration,
          height: 0,
          onComplete: done,
        });
        gsap.to(".deco3", {
          duration: duration,
          height: "75%",
          delay: 1.5,
          onComplete: done,
        });
        gsap.to(".deco4", {
          duration: duration,
          delay: 1.5,
          height: isMonitor ? 380 : 230,
          onComplete: done,
        });
        gsap.to(".deco5", {
          duration: 0.4,
          right: 0,
          delay: 0.1,
          onComplete: () => {
            gsap.to(".deco5", {
              duration: 1.3,
              x: "-100%",
            });
          },
        });
      });
    }
    return {
      onEnter,
    };
  },
};
</script>
<style scoped>
.deco4 {
  position: fixed;
}
.deco5 {
  background-color: orange;
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100%;
  z-index: 0;
}
@media (min-width: 1024px) {
  .tr_div {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .deco1 {
    background-color: yellow;
    position: fixed;
    top: 0;
    left: 0;
    width: 10rem;
    height: 0;
    z-index: 2;
  }
  .deco2 {
    background-color: yellow;
    position: fixed;
    top: 0;
    left: 10rem;
    width: 10rem;
    height: 100%;
    z-index: 2;
  }
  .deco3 {
    background-color: orange;
    position: fixed;
    top: 0;
    left: 20rem;
    width: 10rem;
    height: 0;
    z-index: 2;
  }
  .deco4 {
    background-color: yellow;
    position: fixed;
    bottom: 0;
    left: 25rem;
    width: 10rem;
    height: 0;
    z-index: 2;
  }
  .deco5 {
    background-color: orange;
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
}
</style>