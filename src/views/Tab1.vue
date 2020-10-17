<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div style="height: 100%; width: 100%;">
        <l-map
            v-model="zoom"
            v-model:zoom="zoom"
            :center="[50.44176389056172, 14.08721923828125]"
            @move="log('move')"
        >
          <l-tile-layer
              url="https://m1.mapserver.mapy.cz/turist-m/{z}-{x}-{y}"
          ></l-tile-layer>
          <l-marker
              :lat-lng="[50.44176389056172, 14.08721923828125]"
          ></l-marker>
        </l-map>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";


export default  {
  name: 'Tab1',
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    LMap,
    LTileLayer,
    LMarker},
  data() {
    return {
      zoom: 2,
    };
  },
  methods: {
    log(a) {
      console.log(a);
    },
  },
}
</script>
