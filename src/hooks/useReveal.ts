import { useEffect, useRef } from "react";

/**
 * Adds 'in' class when the element enters the viewport.
 * Returns a ref you attach to the element you want to animate.
 */
export default function useReveal<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          el.classList.add("in");
          // if you want it to re-trigger on re-enter, comment the next line:
          io.unobserve(el);
        }
      });
    }, { threshold: 0.14, ...options });

    io.observe(el);
    return () => io.disconnect();
  }, [options]);

  return ref;
}
