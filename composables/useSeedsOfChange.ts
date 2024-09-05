export const useSeedsOfChange = () => {
  return useLazyFetch("/api/SeedsOfChange");
};

export default useSeedsOfChange;
