<template>
    <div class="btn-container">
        <button class="toggle-btn" @click="toggleSort">
            <span>Sort Age: {{ isDescending ? 'High to Low' : 'Low to High' }}</span>
            <span>{{ isDescending ? '↓' : '↑' }}</span>
        </button>
    </div>

    <table class="data-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in sortedUsers" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.age }}</td>
          <td>{{ user.role }}</td>
        </tr>
      </tbody>
    </table>
</template>



<script>
export default {
//   props: ['users'],
  props: {
    users : {
        type: Array,
        required: true,
    }
  },
  data () {
    return {
        isDescending: false,
    }
  },
  computed: {
    // sorting data by AGE
    sortedUsers() {
        const data = [...this.users]; // copy data from users array (props)
        return data.sort((a, b) => {
            return this.isDescending ? b.age - a.age : a.age - b.age;
      });
    },

  },
  methods: {
    toggleSort() {
        this.isDescending = !this.isDescending;
    },
  },
}
</script>


<style lang="css">

.data-table {
    justify-self: center;

    td, th {
      border: 0px solid #ddd;
      padding: 8px;
      font-size: 12px;
    }

    tr:nth-child(even){background-color: #f2f2f2;}

    tr:hover {background-color: #ddd;}

    th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
      background-color: #04AA6D;
      color: white;
    }
}


.btn-container {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}


.toggle-btn {
  background: #04AA6D;
  color: #fff;
  border: none;
  padding: 10px 24px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.toggle-btn:hover {
    background-color: #008f54; 
}


</style>