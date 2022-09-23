<template>
  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading><SlideLeftTransition><h3>{{text.workTitle}}</h3></SlideLeftTransition></template>
    <template #body>
      <div v-for="(work,index) in text.work" :key="index">
        <SlideRightTransition><h4><span>{{work.title.t}}</span><span>{{work.title.d}}</span></h4></SlideRightTransition>
        <ListDropDownTransition>
          <div v-show='!IsTransitioning'>
            <li v-for="(line,index) in work.paragraph" :key="index">
              <a v-if='line.c'  style="color:hsla(160, 100%, 37%, 1)" @click="openModal(line.c)">{{line.t}}</a>
              <div v-else>{{line.t}}</div>
            </li>
          </div>
          </ListDropDownTransition>
      </div>
    </template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ProjectIcon/>
    </template>
    <template #heading><SlideLeftTransition><h3>{{text.projectTitle}}</h3></SlideLeftTransition></template>
    <template #body>
      <div v-for="(project,index) in text.projects" :key="index">
        <SlideRightTransition><h4><span>{{project.title.t}}</span><span>{{project.title.d}}</span></h4></SlideRightTransition>
        <ListDropDownTransition>
          <div v-show='!IsTransitioning'>
            <li v-for="(line,index) in project.paragraph" :key="index">
              <a v-if='line.c' style="color:hsla(160, 100%, 37%, 1)" @click="openModal(line.c)" >{{line.t}}</a>
              <div v-else>{{line.t}}</div>
            </li>
          </div>
        </ListDropDownTransition>
      </div>
    </template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading><SlideLeftTransition><h3>{{text.educationTitle}}</h3></SlideLeftTransition></template>
    <template #body>
      <div v-for="(education,index) in text.education" :key="index">
        <SlideRightTransition>
        <h4><span>
          {{education.title.t}}
        </span>
        <span>{{education.title.d}}</span></h4>
        </SlideRightTransition>
        <ListDropDownTransition>
          <div v-show='!IsTransitioning'>
            <li v-for="(cert,index) in education.paragraph" :key="index">
              <a v-if="cert.r" :href="cert.r">{{cert.t}}</a>
              <div v-else>{{cert.t}}</div>
            </li>
          </div>
        </ListDropDownTransition>
      </div>
      <SlideRightTransition>
        <div class="logos" style="justify-content:center">
          <VueIcon />
        </div>
      </SlideRightTransition>
    </template>
  </WelcomeItem>
  <ShowContent v-show="showContentModal" @close="showContentModal=false"></ShowContent>
</template>

<script>
  import WelcomeItem from "./WelcomeItem.vue";
  import DocumentationIcon from "./icons/IconDocumentation.vue";
  import ToolingIcon from "./icons/IconTooling.vue";
  import EcosystemIcon from "./icons/IconEcosystem.vue";
  import CommunityIcon from "./icons/IconCommunity.vue";
  import SupportIcon from "./icons/IconSupport.vue";
  import ProjectIcon from "./icons/IconProject.vue";
  import VueIcon from "./icons/IconVue.vue";
  import ListDropDownTransition from "./transitions/ListDropDownTransition.vue";
  import SlideLeftTransition from "./transitions/SlideLeftTransition.vue";
  import SlideRightTransition from "./transitions/SlideRightTransition.vue";
  import ShowContent from "./ShowContent.vue";
  import { ref,computed} from "vue";
  import { useStore } from 'vuex';

  export default{
    components: {
      WelcomeItem,
      DocumentationIcon,
      ToolingIcon,
      EcosystemIcon,
      CommunityIcon,
      SupportIcon,
      ProjectIcon,
      VueIcon,
      ListDropDownTransition,
      SlideLeftTransition,
      SlideRightTransition,
      ShowContent,

    },
    setup() {
      const store = useStore()
      const expanded = ref([])
      const showContentModal = ref(false)
      const text = computed( () => store.getters['getText']);
      const IsTransitioning = computed( () => store.getters['getIsTransitioning']);
      function openModal(line){
        store.commit('setViewContent',line)
        showContentModal.value = true
      }
      function expand(title){
        if(!expanded.value.includes(title)){
          expanded.value[0] = title
        }else
        {
          let idx = expanded.value.indexOf(title)
          expanded.value.splice(idx,1)
        }
      }
      function isExpanded(title){
        return expanded.value.includes(title)
      }
      return { 
        text,
        expand,
        isExpanded,
        IsTransitioning,
        showContentModal,
        openModal,
       }
    }
  }
</script>
<style scoped>
h3 {
  font-size: 1.0rem;
  margin-bottom: 0.5rem;
}
h4 {
  display:flex;
  flex-wrap:wrap;
  justify-content: space-between;
  border-bottom: 1px solid black;
  font-size: 0.8rem;
  font-style: italic;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}
h4 span{
  padding: 0 10px;
}

ul{
  list-style-type: none;
  padding-left: 0;
}
ul li{
  padding-left: 1.5rem;
  margin-bottom: 0;
  font-size: 0.7rem;
  color: var(--color-text);
}
.logos{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
}


@media(min-width: 1024px){
  h3 {
    font-size: 1.2rem;
  }
  h4 {
    font-size: 1.0rem;
    line-height: 0.1rem;
  }
  p {
    font-size: 0.9rem;
  }
  ul li{
    font-size: 0.8rem;
  }
}
</style>