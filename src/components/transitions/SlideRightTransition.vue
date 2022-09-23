<template>
  <Transition
    appear
    name="slide-right"
    mode="out-in"
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
  >
    <slot></slot>
  </Transition>
</template>
<script>
import { gsap } from "gsap";
import { useStore } from "vuex";
export default {

  setup() {
    const store = useStore();
    function beforeEnter(el) {
      el.style.transform = "translateX(100%)";
      el.style.opacity = 0

    }
    function enter(el,done) {
      store.commit('setIsTransitioning',true)
      gsap.to(el, {
        duration: 1,
        opacity: 1,
        x: 0,
        delay:0.6,
        onComplete: done,
      });
    }
    function afterEnter(){
      store.commit('setIsTransitioning',false)
    }
    return {
      beforeEnter,
      enter,
      afterEnter
    };
  },
};
</script>