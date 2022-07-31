<template>
  <q-page class="row itmes-center justify-evenly">
    <FlowDiagram :elements="elements" />
    <q-page-sticky position="bottom-right" :offset="[5, 5]" class="sticky-btn">
      <q-btn fab icon="add" @click="addItem" color="primary" />
    </q-page-sticky>
  </q-page>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import type { Elements } from '@braks/vue-flow';
import FlowDiagram from 'components/FlowDiagram.vue';

const elements = reactive<Elements>([
  {
    id: '1',
    type: 'input',
    label: 'Node 1',
    position: { x: 250, y: 5 },
    class: 'light',
  },
  { id: '2', label: 'Node 2', position: { x: 100, y: 100 }, class: 'light' },
  { id: '3', label: 'Node 3', position: { x: 400, y: 100 }, class: 'light' },
  { id: '4', label: 'Node 4', position: { x: 400, y: 200 }, class: 'light' },
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e1-3', source: '1', target: '3' },
]);

const addItem = () => {
  console.log('addItem');
};
</script>

<style scoped>
.sticky-btn {
  z-index: 100;
}
</style>
