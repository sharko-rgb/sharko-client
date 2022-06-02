<template>
  <div class="burger-menu">
      <a href="#" class="burger-menu__button">
          <span class="burger-menu__lines">   
          </span>
      </a>
  </div>
</template>

<script>
export default {
    name: 'my-gamburger'
}
</script>

<style>
.burger-menu__button {
    display: flex;
    position: fixed;
    top: 3px;
    left: 5px;
    z-index: 30;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: red;
}

.burger-menu__lines,
.burger-menu__lines::after,
.burger-menu__lines::before {
    display: block;
    position: absolute;
    width: 20px;
    height: 6px;
    background-color: aliceblue;
}
.burger-menu__lines {
    top: 50px;
    left: 50px;
    transform: translate(-50%, -50%);
}

.burger-menu__lines::before {
    content: '';
}

.burger-menu__lines::after {
    content: '';
}
</style>