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
        <LWMSTileLayer
          v-for="layer in layers"
          :key="layer.name"
          :base-url="baseUrl"
          :layers="layer.layers"
          :visible="layer.visible"
          :name="layer.name"
          layer-type="overlay"
          version="1.1.0"
          format="image/png"
        transparent="true">
        </LWMSTileLayer>
        <l-marker :lat-lng="marker1">
          <l-popup :content="text"></l-popup>
        </l-marker>
        <l-marker :lat-lng="marker2">
          <l-popup :content="text"></l-popup>
        </l-marker>
      </l-map>
    </div>
  </div>
</template>

<script>
  import { LMap, LTileLayer, LMarker, LPopup, LControlZoom, LWMSTileLayer,LControlLayers } from 'vue2-leaflet';
  import 'leaflet/dist/leaflet.css';

  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  });
  export default {
    name: 'roadMap',
    components: {
      LMap,
      LTileLayer,
      LMarker,
      LPopup,
      LControlZoom,
      LWMSTileLayer,
      LControlLayers
    },
    data () {
      return {
        zoom: 18,
        center: L.latLng(28.487934, 109.88851),
        baseUrl: 'http://202.114.118.206:8080/geoserver/cite/wms?',
        marker1: L.latLng(28.48870, 109.88950),
        marker2: L.latLng(28.48826, 109.89082),
        text: ' <table>\n' +
          '            <tr>\n' +
          '                <td >灾害等级</td>\n' +
          '                <td >轻微损毁</td>\n' +
          '             </tr>\n' +
          '            <tr>\n' +
          '                <td >损毁长度</td>\n' +
          '                <td>112.6 米</td>\n' +
          '            </tr>\n' +
          '            <tr>\n' +
          '                <td>损毁面积</td>\n' +
          '                <td>394.1 平方米</td>\n' +
          '            </tr>\n' +
          '        </table>',
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
        layers: [
          {
            name: 'OrinignImage',
            visible: true,
            layers: 'cite:s325-11'
          },
          {
            name: 'damgeImage',
            visible: true,
            layers: 'cite:road_damage'
          },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
