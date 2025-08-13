<template>
  <div id="panel">
    <div><q-btn icon="close" round></q-btn></div>
    <div>Custom Side Panel Content</div>
  </div>
</template>

<script setup>
import { useMapStore } from '../../store/index';
const ms = useMapStore();
</script>

<style scoped>
#panel {
  height: 100%;
  width: 25%;
  position: float;
  right: 0px;
}
</style>
