<template>
  <div>
    <h1>Part B: Coding & Algorithms</h1>

    <hr />

    <div>
      <h3>1.Implement a groupBy function.</h3>
      
      <div class="container">
        <div class="stats">
          <button class="button-custom" @click="groupData('electronics')">Test Electronics</button>
          <button class="button-custom" @click="groupData('furniture')">Test Furniture</button>
          <button class="button-custom" @click="groupData('fashion')">Test Fashion</button>
          <button class="button-custom" @click="groupData('')">All Data</button>
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
          <button class="button-custom" @click="toggleData('original')">Original Data</button>
          <button class="button-custom" @click="toggleData('clean')">Result Data</button>
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

<style lang="scss" scoped>

  .container { 
    padding: 20px; 
  }


  .button-custom {
    background-color: #04AA6D;
    border: none;
    color: white;
    padding: 7px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 4px;

    &:hover { 
      background-color: #008f54; 
    }
  }


  .stats { 
    display: flex; 
    gap: 10px;
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
