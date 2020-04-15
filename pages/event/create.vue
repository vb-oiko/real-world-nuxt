<template>
  <div>
    <h1>Create an Event</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head() {
    return {
      title: 'Create an Event',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Where you can create a new event taking place in yuor neighborhood'
        }
      ]
    }
  }
})
</script>
