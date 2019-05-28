<template>
  <div id="gantt"></div>
</template>

<script>
import gantt from 'dhtmlx-gantt'
import tasks from '../../data/gantt_tasks.js'

export default {
  name: 'gantt',
  data () {
    return {
      tasks: {
        data: [],
        links: []
      }
    }
  },
  methods: {
    mapTasks (tasks) {
      return tasks.map(task => {
        return {
          id: task.id,
          start_date: task.start,
          end_date: task.end,
          text: task.description
        }
      });
    }
  },
  created () {
    this.tasks.data = this.mapTasks(tasks);
  },
  mounted () {
    gantt.config.xml_date = '%Y-%m-%d';
    gantt.init('gantt');
    gantt.parse(this.tasks);
  }
}
</script>

<style>
  @import "~dhtmlx-gantt/codebase/dhtmlxgantt.css";
  #gantt {
    height: 200px;
  }
</style>
