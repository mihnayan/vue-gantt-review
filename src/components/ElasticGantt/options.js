import dayjs from 'dayjs';
export default {
  title: {
    label: 'Your project title as html (link or whatever...)',
    html: false
  },
  taskList: {
    columns: [
      {
        id: 1,
        label: 'ID',
        value: 'id',
        width: 40
      },
      {
        id: 2,
        label: 'Описание задачи',
        value: 'label',
        width: 200,
        expander: true
      },
      {
        id: 3,
        label: 'Назначена для',
        value: 'user',
        width: 130,
        html: true
      },
      {
        id: 3,
        label: 'Дата начала',
        value: task => dayjs(task.start).format('DD.MM.YYYY'),
        width: 78
      },
      {
        id: 4,
        label: 'Тип',
        value: 'type',
        width: 68
      },
      {
        id: 5,
        label: '%',
        value: 'progress',
        width: 35,
        style: {
          'task-list-header-label': {
            'text-align': 'center',
            width: '100%'
          },
          'task-list-item-value-container': {
            'text-align': 'center'
          }
        }
      }
    ]
  }
};