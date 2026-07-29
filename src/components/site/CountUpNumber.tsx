import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

type CountUpNumberProps = {
  target: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
};

export function CountUpNumber({
  target,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1.5,
}: CountUpNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate: setValue,
    });
    return () => controls.stop();
  }, [isInView, target, duration]);

  const formatted = value.toLocaleString("id-ID", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
