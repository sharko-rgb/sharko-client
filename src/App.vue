<template>
  <div class="app" >
    <nav class="fixed-nav-bar">
      <my-burger>
        <menu-element
        @click="$router.push('/')"
        class="menu__item"
        >
          Главная
        </menu-element>
        <menu-element
        @click="outAcc"
        class="menu__item"
        v-if="logInt"
        >
          Выйти
        </menu-element>
        <menu-element
        @click="showDialog"
        class="menu__item"
        v-else
        >
          Войти / Регистрация
        </menu-element>
        <menu-element
        @click="$router.push('/postsave')"
        v-if="logInt"
        class="menu__item"
        >
          Избраннное
        </menu-element>
        <menu-element
        @click="$router.push('/panelpage')"
        v-if="adminRoot"
        class="menu__item"
        >
          Панель
        </menu-element>
        <menu-element
        @click="$router.push(`/posts/${'business'}`)"
        class="menu__item"
        >
          Бизнес
        </menu-element>
        <menu-element
        @click="$router.push(`/posts/${'entertainment'}`)"
        class="menu__item"
        >
          Развлечения
        </menu-element>
        <menu-element
        @click="$router.push(`/posts/${'science'}`)"
        class="menu__item"
        >
          Наука
        </menu-element>
        <menu-element
        @click="$router.push(`/posts/${'health'}`)"
        class="menu__item"
        >
          Медицина
        </menu-element>
        <menu-element
        @click="$router.push(`/posts/${'sports'}`)"
        class="menu__item"
        >
          Спорт
        </menu-element>
        <menu-element
        @click="$router.push(`/posts/${'technology'}`)"
        class="menu__item"
        >
          Технологии
        </menu-element>
        <menu-element
        class="menu__item"
        >
          <a href="https://disk.yandex.ru/i/T3AUMoG-R-5oLg" target="_blank" style="text-decoration: none;color: rgb(255, 255, 255);">
            О сервисе
          </a>
        </menu-element>
      </my-burger>
    <menu-element
    @click="$router.push(`/seorch/${String(seorchParametr)}`)"
    style="float: right;"
    >
      <i class="gg-search"></i>
    </menu-element>
    <my-input
    v-model="seorchParametr"
    placeholder="  Поиск..."
    style="width: 270px; margin: 2px;height: 40px; border-radius: 10px; border: none; float: right;"
    >
    </my-input>
    </nav>
    <div style="margin-top: 52px" ></div>
    <my-dialog v-model:show="dialogShow">
      <post-form
      @oldPer="inAccount"
      @newPer="newAccount"
      />
    </my-dialog>
    <router-view
    :nowUS="nowUS"
    :logInt="logInt"
    :myCategory="myCategory"
    ></router-view>
    <!-- <my-footer></my-footer> -->
  </div>
</template>

<script>
import axios from 'axios';
import api from "@/components/api.js";
import PostForm from './components/PostForm.vue'
export default {
  components: { PostForm },
  data () {
    return{
      dialogShow: false,
      logInt: false,
      adminRoot: false,
      nowUS: '',
    }
  },
  methods: {
    showDialog() {
      this.dialogShow = true;
    },
    async inAccount(person){
      try{
        const responce = await api().get(`postsave/pers/${person.login}`);
        console.log(responce)
        let user = responce.data[0];
        if (user.pass == person.pass){
          if(user.root == 'ADMIN'){
            this.adminRoot = true;
          }
          this.logInt = true;
          this.nowUS = person.login;
          localStorage.setItem('personLogin', person.login);
          localStorage.setItem('personPass', person.pass);
          alert('Вы успешно вошли!')
        }else{
          alert('Неверный пароль')
        }
      }catch(e){
        alert(e)
      }
    },
    async newAccount(person){
      try{
        person.type = 'pers';
        person.root = 'USER';
        const responce = await axios.post("http://localhost:8081/api/posts", person);
        if((responce.data[0]).login == person.login){
          this.logInt = true;
          this.nowUS = person.login;
          alert('УСПЕШНО')
        }else{
          alert('некорректные данные')
        }
      }catch(e){
        alert(e)
      }
    },

    async outAcc(){
      try {
        this.logInt = false;
        this.nowUS = '';
        localStorage.removeItem('personLogin');
        localStorage.removeItem('personPass');
      } catch (e) {
        alert(e)
      }
    },
    async autorizator(){
      try {
        let log = localStorage.getItem('personLogin');
        let pwrd = localStorage.getItem('personPass');
        let person = {login: log, pass: pwrd};
        if (log != null) {
          this.inAccount(person)
        }
      } catch (e) {
        console.log(e)
      }
    }

  },
  mounted(){
    this.autorizator();
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}

.app{
  padding: 20px;
  
}

.gg-search {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs,1));
    width: 16px;
    height: 16px;
    border: 2px solid;
    border-radius: 100%;
    margin-left: -4px;
    margin-top: -4px
}
.gg-search::after {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    border-radius: 3px;
    width: 2px;
    height: 8px;
    background: currentColor;
    transform: rotate(-45deg);
    top: 10px;
    left: 12px
}
</style>