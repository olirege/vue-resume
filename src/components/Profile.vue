<template>
  <div class="wrapper">
    <TransitionGroup
      tag="div"
      appear
      @before-enter="beforeEnter"
      @enter="onEnter"
    >
      <div class="image-container" key="image-container">
        <img
          alt="Vue logo"
          class="profile-logo"
          src="@/assets/profile_img.jpg"
        />
      </div>
      <div class="overlay" key="overlay">
        <div class="flip-logo"></div>
      </div>
    </TransitionGroup>
  </div>
</template>
<script>
import { gsap } from "gsap";
export default {
  setup() {
    function beforeEnter() {}
    function onEnter() {
      gsap.to(".image-container", {
        height: 125,
        duration: 1.3,
        delay: 0.4,
        onComplete: () => {
          gsap.to(".overlay", {
            height: 125,
            duration: 0.4,
            delay: 0.4,
            onComplete: () => {
              gsap.to(".overlay", {
                opacity: 0,
                duration: 0.4,
                onComplete: () => {
                  gsap.to(".overlay", {
                    duration: 0,
                    zIndex: -1,
                    opacity: 1,
                    onComplete: () => {
                      gsap.to(".overlay", {
                        left: -10,
                        duration: 0.4,
                      });
                    },
                  });
                },
              });
            },
          });
        },
      });
    }
    return {
      beforeEnter,
      onEnter,
    };
  },
};
</script>
<style scoped>
.wrapper {
  margin-right: 1rem;
}
.image-container {
  margin-left:30%;
  width: 100%;
  height: 0;
  overflow: hidden;
}
.profile-logo {
  display: block;
  opacity:1;
  width: 125px;
  border-radius: 50%;
}
.flip-logo {
    margin-left:30%;
    width: 125px;
    height: 125px;
    border-radius: 50%;
    background-color: yellow;
  }
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0;
  overflow: hidden;
}
@media (min-width: 1024px) {
  .image-container {
    margin-left: 0;
  }
  .flip-logo {
    margin-left: 0;
  }
  .profile-logo{
    margin: 0 auto 2rem;
  }
}
</style>
