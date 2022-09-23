
<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading
      ><SlideLeftTransition
        ><h3>{{ text.about.t }}</h3></SlideLeftTransition
      ></template
    >
    <template #body>
      <TransitionGroup
        tag='ul'
        appear
        @enter="onEnter">
        <li v-for="(el, index) of text.about.p" :key="index">
          {{ el }}
        </li>
      </TransitionGroup>
      <SlideRightTransition>
        <img src="@/assets/node_detect.gif">
      </SlideRightTransition>
    </template>
  </WelcomeItem>
</template>
<script>
import WelcomeItem from "../components/WelcomeItem.vue";
import DocumentationIcon from "../components/icons/IconDocumentation.vue";
import SlideLeftTransition from "../components/transitions/SlideLeftTransition.vue";
import SlideRightTransition from "../components/transitions/SlideRightTransition.vue";
import { useStore } from "vuex";
import { computed } from "vue";
import { gsap } from 'gsap';

export default {
  components: {
    WelcomeItem,
    DocumentationIcon,
    SlideLeftTransition,
    SlideRightTransition,
  },
  setup() {
    const store = useStore();
    const text = computed(() => store.getters["getText"]);
    function onEnter(){
      gsap.to('li',{
        opacity: 1,
        duration: 0.5,
        delay:0.7,
      })
    }
    return {
      text,
      onEnter
    };
  },
};
</script>
<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
}
li {
  opacity: 0;
  padding-left: 1.5rem;
  margin-bottom: 0;
  font-size: 0.7rem;
  color: var(--color-text);
}
img{
  width: 100%;
  margin-top: 1rem;
  border-radius:5px;
}
@media(min-width:1024px){
  li{
    font-size: 0.8rem;
  }
}
</style>
