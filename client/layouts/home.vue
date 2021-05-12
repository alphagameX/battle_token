<template>
  <div>
    <the-navbar/>
    <Nuxt />
  </div>
</template>

<script>
import TheNavbar from '../components/Template/TheNavbar.vue'

export default {
  components: { TheNavbar },
  name: "Home"
}
</script>

<style lang="scss">

  $color_primary: #ff4657;
  $color_primary_border: #c51a1a;

  *, html {
    padding: 0;
    margin: 0;
    font-family: 'Poppins';
    font-weight: 400;
  }

  .container {
    max-width: 1000px;
    width: 100%;
    padding: 40px;
    margin: 0 auto;
    display: flex;
  }

  .primary {
    cursor: pointer;
    transition: all 0.4s;
    box-shadow: 0px 6px 0px 1px $color_primary_border;
    background-color: $color_primary;
    color: white;
    border: none;
    font-size: 1.7rem;
    font-weight: 700;
    border-radius: 20px;
    padding: 10px 20px;

    &:hover {
      transform: translateY(6px);
       box-shadow: 0px 0px 0px 1px $color_primary_border;
    }
  }

  .secondary {
    cursor: pointer;
    transition: all 0.4s;
    box-shadow: 0px 6px 0px 1px #b9b9b9;
    background-color: white;
    color: black;
    border: none;
    font-size: 1.7rem;
    font-weight: 700;
    border-radius: 20px;
    padding: 10px 20px;

    &:hover {
      transform: translateY(6px);
      box-shadow: 0px 0px 0px 1px #b9b9b9;
    }
  }
</style>