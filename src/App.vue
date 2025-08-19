<template>
  <TheHeader></TheHeader>
  <q-splitter
    v-model="ms.splitterModel"
    :style="
      !smallScreen
        ? 'height: calc(100vh - 50px)'
        : 'height: calc(100vh - 50px); width: 100%; position: absolute'
    "
    :disable="smallScreen"
    :horizontal="smallScreen"
  >
    <template v-slot:before>
      <div class="q-ma-lg" v-if="!smallScreen">
        <TheLeftPanel></TheLeftPanel>
      </div>
      <div v-else>
        <TheMap></TheMap>
      </div>
    </template>
    <template v-slot:after>
      <div v-if="!smallScreen" class="map-panel-wrapper">
        <TheMap></TheMap>
        <!-- Commented code below is for a custom panel that operates similar to q-drawer -->

        <!-- <transition name="slide">
          <Panel v-if="ms.rightPanelVis"></Panel>
        </transition> -->
      </div>
      <div class="q-ma-lg" v-else style="height: 65% !important">
        <TheLeftPanel></TheLeftPanel>
      </div>
    </template>
  </q-splitter>
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
import Panel from './components/UI/Panel.vue';

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

/* Slide transition */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
.map-panel-wrapper {
  display: grid;
  height: 100%;
  width: 100%;
  position: relative;
}
.map-panel-wrapper > * {
  height: 100%;
}
.map-panel-wrapper > TheMap {
  flex: 1;
}
</style>
