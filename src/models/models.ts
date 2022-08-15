import type { Element } from '@braks/vue-flow';
export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface Range {
  min: number;
  max: number;
}

export interface FlowRecords {
  curFlowElements: Array<Element>;
}
