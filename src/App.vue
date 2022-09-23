<template>
  <TransitionGroup appear @enter="onEnter" tag="div" class="tr_div">
    <div key="1" class="deco1"></div>
    <div key="2" class="deco2"></div>
    <div key="3" class="deco3"></div>
    <div key="4" class="deco4"></div>
    <div key="5" class="deco5"></div>
  </TransitionGroup>
  <header>
    <button @click="switchLANG">{{ currentLANG }}</button>
    <Profile />
    <div class="wrapper">
      <HelloWorld />
    </div>
  </header>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import { useStore } from "vuex";
import { computed } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import Profile from "./components/Profile.vue";
import { gsap } from "gsap";

export default {
  components: {
    HelloWorld,
    RouterLink,
    RouterView,
    Profile,
  },
  setup() {
    const store = useStore();
    store.dispatch("setLANG", "en");
    const currentLANG = computed(() => store.getters["getCurrentLANG"]);
    const switchLANG = () => {
      if (currentLANG.value === "en") {
        store.dispatch("setLANG", "fr");
      } else {
        store.dispatch("setLANG", "en");
      }
    };
    function onEnter(el, done) {
      gsap.to(".deco1", {
        duration: 1,
        height: "100%",
        onComplete: () => {
          gsap.to(".deco1", {
            duration: 1,
            width: 200,
            onComplete: done,
          });
        },
      });
      gsap.to(".deco2", {
        duration: 1,
        height: 0,
        onComplete: done,
      });
      gsap.to(".deco3", {
        duration: 1,
        height: "75%",
        delay: 1.5,
        onComplete: done,
      });
      gsap.to(".deco4", {
        duration: 1,
        bottom: 0,
        delay: 1.5,
        height:"22rem",
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
    }
    return {
      currentLANG,
      onEnter,
      switchLANG,
    };
  },
};
</script>
  
<style scoped>
.deco5 {
  background-color: orange;
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100%;
  z-index: 0;
}

header {
  line-height: 1.5;
  max-height: 100vh;
  z-index: 99;
}

button {
  position: fixed;
  top: 2%;
  right: 2%;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  color: var(--color-heading);
  background-color: transparent;
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
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
    border-radius: 50%;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

}
</style>
