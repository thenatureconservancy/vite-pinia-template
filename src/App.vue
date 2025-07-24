<template>
  <TheHeader></TheHeader>
  <div v-if="!smallScreen">
    <q-splitter v-model="ms.splitterModel" style="height: calc(100vh - 50px)">
      <template v-slot:before>
        <div class="q-ma-lg">
          <TheLeftPanel></TheLeftPanel>
        </div>
      </template>
      <template v-slot:after>
        <div>
          <TheMap></TheMap>
        </div>
      </template>
    </q-splitter>
  </div>
  <div v-else>
    <q-splitter
      v-model="ms.mobileSplitterModel"
      style="height: calc(100vh - 50px); width: 100%; position: absolute"
      disable
      horizontal
    >
      <template v-slot:before>
        <div>
          <TheMap></TheMap>
        </div>
      </template>
      <template v-slot:after>
        <div class="q-ma-lg" style="height: 65% !important">
          <TheLeftPanel></TheLeftPanel>
        </div>
      </template>
    </q-splitter>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useQuasar } from 'quasar';
import { useMapStore } from './store/index';
import '@arcgis/map-components/components/arcgis-map';
import '@arcgis/map-components/components/arcgis-legend';
import '@arcgis/map-components/components/arcgis-scale-bar';
import '@arcgis/map-components/components/arcgis-zoom';
import '@arcgis/map-components/components/arcgis-expand';
import '@arcgis/map-components/components/arcgis-basemap-toggle';
import '@arcgis/map-components/components/arcgis-basemap-gallery';
import '@arcgis/map-components/components/arcgis-home';
import TheHeader from './components/TheHeader.vue';
import TheMap from './components/TheMap.vue';
import TheLeftPanel from './components/TheLeftPanel.vue';

const ms = useMapStore();
const $q = useQuasar();
let smallScreen = computed(() => $q.screen.lt.sm);
</script>

<style scoped>
@media screen and (max-width: 700px) {
  .esri-view-width-xsmall .esri-expand--auto .esri-expand__mask--expanded {
    display: none;
  }
  .esri-view-width-xsmall .esri-expand--auto .esri-expand__container--expanded {
    top: 100px;
  }
  .esri-view-width-xsmall
    .esri-expand--auto
    .esri-expand__container--expanded
    .esri-expand__panel {
    padding: 2px;
  }
}
</style>
