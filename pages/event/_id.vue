<template>
  <div>
    <h1>{{ event.title }}</h1>
    <event-card :event="event" />
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
    const response = await context.$axios
      .get('http://localhost:3001/events/' + context.params.id)
      .catch(() => {
        context.error({
          statusCode: 503,
          message: 'Unable to fetch event #' + context.params.id
        })
      })

    if (response && response.data) {
      return {
        event: response.data
      }
    }

    context.error({
      statusCode: 404,
      message: 'Unable to find event #' + context.params.id
    })
  },

  head() {
    return {
      title: (this as any).event.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'What you need to know about event: ' + (this as any).event.title
        }
      ]
    }
  }
})
</script>
