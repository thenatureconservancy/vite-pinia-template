import { defineStore } from 'pinia';

export const useMapStore = defineStore('mapStore', () => ({
  // MODELS
  splitterModel: 25,
  mobileSplitterModel: 35,

  // FUNCTIONS
  getLayersInfo() {
    let webMap = document.querySelector('arcgis-map').scrollIntoView.map;
    console.log(webMap);
  },
}));
