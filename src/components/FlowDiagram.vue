<template>
  <VueFlow v-model="data" class="full-vh">
    <Background />
    <Controls />
  </VueFlow>
</template>

<script setup lang="ts">
import type { Elements } from '@braks/vue-flow';
import { VueFlow, useVueFlow, Background, Controls } from '@braks/vue-flow';
import { computed, PropType } from 'vue';
import _ from 'lodash';

const props = defineProps({
  elements: Array as PropType<Elements>,
});

const data = computed(() => _.cloneDeep(props.elements));

const {
  onPaneReady,
  onNodeDragStop,
  onConnect,
  addEdges,
  // setTransform,
  // toObject,
} = useVueFlow({
  defaultZoom: 1.5,
  minZoom: 0.2,
  maxZoom: 4,
});

onPaneReady(({ fitView }) => {
  fitView();
});
onNodeDragStop((e) => console.log('drag stop', e));
onConnect((params) => addEdges([params]));
</script>

<style scoped>
@import 'https://cdn.jsdelivr.net/npm/@braks/vue-flow@0.4.33/dist/style.css';
@import 'https://cdn.jsdelivr.net/npm/@braks/vue-flow@0.4.33/dist/theme-default.css';

.full-vh {
  height: calc(100vh - 50px);
}
</style>
