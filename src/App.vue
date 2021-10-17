<template>
  <el-card>
    <template #header> Todo-List </template>
    <TodoInput />
    <TodoList :todoList="todoList" />
  </el-card>
</template>

<script setup lang="ts">
import TodoInput from "@/components/TodoInput/index.vue";
import TodoList from "@/components/TodoList/index.vue";
import { computed, onMounted } from "vue";
import { IUseTodo, useTodo } from "@/hooks";
import { Store, useStore } from "vuex";

const { setTodoList }: IUseTodo = useTodo();

const store: Store<any> = useStore();

const todoList = computed(() => store.state.list);

onMounted(() => {
  setTodoList();
});
</script>

<style></style>
