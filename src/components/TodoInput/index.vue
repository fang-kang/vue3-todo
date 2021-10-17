<template>
  <el-input
    class="todo-input"
    v-model="todoValue"
    placeholder="请输入待办todo"
    clearable
    @keydown="setValue"
  ></el-input>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { IUseTodo, useTodo } from "@/hooks";
const todoValue = ref<string>("");

const { setTodo }: IUseTodo = useTodo();

const setValue = (e: KeyboardEvent): void => {
  if (e.keyCode === 13 && todoValue.value.trim().length) {
    //设置数据
    setTodo(todoValue.value);
    todoValue.value = "";
  }
};
</script>

<style scoped>
.todo-input{
  margin: 0 0 10px 0;
}
</style>
