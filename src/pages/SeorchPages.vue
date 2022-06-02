<template>
  <div>
    <transition name="fade">
      <post-list 
      :posts="posts"
      :post="post"
      @add="addPost"
      />
    </transition>
    <div ref="observer" class="observer" ></div>

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
import PostList from "@/components/PostList";
import axios from 'axios'
import MyButton from '@/components/UI/MyButton.vue';
import MyBurger from '@/components/UI/MyBurger.vue';
import api from "@/components/api.js";

export default{
  components: {
    PostList, PostForm,
    MyButton,
    MyBurger,
  },
  data () {
    return {
      posts: [],
      page: 1,
      limit: 10,
      totalPages: 0,
      myWidth: 0,
    }

  },
  methods: {
    createPost(post) {
      this.posts.push(post);
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    async addPost(post) {
      try{
        const responce = await axios.post("http://localhost:8081/api/posts", post);
        if(post.id == responce.data.id){
          console.log('true')
        }
      }catch(e){
        alert(e)
      }
    },
    async fetchPosts() {
      try{
        console.log('reel');
        const p = this.$route.params.parametr;
        const responce = await api().get('postseorch/' +  p);
        this.posts = responce.data;
        console.log(responce.data);
        if (responce.data.length == 0) {
          alert('Отсутсвуют запросы по данному запросу!')
        }
      }catch(e){
        alert(e)
      }
    },
    async loadMorePosts() {
      try{
        console.log('arbeit');
        this.page +=this.totalPages;
        const newPosts = this.posts.splice(0, this.page);
        // this.posts = [...this.posts, ...newPosts];
        this.posts = newPosts;
      }catch(e){
        alert('ErrorMessage')
      }
    },
    scrollToTop() {
      window.scrollTo(0,0);
    },
    async changeCategory(newCategory) {
      this.myCategory = newCategory;
      console.log(newCategory);
    },
  },
  mounted(){
    this.fetchPosts()
  },
  watch: {
    $route() {
      this.fetchPosts()
    },
  }
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
