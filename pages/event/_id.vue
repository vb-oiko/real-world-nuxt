<template>
  <div>
    <h1>Event #{{ id }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    id(): string {
      return this.$route.params.id
    }
  },

  head() {
    return {
      title: 'Event #' + this.id,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'What you need to know about event #' + this.id
        }
      ]
    }
  }
})
</script>
