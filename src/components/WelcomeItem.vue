<template>
  <div class="item">
    <Transition
    appear
    @enter="onEnter">
    <i>
      <slot name="icon"></slot>
    </i>
    </Transition>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <div class="content">
            <slot name="body"></slot>
      </div>
    </div>
  </div>
</template>
<script>
import {gsap} from 'gsap';
export default ({
  setup() {
    function onEnter(){
      gsap.from('i',{
        x:10,
      })
      gsap.to(
        'i',{
          duration:1.2,
          opacity:1,
          backgroundColor:"orange",
          color:"white",
          x:0,
          delay:0.9,
          ease:"elastic.out(1, 0.3)"
      })
      gsap.to('.item',{
        borderLeft: "1px solid var(--color-border)",
        duration:1,
        delay:0.9,
      })
    }
    return{
      onEnter,
    }
  },
})
</script>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  left: -17px;
  width: 32px;
  height: 32px;
  opacity:0;
  border-radius: 8px;
  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: " ";
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: " ";
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
