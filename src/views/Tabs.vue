<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="mhd" href="/tabs/mhd">
          <ion-icon :icon="bus" />
          <ion-label>MHD</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="bikes" href="/tabs/bikes">
          <ion-icon :icon="bicycle" />
          <ion-label>Kola</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="cars" href="/tabs/cars">
          <ion-icon :icon="car" />
          <ion-label>Auta</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { car, bus, bicycle } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      car, 
      bus, 
      bicycle,
    }
  }
}
</script>