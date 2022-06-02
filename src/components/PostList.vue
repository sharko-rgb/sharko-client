<template>
    <div v-if="posts.length > 0" style="max-width: 1000px; margin-left: auto; margin-right: auto;;">
        <transition-group name="posty-list" >
            <div 
            class="post" 
            v-for="(post, index) in posts" 
            :key="post.id"
            :index="index"
            >
                <div class="wrapper exmp3">
                    <img :src="post.urlToImage" alt="Картинка">
                </div>
                <div style="margin-right: auto;" >
                    <div style="margin-bottom: 10px" ><strong> {{ post.title }}</strong></div>
                </div>
                <div class="post__btns" style="max-width: 30px; margin-left: auto;">
                    <my-button class="btnw"
                    >
                        <a :href="post.url" target="_blank" style="text-decoration: none;color: rgb(255, 255, 255);">
                            <i class="gg-browse"></i>
                        </a>
                    </my-button>
                    <my-button style="padding: 5px 5px"
                    v-if="logInt"
                    @click="$emit('add', post), one($event)"
                    >
                        <i class="gg-add-r"></i>
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
        },
        logInt: {
            type: Boolean,
            required: true,
        }
    },
    methods: {
        one (event) {
            event.target.style.background = 'green'
        },
    }
}
</script>

<style>
.post {
  padding: 7px;
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
    background-color: #292827;
    border-radius: 10px;
}
.exmp3 img {
    width: 100%;
    height: 100%;
    min-width: auto;
    object-fit: cover;
    border-radius: 10px;
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

.gg-add-r {
   box-sizing: border-box;
   position: relative;
   display: block;
   width: 22px;
   height: 22px;
   border: 2px solid;
   transform: scale(var(--ggs,1));
   border-radius: 4px
}
.gg-add-r::after,
.gg-add-r::before {
   content: "";
   display: block;
   box-sizing: border-box;
   position: absolute;
   width: 10px;
   height: 2px;
   background: currentColor;
   border-radius: 5px;
   top: 8px;
   left: 4px
}
.gg-add-r::after {
   width: 2px;
   height: 10px;
   top: 4px;
   left: 8px
}
</style>