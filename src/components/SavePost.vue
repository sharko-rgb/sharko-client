<template>
    <div v-if="posts.length > 0" style="max-width: 1000px; margin-left: auto; margin-right: auto;;">
        <transition-group name="posty-list" >
            <div 
            class="post" 
            v-for="(post, index) in posts.slice().reverse()" 
            :key="post.id"
            :index="index"
            >
                <div class="wrapper exmp3" >
                    <img :src="post.urlToImage" alt="img is not defined">
                </div>
                <div style="margin-right: auto;">
                    <div style="margin-bottom: 10px" ><strong> {{ post.title }}</strong></div>
                </div>
                <div class="post__btns" style="max-width: 30px; margin-left: auto;">
                    <my-button  class="btnw"
                    >
                        <a :href="post.url" target="_blank" style="text-decoration: none;color: rgb(255, 255, 255);">
                            <i class="gg-browse"></i>
                        </a>
                    </my-button>
                    <my-button style="padding: 7px 11px"
                    @click="$emit('remove', post)"
                    >
                        <i class="gg-trash"></i>
                    </my-button>
                </div> 
            </div>
        </transition-group>
    </div>
    <div v-else >
        <my-load></my-load>
    </div>
</template>

<script>
export default {
    props: {
        posts: {
            type: Array,
            required: true
        },
        post: {
            type: Object,
            required: true,
        }
    },
}
</script>

<style>
.post {
  padding: 10px;
  /* border: 2px solid #b68c5a; */
  margin-top: 20px;
  color: #292827;
  align-items: top;
  background: white;
  border-radius: 10px;
  -webkit-box-shadow: -22px -22px 38px -25px rgba(43, 34, 80, 0.6);
  -moz-box-shadow: -22px -22px 38px -25px rgba(43, 34, 80, 0.6);
  box-shadow: -22px -22px 38px -25px rgba(43, 34, 80, 0.6);
}

.posty-list-item {
  display: inline-block;
  margin-right: 10px;
}
.posty-list-enter-active,
.posty-list-leave-active {
  transition: all 0.5s ease;
}
.posty-list-enter-from,
.posty-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.wrapper {
    max-width: 15%;
    max-height: 85px;
    margin-right: 7px;
}
.exmp3 img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}

.gg-trash {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs,1));
    width: 10px;
    height: 12px;
    border: 2px solid transparent;
    box-shadow:
        0 0 0 2px,
        inset -2px 0 0,
        inset 2px 0 0;
    border-bottom-left-radius: 1px;
    border-bottom-right-radius: 1px;
    margin-top: 4px
}
.gg-trash::after,
.gg-trash::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute
}
.gg-trash::after {
    background: currentColor;
    border-radius: 3px;
    width: 16px;
    height: 2px;
    top: -4px;
    left: -5px
}
.gg-trash::before {
    width: 10px;
    height: 4px;
    border: 2px solid;
    border-bottom: transparent;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    top: -7px;
    left: -2px
}


.gg-browse {
    display: block;
    position: relative;
    transform: scale(var(--ggs,1));
    box-sizing: border-box;
    width: 16px;
    height: 22px;
    border: 2px solid;
    border-radius: 3px;
    background:
        linear-gradient(
            to left,
            currentcolor 10px,
            transparent 0
        ) no-repeat center 2px/8px 2px,
        linear-gradient(
            to left,
            currentcolor 10px,
            transparent 0
        ) no-repeat center 6px/8px 2px
}
.gg-browse::after,
.gg-browse::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    border-radius: 22px
}
.gg-browse::before {
    width: 6px;
    height: 6px;
    border: 2px solid;
    left: 3px;
    top: 9px
}
.gg-browse::after {
    width: 2px;
    height: 4px;
    background: currentColor;
    bottom: 1px;
    right: 2px;
    transform: rotate(-45deg)
}
</style>