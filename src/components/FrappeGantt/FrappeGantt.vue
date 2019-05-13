<template>
  <svg id="gantt"></svg>
</template>

<script>
import Gantt from 'frappe-gantt';
import tasks from '../../data/gantt_tasks.js';
import options from './options.js';

export default {
  data () {
    return {
      tasks: tasks,
      gantt: null
    }
  },
  methods: {
    mapTasks (tasks) {
      return tasks.map(task => {
        return {
          id: task.id,
          name: task.description,
          user: task.user,
          start: task.start,
          end: task.end,
          progress: task.progress,
          dependencies: task.dependencies
        }
      })
    },
    // applyOptions (options) {
    //   this.gantt.change_view_mode(options.view_mode);
    // }
  },
  created () {
    this.tasks = this.mapTasks(tasks);
  },
  mounted () {
    this.gantt = new Gantt('#gantt', this.tasks, options);
    // this.applyOptions(options);
  }
}
</script>

