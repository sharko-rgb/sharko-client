<template>
  <div>
      <form @submit.prevent >
      <h4>
        Авторизация
      </h4>
      <my-input
      v-model="person.login"
      class="input" 
      placeholder="Логин"
      >
      </my-input>
      <my-input
      v-model="person.pass"
      class="input" 
      placeholder="Пароль"
      type="password"
      >
      </my-input>

      <my-button 
      class="btn" 
      style="align-self: flex-end"
      @click = "oldPersonal"
      >
        Войти
      </my-button>
      <my-button 
      class="btn" 
      style="align-self: flex-end"
      @click = "newPersonal"
      >
        Регистрация
      </my-button>
    </form>
  </div>
</template>

<script>
export default {
    data () {
        return {
            person: {
                login: '',
                pass: '',

            }
        }
    },
    methods: {
        createPost() {
            this.post.id = Date.now();
            this.$emit('create', this.post)
            this.post = {
                title: ''
            }
        },
        oldPersonal(){
          this.$emit('oldPer', this.person)
          this.person = {
            login: '',
            pass: '',
          }
        },
        newPersonal(){
          this.$emit('newPer', this.person)
          this.person = {
            login: '',
            pass: '',
          }
        },
    }
}
</script>

<style>

form{
  display: flex;
  flex-direction: column;

}
</style>