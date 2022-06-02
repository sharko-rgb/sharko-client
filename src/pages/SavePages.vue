<template>
  <div>
    <transition name="fade">
      <save-post 
      :posts="posts"
      :post="post"
      @remove="removePost"
      />
    </transition>

    <my-button 
    class="add_palitra" 
    @click="scrollToTop"
    style="border-color: red;
    background: white;
    color: red;"
    >
      <strong>
        <i class="gg-arrow-top-left"></i>
      </strong>
    </my-button>
  </div>

</template>

<script>
import PostForm from "@/components/PostForm";
import SavePost from "@/components/SavePost";
import axios from 'axios'
import MyButton from '@/components/UI/MyButton.vue';
import MyBurger from '@/components/UI/MyBurger.vue';
import api from "@/components/api.js";

export default{
  props: {
    nowUS:{
      type: String,
      required: true,
    }
  },
  components: {
    PostForm,
    MyButton,
    MyBurger,
    SavePost
  },
  data () {
    return {
      posts: [],
    }

  },
  methods: {
    async removePost(post) {
      console.log(post)
      // this.posts = this.posts.filter(p => p._id !== post._id)
      try{
        const responce = await axios.delete(`http://localhost:8081/api/posts/${post._id}`);
        console.log(responce.data)
        this.fetchPosts()
      }catch(e){
        alert(e)
      }
    },
    async fetchPosts() {
      try{
        const responce = await api().get(`postsave/post/${this.nowUS}`);
        this.posts = responce.data;
      }catch(e){
        alert(e)
      }
    },
    scrollToTop() {
      window.scrollTo(0,0);
    },
  },
  mounted(){
    this.fetchPosts()
  },
}
</script>

<style>

.fade-enter-active, .fade-leave-active {
  transition: opacity .9s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.fixed-nav-bar {   
  position: fixed;   
  top: 0;   
  left: 0;   
  z-index: 9999;   
  width: 100%;   
  height: 45px;
  padding-left: 5px;
  padding-right: 5px;
  background-color: #000000; }

.observer{
  height: 30px;
}

.add_palitra {
display: block;
position: fixed;
right: 0;
bottom: 0;
margin: 10px;
z-index: 99999;
}

.gg-arrow-top-left {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 10px;
    height: 10px;
    transform: scale(var(--ggs,1));
    border-top: 2px solid;
    border-left: 2px solid
}
.gg-arrow-top-left::after {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 16px;
    height: 2px;
    background: currentColor;
    transform: rotate(45deg);
    top: 3px;
    left: -3px
}

</style>
