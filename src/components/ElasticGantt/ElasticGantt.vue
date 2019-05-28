<template>
<div>
  <gantt-elastic :tasks="tasks" :options="options"></gantt-elastic>
</div>
</template>

<script>
import GanttElastic from 'gantt-elastic'
import tasks from '../../data/gantt_tasks.js'
import options from './options.js'

const taskStyles = {
  project: {},
  milestone: {
    base: {
      fill: '#1EBC61',
      stroke: '#0EAC51'
    }
  },
  task: {
    base: {
      fill: '#508FED',
      stroke: '#1656B6'
    }
  }
}

export default {
  data () {
    return {
      tasks: {},
      options: options
    }
  },
  components: {
    GanttElastic
  },
  methods: {
    mapTasks (tasks) {
      return tasks.map(task => {
        return {
          id: task.id,
          label: task.description,
          user: task.user,
          start: task.start,
          end: task.end,
          progress: task.progress,
          type: task.type,
          style: taskStyles[task.type],
          parentId: task.parent_id,
          dependentOn: task.dependencies
        }
      })
    }
  },
  created () {
    this.tasks = this.mapTasks(tasks);
  }
}
</script>

