<template>
  <div id="app">
    <div id="elastic-gantt">
      <h2>Elastic Gantt</h2>
      <ElasticGantt></ElasticGantt>
    </div>
    <div id="frappe-gantt">
      <h2>Frape Gantt</h2>
      <FrappeGantt></FrappeGantt>
    </div>
    <div class="container" id="dhtmlx-gantt">
      <h2>dhtmlxGantt</h2>
      <DhtmlxGantt class="left-container"></DhtmlxGantt>
    </div>
  </div>
</template>

<script>
import ElasticGantt from './components/ElasticGantt/ElasticGantt.vue';
import FrappeGantt from './components/FrappeGantt/FrappeGantt.vue';
import DhtmlxGantt from './components/DhtmlxGantt/DhtmlxGantt.vue';

export default {
  name: 'app',
  components: {
    ElasticGantt,
    FrappeGantt,
    DhtmlxGantt
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
