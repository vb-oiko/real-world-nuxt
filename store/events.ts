import EventService from '@/services/EventService'

export const state = () => ({
  events: [],
  event: {}
})

export const mutations = {
  SET_EVENTS(state: any, events: any) {
    state.events = events
  },

  SET_EVENT(state: any, event: any) {
    state.event = event
  }
}

export const actions = {
  async fetchEvents({ commit }: { commit: Function }) {
    const response: any = await EventService.getEvents()
    if (response && response.data) {
      commit('SET_EVENTS', response.data)
    }
    return response
  },

  async fetchEvent({ commit }: { commit: Function }, id: string) {
    const response: any = await EventService.getEvent(id)
    if (response && response.data) {
      commit('SET_EVENT', response.data)
    }
    return response
  }
}
