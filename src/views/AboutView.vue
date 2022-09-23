
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
      <ListDropDownTransitionVue
        ><li v-for="(el, index) of text.about.p" :key="index">
          {{ el }}
        </li>
      </ListDropDownTransitionVue>
    </template>
  </WelcomeItem>
</template>
<script>
import WelcomeItem from "../components/WelcomeItem.vue";
import DocumentationIcon from "../components/icons/IconDocumentation.vue";
import SlideLeftTransition from "../components/transitions/SlideLeftTransition.vue";
import ListDropDownTransitionVue from "../components/transitions/ListDropDownTransition.vue";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  components: {
    WelcomeItem,
    DocumentationIcon,
    SlideLeftTransition,
    ListDropDownTransitionVue,
  },
  setup() {
    const store = useStore();
    const text = computed(() => store.getters["getText"]);
    return {
      text,
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
  padding-left: 1.5rem;
  margin-bottom: 0;
  font-size: 0.7rem;
  color: var(--color-text);
}
@media(min-width:1024px){
  li{
    font-size: 0.8rem;
  }
}
</style>
