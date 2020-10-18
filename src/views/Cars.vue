<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Sdíledná auta</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">      
      <MapContainer name="Cars" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import MapContainer from '@/components/MapContainer.vue';

export default  {
  name: 'Cars',
  components: { MapContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>