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
          layer-type="base"/>
        <LWMSTileLayer
          v-for="layer in layers"
          :key="layer.name"
          :base-url="baseUrl"
          :layers="layer.layers"
          :visible="layer.visible"
          :name="layer.name"
          layer-type="base">
        </LWMSTileLayer>
        <l-marker :lat-lng="marker">
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
        zoom: 13,
        center: L.latLng(30.52, 114.31),
        baseUrl: 'https://map.geoq.cn/arcgis/rest/services/ChinaOnlineCommunity/MapServer?',
        marker: L.latLng(30.52, 114.31),
        text: 'this is a marker',
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
            name: 'Boundaries',
            visible: false,
            layers: 'ne:ne_10m_admin_0_boundary_lines_land'
          },
          {
            name: 'China',
            visible: true,
            layers: 'China'
          },
          {
            name: 'Boundaries and Countries',
            visible: true,
            layers: 'ne:ne_10m_admin_0_boundary_lines_land,ne:ne_10m_admin_0_countries'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
