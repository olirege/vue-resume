<template>
  <Transition
    appear
    name="slide-left"
    @before-enter="beforeEnter"
    @enter="enter"
    @after="afterEnter"
  >
    <slot></slot>
  </Transition>
</template>
<script>
import { gsap } from "gsap";

export default {

  setup() {
    function beforeEnter(el) {
      el.style.transform = "translateX(-100%)";
      el.style.opacity = 0

    }
    function enter(el,done) {
      gsap.to(el, {
        duration: 1,
        opacity: 1,
        x: 0,
        onComplete: done,
      });
    }
    function afterEnter(){
      //
    }
    return {
      beforeEnter,
      enter,
      afterEnter
    };
  },
};
</script>