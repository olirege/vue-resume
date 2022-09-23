<template>
  <BackgroundTransition />
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
import BackgroundAnimation from "./components/transitions/BackgroundTransition.vue";
import Profile from "./components/Profile.vue";
import BackgroundTransition from "./components/transitions/BackgroundTransition.vue";

export default {
  components: {
    HelloWorld,
    RouterLink,
    RouterView,
    Profile,
    BackgroundAnimation,
    BackgroundTransition
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
    return {
      currentLANG,
      switchLANG,
    };
  },
};
</script>
  
<style scoped>

header {
  line-height: 1.5;
  max-height: 100vh;
  z-index: 99;
}

button {
  position: fixed;
  top: 5%;
  right: 5%;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  color: var(--color-heading);
  background-color: transparent;
}
@media (min-width: 1024px) {
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
  button {
    position: fixed;
    top: 2%;
    right: 2%;
  }

}
</style>
