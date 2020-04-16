<template>
  <div>
    <h1>Events</h1>
    <event-card v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import EventCard from '@/components/EventCard.vue'

export default Vue.extend({
  components: {
    EventCard
  },

  async asyncData(context: any) {
    const { data } = await context.$axios
      .get('http://localhost:3001/events')
      .catch(() => {
        context.error({
          statusCode: 503,
          message: 'Unable to fetch events this time. Please try again.'
        })
      })

    return {
      events: data
    }
  },

  head() {
    return {
      title: 'Event Listing'
    }
  }
})
</script>
