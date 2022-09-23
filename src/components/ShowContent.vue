<template>
    <Transition
        appear
        @enter="onEnter"
        @leave="onLeave"
     >
    <div class='dialog'>
        <button class='btn' @click="$emit('close')">X</button>
        <div class="content" v-if="content">
            <video v-if="content.includes('.mp4')" controls muted loop>
             <source src="@/assets/annotater.mp4" type="video/mp4"/>
            </video>
            <img v-else-if ="content.includes('.jpg')" src="@/assets/aphids_2.jpg" />
        </div>
    </div>
    </Transition>
</template>
<script>
import { gsap } from 'gsap'
import {computed} from 'vue'
import { useStore } from 'vuex'
export default({
    setup() {
        const store = useStore()
        const content = computed( () => store.getters['getViewContent'])
        function onEnter(el,done){
            gsap.to(el,{
                duration:0.5,
                opacity:1,
                onComplete:done
            })
        }
        function onLeave(el,done){
            gsap.to(el,{
                duration:0.5,
                opacity:0,
                onComplete:done
            })
        }
        function getContent(){
            let pl = content.value
            return `@/assets/${pl}`
        }
        return{
            onEnter,
            onLeave,
            getContent,
            content
        }
    },
})
</script>

<style scoped>
.dialog{
    position: fixed;
    opacity:0;
    top: 25%;
    left:0;
    background-color: rgba(0,0,0,0.1);
    z-index: 99;
    padding:1%;
    border-radius:5px;
    
}
.content{
    display:flex;
    justify-content:center;
    align-items:center;
    background-color: white;
    width: 100%;
    height: 100%;
}
img{
    max-width: 100%;
    max-height: 100%;
}
video{
    max-width: 100%;
    max-height: 100%;
}
.btn{
        position: absolute;
        top: 1.25%;
        right: 1.25%;
        width: 25px;
        height: 25px;
        color: black;
        font-size: 1em;
        font-weight: bold;
        border: none;
        z-index:3;
    }
@media(min-width: 1024px){
    .dialog{
        position: absolute;
        
    }
    img{
        max-width: 600px;
        max-height: 600px;
    }
    video{
        max-width: 600px;
        max-height: 600px;
    }
}

</style>