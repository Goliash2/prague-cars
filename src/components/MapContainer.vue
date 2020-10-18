<template>
<div class="map-div">
          <l-map
            v-if="!loading" 
            v-model="zoom"
            v-model:zoom="zoom"
            :center="[location.coords.latitude, location.coords.longitude]"
        >
          <l-tile-layer
              url="https://m1.mapserver.mapy.cz/turist-m/{z}-{x}-{y}"
          ></l-tile-layer>
          <l-marker v-for="(car) in resp.features"
          :key="car.properties.id"
              :lat-lng="[car.geometry.coordinates[1],car.geometry.coordinates[0]]"
          ></l-marker>
        </l-map>
      </div>
</template>

<script lang="ts">
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
import { ref, onMounted } from 'vue'
import "leaflet/dist/leaflet.css";
import axios from 'axios';

export default {
  name: 'MapContainer',
  props: {
    name: String
  },
  components: {
    LMap,
    LTileLayer,
    LMarker},
  data() {
    return {
      zoom: 12
    };
  },
  methods: {
    log(a) {
      console.log(a);
    }
  },
  setup(name) {
    const resp = ref(0);
    const loading = ref(true);
    const location = ref({coords: {
      latitude: 50.2,
      longitude: 14.4
    }});
    const urlStart = ref('');
  onMounted(() => {
        if(!("geolocation" in navigator)) {
          console.log('Geolocation is not available.');
        }
            
        navigator.geolocation.getCurrentPosition(pos => {
          location.value = pos;
          if(name.name == 'Cars') {
      urlStart.value = 'https://api.golemio.cz/v2/sharedcars/?latlng='+location.value.coords.latitude+"%2C"+location.value.coords.longitude+"&range=15000&limit=50";
    } else if (name.name == 'Bikes') {
      urlStart.value = 'https://api.golemio.cz/v2/sharedbikes/?latlng='+location.value.coords.latitude+"%2C"+location.value.coords.longitude+"&range=15000&limit=50";
    } else {
      urlStart.value = 'https://api.golemio.cz/v2/vehiclepositions?limit=1000&offset=0';
    }
           axios.get(urlStart.value, {
            headers: {
            'X-Access-Token': '',
            "Content-Type": "application/json",
            }
        })
        .then(response => {
          resp.value = response.data;
          loading.value = false;
        })
       .catch(function (error) {
             console.log(error);
        });
        }, err => {
          console.log(err);
        });

    })
    return {
        resp,
        loading,
        location
      }
  }
}
</script>

<style scoped>
.map-div {
  height: 100%;
  width: 100%;
}

</style>