<template>
    <button class="btn" >
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'my-button'
}
</script>

<style>
.btn{
  margin-top: 15px;
  padding: 10px 15px;
  border: 2px solid #ffffff;
  border-radius: 6px;
  color: #ffffff;
  background: rgb(0, 0, 0);
}
.btn:hover{
  background: red;
}
.btn:active {
  background: white;
}
.btnw{
  padding: 5px 8px;
}
</style>