import { Cesium3DTileset, createWorldTerrain, IonResource, Viewer } from 'Cesium';
const CESIUM_BASE_URL = '';
window.onload = () => {

    const viewer = new Viewer('cesiumContainer', {
        // terrainProvider: createWorldTerrain()
        // scene3DOnly: true,
        // geocoder: false,
        // selectionIndicator: false,
        // fullscreenButton: false,
        // animation: false,
        // homeButton: false,
        // navigationHelpButton: false,
        // timeline: false
        // baseLayerPicker: false, //关掉才能换底图


    });
    console.log(viewer.imageryLayers);

};
