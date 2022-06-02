<template>
    <div class="kebab">
    <figure></figure>
    <figure class="middle"></figure>
    <p class="cross">x</p>
    <figure></figure>
    <ul class="dropdown">
      <li><a href="http://www.g.com">Art</a></li>
      <li><a href="http://www.g.com">Coding</a></li>
      <li><a href="http://www.g.com">Design</a></li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'my-kebab'
}

</script>

<style scoped>

.kebab {
  cursor: pointer;
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  padding: 0 16px;
  top: 12px;
}

.kebab figure {
    width: 6px;
    height: 6px;
    border-radius: 5px;
    background: rgb(22, 22, 22);
    margin: 3px 0;
  }

.middle {
  transition: all 0.25s cubic-bezier(.72,1.2,.71,.72);
  transform: scale(1);
  position: relative;
  box-shadow: 0 0.1px 0.1px 0 rgba(0, 0, 0, 0.16), 0 0.1px 0.3px 0 rgba(0, 0, 0, 0.12);
  -webkit-filter: blur(.1px);
  filter: blur(.1px);
}

.middle.active {
  transform: scale(4.5);
  transition: all 0.25s cubic-bezier(.32,2.04,.85,.54);
  box-shadow: 0 0.1px 0.1px 0 rgba(0, 0, 0, 0.16), 0 0.1px 0.3px 0 rgba(0, 0, 0, 0.12);
}

.cross {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  margin-top: -1px;
  font-family: 'Nunito', sans-serif;
  color: rgb(2, 2, 2);
  transition: all 0.2s cubic-bezier(.72,1.2,.71,.72);
  font-size: 22px;
  user-select: none;
}

.cross.active {
  transform: translate(-50%, -50%) scale(1);
  transition: all 0.15s cubic-bezier(.32,2.04,.85,.54);
}


h1, a, li {
  font-family: 'Roboto', sans-serif;
}

h1 {
  font-size: 26px;
  background: cyan;
  color: rgb(252, 24, 24);
  padding: 40px 0 40px 20%;
  margin-bottom: 50px;
}

a, li {
  color: darken(grey, 20%);
  text-decoration: none;
}

.nav {
  margin-left: 20%;
}

.nav > li {
    display: inline-block;
    padding: 1em 18px;
    cursor: pointer;
  }

.nav > li:hover {
  background: lighten(grey, 30%);
}

.dropdown {
    position: absolute;
    right: 0;
    top: 3em;
    transition: all 0.25s ease-out;
    transform: scale(0);
    transform-origin: 100% 0;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16), 0 2px 8px 0 rgba(0, 0, 0, 0.12);
}

.dropdown :hover ul {
  transform: scale(1);
}

.dropdown li {
  display: block;
  width: 100%;
}

.dropdown li a {
  width: 100%;
  padding: 1em 18px;
  display: inline-block;
  white-space: pre;
  box-sizing: border-box;
}
.dropdown li a :hover {
  background: lighten(grey, 30%);
}

.dropdown.active {
  transform: scale(1);
  transition: all 0.25s cubic-bezier(.5,1.8,.9,.8);
}
</style>