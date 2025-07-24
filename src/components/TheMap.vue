<template>
  <arcgis-map
    id="map"
    item-id="2486e44595c1428781503d87f281f7d3"
    @arcgisViewReadyChange="onReady"
  >
    <arcgis-scale-bar position="bottom-right" unit="dual"></arcgis-scale-bar>
    <arcgis-expand
      close-on-esc
      position="bottom-left"
      mode="floating"
      collapse-tooltip="Hide Legend"
      expand-tooltip="Legend"
    >
      <arcgis-legend legend-style="classic"></arcgis-legend>
    </arcgis-expand>
    <arcgis-expand close-on-esc position="top-right" mode="floating">
      <arcgis-basemap-gallery
        position="top-right"
        :source="source"
      ></arcgis-basemap-gallery>
    </arcgis-expand>
    <arcgis-home position="top-left"></arcgis-home>
    <arcgis-zoom position="top-left"></arcgis-zoom>
  </arcgis-map>
</template>

<script setup>
import Portal from '@arcgis/core/portal/Portal';
import PortalBasemapsSource from '@arcgis/core/widgets/BasemapGallery/support/PortalBasemapsSource';
import { useMapStore } from '../store/index';
const ms = useMapStore();

// basemap gallery
const allowedBasemapTitles = [
  'TNC Light with Hillshade',
  'TNC Dark Gray Map',
  'Ocean Basemap',
  'Imagery Hybrid',
];
const portal = new Portal();
const source = new PortalBasemapsSource({
  portal,
  query: {
    id: 'defa1b2287604d069c70af515331e30f',
  },
  filterFunction: (basemap) =>
    allowedBasemapTitles.indexOf(basemap.portalItem.title) > -1,
});

// arcgisViewReadyChange
const onReady = (event) => {
  const webMap = document.querySelector('arcgis-map').view.map;
  const mapView = document.querySelector('arcgis-map').view;

  ms.getLayersInfo();
};
</script>

<style>
@media screen and (max-width: 700px) {
  #map {
    width: 100%;
    min-height: 20vh;
  }
  .esri-view-width-xsmall .esri-expand--auto .esri-expand__container--expanded {
    height: fit-content;
  }
}
.esri-basemap-gallery {
  margin-bottom: 0px !important;
}
</style>
