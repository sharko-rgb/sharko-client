<template>
  <div class="hamburger-menu">
  <input id="menu__toggle" type="checkbox" />
  <label class="menu__btn" for="menu__toggle">
    <span></span>
  </label>
  <ul class="menu__box">
    <li>
        <slot></slot>
    </li>
  </ul>
</div>
</template>

<script>
export default {
    name: 'my-burger'
}
</script>

<style>
/* скрываем чекбокс */
#menu__toggle {
  opacity: 0;
}
/* стилизуем кнопку */
.menu__btn {
  display: flex; /* используем flex для центрирования содержимого */
  position: fixed;
  width: 26px;
  height: 65px;
  cursor: pointer;
  z-index: 1;
}
/* добавляем "гамбургер" */
.menu__btn > span,
.menu__btn > span::before,
.menu__btn > span::after {
  display: block;
  position: absolute;
  width: 100%;
  height: 4px;
  background-color: #ffffff;
}
.menu__btn > span::before {
  content: '';
  top: -8px;
}
.menu__btn > span::after {
  content: '';
  top: 8px;
}

/* контейнер меню */
.menu__box {
  display: block;
  position: fixed;
  visibility: hidden;
  top: 0;
  left: -100%;
  width: 300px;
  height: 100%;
  margin: 0;
  padding: 40px 0;
  list-style: none;
  text-align: center;
  background-color: #eceff1af;
  box-shadow: 1px 0px 6px rgba(0, 0, 0, .2);
}
/* элементы меню */

#menu__toggle:checked ~ .menu__btn > span {
  transform: rotate(45deg);
  background-color: red;
}
#menu__toggle:checked ~ .menu__btn > span::before {
  top: 0;
  transform: rotate(0);
  background-color: red;
}
#menu__toggle:checked ~ .menu__btn > span::after {
  top: 0;
  transform: rotate(90deg);
  background-color: red;
}
#menu__toggle:checked ~ .menu__box {
  visibility: visible;
  left: 0;
}
.hamburger-menu{
    width: 10px;
    height: 1px;
}
</style>