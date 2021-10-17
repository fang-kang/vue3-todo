<template>
  <div class="todo-item">
    <el-checkbox v-model="checked" @change="setStatus(item.id)" />
    <span :class="item.status === FINISHED ? 'line-through' : ''">{{
      item.content
    }}</span>
    <el-button type="danger" @click="removeTodo(item.id)">删除</el-button>
    <el-button
      v-if="item.status !== FINISHED"
      :type="item.status === DOING ? 'info' : 'success'"
      @click="setDoing(item.id)"
      >{{ item.status === DOING ? "正在做..." : "马上做" }}</el-button
    >
  </div>
</template>

<script lang="ts" setup>
import { ITodo, TODO_STATUS } from "@/typings";
import { ref } from "vue";

interface IProp {
  item: ITodo;
}

interface IEmit {
  (event: "setDoing", id: number): void;
  (event: "removeTodo", id: number): void;
  (event: "setStatus", id: number): void;
}

const props = defineProps<IProp>();

const emit = defineEmits<IEmit>();

const { FINISHED, DOING } = TODO_STATUS;

const checked = ref(false);

const setDoing = (id: number): void => {
  emit("setDoing", id);
};

const removeTodo = (id: number): void => {
  emit("removeTodo", id);
};

const setStatus = (id: number): void => {
  emit("setStatus", id);
};
</script>

<style scoped>
.line-through {
  text-decoration: line-through;
}
</style>
