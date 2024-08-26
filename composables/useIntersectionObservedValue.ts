type Args = IntersectionObserverCallback extends (...args: infer U) => void ? U : never;
type Callback<T> = (...args: Args) => T;

/**
 * Creates an {@link IntersectionObserver} that observes the {@link elementRef} and invokes
 * the {@link callbackRef} to obtain a value.
 * @param elementRef The {@link Element}, a {@link Ref<T>} to the element, or a getter that returns the element.
 * @param callbackRef The callback to invoke to obtain the value.
 * @returns A ref representing the last return value.
 */
export function useIntersectionObservedValue<TElement extends Element, T>(
  elementRef: MaybeRefOrGetter<TElement | null | undefined>,
  callbackRef: MaybeRef<Callback<T | null>>
): Ref<T | null>;

/**
 * Creates an {@link IntersectionObserver} that observes the {@link elementRef} and invokes
 * the {@link callbackRef} to obtain a value. Returns a ref representing the last return value.
 * @param elementRef The {@link Element}, a {@link Ref<T>} to the element, or a getter that returns the element.
 * @param callbackRef The callback to invoke to obtain the value.
 * @param defaultValue
 * @returns A ref representing the last return value.
 */
export function useIntersectionObservedValue<TElement extends Element, T>(
  elementRef: MaybeRefOrGetter<TElement | null | undefined>,
  callbackRef: MaybeRef<Callback<T>>,
  defaultValue: MaybeRefOrGetter<T>
): Ref<T>;

/**
 * Creates an {@link IntersectionObserver} that observes the {@link elementRef} and invokes
 * the {@link callbackRef} to obtain a value. Returns a ref representing the last return value.
 * @param elementRef The {@link Element}, a {@link Ref<T>} to the element, or a getter that returns the element.
 * @param callbackRef The callback to invoke to obtain the value.
 * @param defaultValue
 * @returns A ref representing the last return value.
 */
export function useIntersectionObservedValue<TElement extends Element, T>(
  elementRef: MaybeRefOrGetter<TElement | null | undefined>,
  callbackRef: MaybeRef<Callback<T>>,
  defaultValue?: MaybeRefOrGetter<T>
) {
  const valueRef = ref<T | undefined>(toValue(defaultValue));

  useIntersectionObserver(elementRef, (...args) => {
    const callback = unref(callbackRef);
    if (typeof callback !== "function") {
      return;
    }

    const result = toValue(callback(...args));
    if (result !== valueRef.value) {
      valueRef.value = result;
    }
  });

  return valueRef;
}
