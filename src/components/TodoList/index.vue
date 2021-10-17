<template>
  <!-- <TodoItem
    v-for="item of todoList"
    :key="item.id"
    :item="item"
    @removeTodo="removeTodo"
    @setStatus="setStatus"
    @setDoing="setDoing"
  /> -->
  <el-table
    max-height="600"
    highlight-current-row
    :data="todoList"
    border
    style="width: 100%"
  >
    <el-table-column label="checked" align="center" header-align="center">
      <template #default="{ row: { status, id } }">
        <el-checkbox :value="status === DOING" @change="setStatus(id)" />
      </template>
    </el-table-column>
    <el-table-column label="content" align="center" header-align="center">
      <template #default="{ row: { status, content } }">
        <span :class="status === FINISHED ? 'line-through' : ''">{{
          content
        }}</span>
      </template>
    </el-table-column>
    <el-table-column label="actions" align="center" header-align="center">
      <template #default="{ row: { status, id } }">
        <el-button type="danger" @click="removeTodo(id)">删除</el-button>
        <el-button
          v-if="status !== FINISHED"
          :type="status === DOING ? 'info' : 'success'"
          @click="setDoing(id)"
          >{{ status === DOING ? "正在做..." : "马上做" }}</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
// import TodoItem from "@/components/TodoList/item.vue";
import { IUseTodo, useTodo } from "@/hooks";
import { ITodo, TODO_STATUS } from "@/typings";
const props = defineProps<{
  todoList: Array<ITodo>;
}>();

const { FINISHED, DOING } = TODO_STATUS;

const { removeTodo, setStatus, setDoing }: IUseTodo = useTodo();
</script>

<style scoped>
.line-through {
  text-decoration: line-through;
}
</style>
