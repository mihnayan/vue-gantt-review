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
      let linkId = 1;
      tasks.forEach(task => {
        this.tasks.data.push({
          id: task.id,
          start_date: task.start,
          end_date: task.end,
          text: task.description,
          type: task.type,
          progress: task.progress / 100,
          parent: task.parentId
        });
        if (task.dependencies) {
          task.dependencies.forEach(dependency => {
            this.tasks.links.push({
              id: linkId++,
              source: dependency,
              target: task.id,
              type: "0"
            })
          });
        }
      });
    }
  },
  created () {
    this.mapTasks(tasks);
  },
  mounted () {
    gantt.config.xml_date = '%Y-%m-%d';
    gantt.config.scale_unit = 'month';
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
