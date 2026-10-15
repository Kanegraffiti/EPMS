import { useEffect, useRef, useState } from "react";
export default function ScrollReveal({ children, className = "", delay = 0 }) {
  const node = useRef(null);
  const [shown, setShown] = useState(() =>
    typeof window === "undefined" || !window.IntersectionObserver || window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches,
  );
  useEffect(() => {
    if (shown || !node.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setShown(true); observer.disconnect(); }
    }, { threshold: 0.08 });
    observer.observe(node.current);
    return () => observer.disconnect();
  }, [shown]);
  return <div ref={node} style={{ transitionDelay: `${Math.max(0, delay)}ms` }}
    className={`motion-reduce:!transition-none transition-all duration-700 ease-out ${shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${className}`}>
    {children}
  </div>;
}
