<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" class="home-icon"></router-link>
      <router-link to="/egg" class="egg-icon"></router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
html {
  height: 100%;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  margin: 0;
  height: 100%;
  background-color: #3C6BD5;
}

#app {
  font-family: 'Cabin', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FCFBF5;
  font-size: 16px;
  height: 100%;
}

#nav {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  border-bottom: 0.2rem solid #619fe4;
  
  .home-icon {
    width: 50px;
    height: 50px;
    background-image: url('/img/ugg-sign.svg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .egg-icon {
    width: 45px;
    height: 45px;
    fill: #FFFFFF;
    background-image: url('/img/goose-egg.svg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
}

input[type='checkbox'] {
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);

  &:checked {
    + label {
      text-decoration: line-through;
    }
  }

  &:focus {
    + label {
      &::before {
        border: 3px solid #F4B93B;
        outline: #D5DEE4 auto 3px;
        outline-offset: -5px;
      }
    }
  }
}
</style>
