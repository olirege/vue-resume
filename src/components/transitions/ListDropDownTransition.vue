<template>
  <TransitionGroup
    tag="ul"
    name="list-drop-down"
    mode="in-out"
    appear
    @before-enter="beforeEnter"
    @enter="enter"
  >
    <slot></slot>
  </TransitionGroup>
</template>
<script>
import { gsap } from "gsap";
export default {
  setup() {
    function beforeEnter(el) {
        el.style.opacity = 0;
        el.style.transform = "translateY(-200%)";
    }
    function enter(el,done) {
        gsap.to(el, {
          duration: 1,
          opacity: 1,
          y: 0,
          onComplete: done,
        });
    }

    return {
      beforeEnter,
      enter,
    };
  },
};
</script>
<style scoped>
  .ul{
    height:0;
  }
</style>