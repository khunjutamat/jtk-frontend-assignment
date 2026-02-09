<template>
  <div>
    <h1>Part B: Coding & Algorithms</h1>

    <hr />

    <div>
      <h3>1.Implement a groupBy function.</h3>
      
      <div class="container">
        <div class="stats">
          <button @click="groupData('electronics')">Test Electronics</button>
          <button @click="groupData('furniture')">Test Furniture</button>
          <button @click="groupData('fashion')">Test Fashion</button>
          <button @click="groupData('')">All Data</button>
        </div>
      </div>

      
      <h4 style="text-transform: capitalize;">{{ displayName }} Log Preview:</h4>
      <pre class="code-block">{{ filteredResult }}</pre>


      <hr />

    
      <h3>2.Implement a function to remove duplicate values</h3>

      <div class="container">
        <div class="stats">
          <!-- <p>Original Data: <strong>{{ rawUsers.length }}</strong> items</p>
          <p>Cleaned Data: <strong>{{ resultUsers.length }}</strong> items</p> -->
          <button @click="toggleData('original')">Original Data</button>
          <button @click="toggleData('clean')">Result Data</button>
        </div>

        <div class="display-grid">
          <section>
            <h5 v-if="isOriginal">Result: {{ RAW_USERS.length }} items</h5>
            <h5 v-else>Result: {{ resultUsers.length }} items</h5>
            <pre class="code-block">
              {{ showData }}
            </pre>
          </section>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PRODUCT_LIST, RAW_USERS } from '~/constants/mockData';


/* FILTER
const groupData = (data: any[], type: string) => {
  return data.filter(item =>  item.type === type);
};
*/

// #1
const filteredResult = ref([]);
let typeName = ref('electronics');

onMounted(() => {
  groupData('electronics');
});


const displayName = computed(() => typeName.value ? typeName.value : '' );

const groupData = (type: string) => {
  typeName.value = type || 'All Data';
  // # Call groupBy function in utils/logic.ts #
  const allGroups = groupBy(PRODUCT_LIST, 'type');
  // console.log('allGroups:', allGroups);
  filteredResult.value = allGroups[type] || PRODUCT_LIST;
  console.log(`Results for ${type}:`, filteredResult.value);
};


// #2 
const resultUsers = removeDuplicates(RAW_USERS);
const showData = computed(() => isOriginal.value ? RAW_USERS : resultUsers);

let isOriginal = ref(true);
const toggleData = (type: string) => {
  if(type === 'original') {
    isOriginal.value = true;
  } else {
    isOriginal.value = false;
  }
};

</script>

<style lang="css" scoped>

  .container { padding: 20px; }

  .stats { 
    display: flex; 
    gap: 20px; 
    margin-bottom: 20px; 
    color: #2c3e50; 
  }

  .code-block { 
    background: #f8f9fa; 
    padding: 15px; 
    border-radius: 8px; 
    overflow-y: auto; 
    font-size: 12px;
    max-height: 350px; 
  }


</style>
