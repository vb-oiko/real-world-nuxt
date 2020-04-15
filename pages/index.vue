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
  asyncData(context) {
    return (context as any).$axios
      .get('http://localhost:3001/events')
      .then((response: any) => {
        return {
          events: response.data
        }
      })
      .catch(() => {
        context.error({
          statusCode: 503,
          message: 'Unable to fetch events this time. Please try again.'
        })
      })
  },

  head() {
    return {
      title: 'Event Listing'
    }
  }
})
</script>
