<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>MHD</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">      
      <MapContainer name="MHD" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import MapContainer from '@/components/MapContainer.vue';

export default  {
  name: 'Mhd',
  components: { MapContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>