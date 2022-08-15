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
import { uid } from 'quasar';
import _ from 'lodash';
import { Range } from 'src/models/models';
import type { Elements } from '@braks/vue-flow';
import FlowDiagram from 'components/FlowDiagram.vue';
import  store, {useStore}  from '../store/index';

const elements = reactive<Elements>([]);

const addItem = () => {
  console.log('addItem');
  const id = uid();
  console.log('uid: ' + uid);
  const label = getLabel();
  const position = getPosition({ min: 5, max: 300 }, { min: 10, max: 200 });
  const node = {
    id,
    label,
    position,
    type: _.isEmpty(elements) ? 'input' : '',
  };
  elements.push(node);
  // test
  useStore();
  console.log(store);

};

const getLabel = () => `Layer ${elements.length + 1}`;
const getPosition = (xRange: Range, yRange: Range) => {
  return {
    x: _.random(xRange.min, xRange.max),
    y: _.random(yRange.min, yRange.max),
  };
};
</script>

<style scoped>
.sticky-btn {
  z-index: 100;
}
</style>
