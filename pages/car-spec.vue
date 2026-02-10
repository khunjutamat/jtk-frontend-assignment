<template>
  <div class="car-page">
    <div class="main-layout">
        <div class="image-section">
            <!-- Main image -->
            <img src="/images/b4.jpg" style="width:40rem"/>

            <!-- Thumbnail images -->
            <div class="thumbnail-container  custom-scroll">

                <!-- Prev buttons -->
                <div class="circle-bg">
                    <div class="prev-arrow">&#129128;</div>
                </div>
                
                <div class="thumb">
                    <img class="cursor" src="/images/benz1.jpg" style="width:100%">
                </div>
                <div class="thumb">
                    <img class="cursor" src="/images/b2.jpg" style="width:100%">
                </div>
                <div class="thumb">
                    <img class="cursor" src="/images/b3.jpg" style="width:100%">
                </div>
                <div class="thumb active">
                    <img class="cursor" src="/images/b4.jpg" style="width:100%">
                </div>    
                <div class="thumb">
                    <img class="cursor" src="/images/b5.jpg" style="width:100%">
                </div>
                <div class="thumb">
                    <img class="cursor" src="/images/benz6.jpg" style="width:100%">
                </div>

                <!-- Next buttons -->
                <div class="circle-bg">
                    <div class="next-arrow">&#129130;</div>
                </div>
            </div>
            
            <!-- <div class="custom-scroll"></div> -->
        </div>
        

      <div class="info-section">
        <div class="car-title">Mercedes-Benz</div>
        <div class="car-subtitle">E200 AMG Line</div>
        
        <table class="spec-table">
          <tr v-for="spec in carSpecs" :key="spec.label">
            <td class="td-label">{{ spec.label }}</td>
            <td class="td-value">{{ spec.value }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const carSpecs = [
  { label: 'Type:', value: 'GY' },
  { label: 'Version:', value: '35 TFSI' },
  { label: 'Master Number:', value: '137749178' },
  { label: 'Type Approval Number:', value: '1AC270' },
  { label: 'Production From/To:', value: '2020' },
  { label: 'Engine Power (Kw/Ps):', value: '110/150' },
  { label: 'System Power (Kw/Ps)::', value: '180/210' },
  { label: 'PCD:', value: '5/112' },
  { label: 'Center Bore:', value: '57,1Mm' },
  { label: 'Fuel:', value: 'Hybrid Gasoline/E' },
  { label: 'Axis Load Front:', value: '1145 Kg' },
  { label: 'Axis Load Rear', value: '1250 Kg' },
  { label: 'Max Speed:', value: '232' },
];
</script>

<style lang="scss">
@use "~/assets/scss/car-spec.scss" as *;

.car-page {
  padding: 40px;
  .main-layout {
    display: flex;
    gap: 40px;
    align-items: flex-start;
  }
  
}

/* call mixin */ 
.car-title {
    @include title-font; 
}

.car-subtitle {
    @include subtitle-font; 
}

.info-section {
    width: 100%;
}

.custom-scroll {
    @include custom-scrollbar;
}



</style>