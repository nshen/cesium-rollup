import { Viewer } from 'cesium';

const CESIUM_BASE_URL = '';

const viewer = new Viewer('cesiumContainer', {
    // terrainProvider: createWorldTerrain()
    scene3DOnly: true,
    geocoder: false,
    selectionIndicator: false,
    fullscreenButton: false,
    animation: false,
    homeButton: false,
    navigationHelpButton: false,
    timeline: false,
    baseLayerPicker: false

});



console.log(viewer.imageryLayers);
