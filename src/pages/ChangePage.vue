<template>
  <div>
    <transition name="fade">
      <post-list 
      :posts="posts"
      :post="post"
      :logInt="logInt"
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
import SavePost from "@/components/PostList";
import axios, { Axios } from 'axios'
import MyButton from '@/components/UI/MyButton.vue';
import MyBurger from '@/components/UI/MyBurger.vue';
import api from "@/components/api.js";

export default{
    props: {
    logInt:{
      type: Boolean,
      required: true,
    },
    nowUS:{
      type: String,
      required: true,
    }
  },
  components: {
    PostList, PostForm,
    MyButton,
    MyBurger,
    SavePost
  },
  data () {
    return {
      posts: [],
      page: 1,
      limit: 10,
      totalPages: 0,
      myWidth: 0,
      myCategory: '',
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
      post.type = 'post';
      post.login = this.nowUS;
      try{
        const responce = await axios.post("http://localhost:8081/api/posts", post);
        console.log(responce.data);
      }catch(e){
        alert(e)
      }
    },
    async fetchPosts() {
      try{
        this.posts.length = 0;
        const responce = await api().get('posts/' +  this.$route.params.category);
        this.myCategory = this.$route.params.category
        this.totalPages = Math.ceil(responce.data.length / this.limit)
        this.posts = responce.data;
      }catch(e){
        alert(e)
      }
    },
    async loadMorePosts() {
      try{
        this.page +=1;
        const responce = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        }
        );
        this.totalPages = Math.ceil(responce.headers['x-total-count'] / this.limit)
        this.posts = [...this.posts, ...responce.data];
      }catch(e){
        alert('ErrorMessage')
      }
    },
    scrollToTop() {
      window.scrollTo(0,0);
    },
    winWidth(){
       this.myWidth = window.innerWidth
    },
    async changeCategory(newCategory) {
      this.myCategory = newCategory;
      console.log(newCategory);
    },
  },
  mounted(){
    this.fetchPosts()
    console.log(this.$refs.observer);
    this.winWidth()
    let options = {
      // root: document.querySelector('#scrollArea'),
      rootMargin: '0px',
      threshold: 1.0
    }
    let callback = (entries, observer) => {
      if(entries[0].isIntersecting && this.page < this.totalPages ){
        this.loadMorePosts();
      }
    };
    let observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);
  },
  watch: {
    $route() {
      console.log('watch')
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
  background-color: #29008a; }

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
