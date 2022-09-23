
<template>
  <div class="greetings">
    <Transition appear @before-enter="beforeEnter" @enter="onEnter">
      <h1>
        <div class="name">{{ msg }}</div>
      </h1>
    </Transition>
    <h4 class="detail">
      <h3>
        <span>{{ text.homeTitle }}</span>
      </h3>
      <span><BIconTelephoneFill /> {{ cell }}</span>
      <span><BIconEnvelopeFill /> {{ email }}</span>
      <span class="profiles"><BIconLinkedin /> <a :href='linkedin.url'>{{linkedin.name}}</a>
      <BIconGithub /> <a :href='github.url'>{{github.name}}</a> </span>
    </h4>
    <SlideLeftTransition>
      <span class="skills">
        <DjangoIcon />
        <DockerIcon />
        <PythonIcon />
        <JavascriptIcon />
        <PostgresqlIcon />
        <PytorchIcon />
      </span>
    </SlideLeftTransition>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
  </div>
</template>
<script>
import DjangoIcon from "./icons/IconDjango.vue";
import DockerIcon from "./icons/IconDocker.vue";
import PythonIcon from "./icons/IconPython.vue";
import JavascriptIcon from "./icons/IconJavascript.vue";
import PostgresqlIcon from "./icons/IconPostgresql.vue";
import PytorchIcon from "./icons/IconPytorch.vue";
import { computed } from "vue";
import { useStore } from "vuex";
import { gsap } from "gsap";
import { BIconTelephoneFill, BIconEnvelopeFill,BIconLinkedin,BIconGithub } from "bootstrap-icons-vue";
import SlideLeftTransition from "./transitions/SlideLeftTransition.vue";

export default {
  components: {
    DjangoIcon,
    DockerIcon,
    PythonIcon,
    JavascriptIcon,
    PostgresqlIcon,
    PytorchIcon,
    BIconTelephoneFill,
    BIconEnvelopeFill,
    BIconGithub,
    BIconLinkedin,
    SlideLeftTransition
  },

  setup() {
    const store = useStore();
    const text = computed(() => store.getters["getText"]);
    const msg = "Olivier R. Côté";
    const cell = "+1(438)-827-3126";
    const email = "oliver@olivercote.com";
    const linkedin = {name: "LinkedIn Profile", url: "https://www.linkedin.com/in/olivier-r%C3%A9gimbal-41021a231/"}
    const github = {name: "Github Profile", url: "https://github.com/olirege/vue-resume"}

    function beforeEnter() {}

    function onEnter(el, done) {
      gsap.to(".name", {
        color: "yellow",
        opacity: 1,
        height: 40,
        duration: 1.3,
        onComplete: done,
      });
    }
    return {
      text,
      beforeEnter,
      onEnter,
      msg,
      cell,
      email,
      linkedin,
      github,
    };
  },
};
</script>
  
<style scoped>
.detail {
  display: flex;
  flex-direction: column;
  color: var(--color-heading);
  row-gap:3px;
  top: -10px;
  opacity: 1;
}

.profiles ,
.skills {
  display: flex;
  flex-direction: row;
  text-align:left;
  justify-content: flex-start;
  align-items: center;
  gap:0.4rem;
  width: 100%;
}
h1 {
  font-size: 2.5rem;
  text-align: left;
  margin-bottom: 20px;
}

h3 {
  font-size: 1.1rem;
}
h4 {
  font-size: 1rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
@media (min-width: 1024px) {
  .name {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 0;
    opacity: 0;
    margin: 0;
    height: 0;
  }
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
  
  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
  .profiles{
    justify-content: space-between;
  }
}

</style>
