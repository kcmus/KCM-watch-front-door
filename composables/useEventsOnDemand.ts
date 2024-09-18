const useEventsOnDemand = () => {
      return useLazyFetch("/api/EventsOnDemand")
}

export default useEventsOnDemand;