import { defineStore } from 'pinia';

export const useMapStore = defineStore('mapStore', () => ({
  // MODELS
  splitterModel: 25,
  mobileSplitterModel: 35,

  // FUNCTIONS
  getLayersInfo() {
    // get and assign layers
    const webMap = document.querySelector('arcgis-map').view.map;
    console.log(webMap);
  },
}));
