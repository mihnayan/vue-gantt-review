export default [
  {
    id: 'Task_1',
    description: 'Построить базу на Луне',
    user: 'Главный конструктор',
    start: '2019-01-01',
    end: '2019-12-01',
    progress: 5,
    type: 'project'
  },
  {
    id: 'Task_2',
    description: 'Сконструировать лунные модули',
    user: 'Главный инженер лунного модуля',
    start: '2019-01-01',
    end: '2019-03-01',
    progress: 40,
    type: 'milestone'
  },
  {
    id: 'Task_3',
    description: 'Привести материалы для лунных модулей',
    user: 'Главный прораб лунных модулей',
    start: '2019-01-08',
    end: '2019-01-31',
    progress: 100,
    type: 'task',
    dependencies: ['Task_2'],
    parent_id: 'Task_2'
  }
];