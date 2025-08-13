<template>
  <div>
    <div id="panel-title">
      <div style="font-size: large">Panel Title</div>
      <div class="q-mx-sm">
        <IconButton
          v-if="!ms.leftPanelInfo"
          type="info"
          method="show-info"
          @show-info="ms.leftPanelInfo = true"
        />
        <IconButton
          v-if="ms.leftPanelInfo"
          type="close"
          method="hide-info"
          @hide-info="ms.leftPanelInfo = false"
        />
      </div>
    </div>
    <div class="q-ma-sm" v-if="ms.leftPanelInfo">
      Panel info text Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Accusantium, sit numquam obcaecati sequi iste ex molestias laboriosam
      repellat sunt ratione eum. Suscipit, excepturi amet! Maiores qui aperiam
      quo ratione? Nostrum?
    </div>
  </div>
</template>

<script setup>
import { useMapStore } from '../store/index';
import IconButton from './UI/IconButton.vue';
import Tooltip from './UI/Tooltip.vue';

const ms = useMapStore();
</script>

<style scoped>
#panel-title {
  display: flex;
}
</style>
