<template>
  <div class="app-container">
    <div class="filter-container vue-leaflet">
      <l-map style="width: 100%; height: 600px;" :zoom="zoom" :center="center">
        <l-control-layers position="topright"  ></l-control-layers>
        <l-tile-layer
          v-for="tileProvider in tileProviders"
          :key="tileProvider.name"
          :name="tileProvider.name"
          :visible="tileProvider.visible"
          :url="tileProvider.url"
          :attribution="tileProvider.attribution"
          :token="token"
          transparent="true"
          layer-type="base"/>
      </l-map>
    </div>
  </div>
</template>

<script>
  import { LMap, LTileLayer, LControlZoom,LControlLayers } from 'vue2-leaflet';
  import 'leaflet/dist/leaflet.css';

  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  });
  export default {
    name: 'simpleMap',
    components: {
      LMap,
      LTileLayer,
      LControlZoom,
      LControlLayers
    },
    data () {
      return {
        zoom: 13,
        center: L.latLng(28.21667, 113.00000),
        baseUrl: 'http://202.114.118.206:8080/geoserver/cite/wms?',
        tileProviders: [
          {
            name: 'OpenStreetMap',
            visible: true,
            attribution: '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          },
          {
            name: 'OpenTopoMap',
            visible: false,
            url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
            attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
          }
        ],
      }
    }
  }
</script>

<style scoped>

</style>
