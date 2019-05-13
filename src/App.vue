<template>
  <div id="app">
    <h2>Elastic Gantt</h2>
    <ElasticGantt></ElasticGantt>
    <h2>Frape Gantt</h2>
    <FrappeGantt></FrappeGantt>
  </div>
</template>

<script>
import ElasticGantt from './components/ElasticGantt/ElasticGantt.vue';
import FrappeGantt from './components/FrappeGantt/FrappeGantt.vue';

export default {
  name: 'app',
  components: {
    ElasticGantt,
    FrappeGantt
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
