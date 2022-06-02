<template>
    <button class="El_Menu Menu__item" >
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'menu-element'
}
</script>

<style>
.El_Menu{
  height: 98%;
  padding: 10px 15px;
  color: #ffffff;
  background: #000000;
  border: none;
}

.menu__item {
  display: block;
  padding: 12px 24px;
  font-family: 'system-ui';
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  width: 100%;
}

.El_Menu:hover{
  background: red;
}

.El_Menu:active {
  background: white;
}

</style>