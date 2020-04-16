<template>
  <div>
    <h1>Events</h1>
    <event-card v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import EventCard from '@/components/EventCard.vue'

export default Vue.extend({
  components: {
    EventCard
  },

  async fetch(context: any) {
    try {
      await context.store.dispatch('events/fetchEvents')
    } catch (e) {
      context.error({
        statusCode: 503,
        message: 'Unable to fetch event #' + context.params.id
      })
    }
  },

  computed: mapState({
    events: (state: any) => state.events.events
  }),

  head() {
    return {
      title: 'Event Listing'
    }
  }
})
</script>
