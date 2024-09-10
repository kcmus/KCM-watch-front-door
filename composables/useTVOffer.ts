export const useTVOffer = () => {
  return useLazyFetch("/api/TVOffer");
};

export default useTVOffer;
