<template>
    <div v-if="pers.length > 0" style="max-width: 1000px; margin-left: auto; margin-right: auto;;">
        <transition-group name="posty-list" >
            <div 
            class="post" 
            v-for="user in pers.slice().reverse()" 
            :key="user.id"
            :index="index"
            >
                <div style="margin-left: 5px;">
                    <div style="margin-bottom: 10px" ><strong>ЛОГИН: {{ user.login }}</strong></div>
                    <div> УРОВЕНЬ ДОСТУПА: {{ user.root }} </div>
                </div>
                <div class="post__btns" style="max-width: 110px">
                    <my-button style="width: 100%"
                    @click="$emit('remove', user)"
                    >
                        delete
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
        pers: {
            type: Array,
            required: true
        },
    },
}
</script>

<style>
.post {
  padding: 15px;
  /* border: 2px solid #b68c5a; */
  margin-top: 20px;
  color: #292827;
  display: flex;
  align-items: top;
  justify-content: space-between;
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
    max-width: 150px;
    max-height: 180px;
}
.exmp3 img {
     object-fit: cover;
    width: 100%;
    height: 100%;
}
</style>