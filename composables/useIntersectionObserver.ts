const isSupported = () =>
  import.meta.client &&
  "IntersectionObserver" in window &&
  "IntersectionObserverEntry" in window &&
  "intersectionRatio" in window.IntersectionObserverEntry.prototype;

/**
 * Creates an {@link IntersectionObserver} that observes the {@link elementRef} and invokes
 * the {@link callbackRef} on changes.
 * @param elementRef The {@link Element}, a {@link Ref<T>} to the element, or a getter that returns the element.
 * @param callbackRef
 * @returns a ref whose value is the {@link IntersectionObserver} instance.
 */
export const useIntersectionObserver = <TElement extends Element>(
  elementRef: MaybeRefOrGetter<TElement | null | undefined>,
  callbackRef: MaybeRef<IntersectionObserverCallback>
) => {
  const observerRef = ref<IntersectionObserver | null>(null);

  if (import.meta.client) {
    watchSyncEffect((onCleanup) => {
      const element = toValue(elementRef) ?? null;

      if (!observerRef.value) {
        if (!element || !isSupported()) {
          return;
        }

        observerRef.value = new IntersectionObserver((...args) => {
          const callback = unref(callbackRef);
          if (typeof callback === "function") {
            callback(...args);
          }
        });

        onCleanup(() => {
          observerRef.value?.disconnect();
          observerRef.value = null;
        });
      }

      if (element) {
        observerRef.value.observe(element);
      }
    });
  }

  return observerRef;
};
