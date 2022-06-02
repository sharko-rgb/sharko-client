<template>
  <div>
    <transition name="fade">
      <panel-pers 
      :pers="pers"
      @remove="removePost"
      />
    </transition>

    <my-button 
    class="add_palitra" 
    @click="scrollToTop"
    style="border-color: #29008a;
    background: white;
    color: #29008a;"
    >
      <strong>
        Наверх
      </strong>
    </my-button>
  </div>

</template>

<script>
import PostForm from "@/components/PostForm";
import PanelPers from "@/components/PanelPers";
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
    PanelPers
  },
  data () {
    return {
      pers: [],
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
        const responce = await api().get(`perssave/pers`);
        this.pers = responce.data;
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

</style>