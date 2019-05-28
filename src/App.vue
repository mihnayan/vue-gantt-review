<template>
<div id="app">
  <el-container>
    <el-aside>
      <el-menu router>
        <el-menu-item-group>
          <el-menu-item index="/ElasticGantt">Elastic Gantt</el-menu-item>
          <el-menu-item index="/FrappeGantt">Frappe Gantt</el-menu-item>
          <el-menu-item index="/DhtmlxGantt">dhtmlxGantt</el-menu-item>
        </el-menu-item-group>
      </el-menu>
    </el-aside>
    
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</div>
</template>
