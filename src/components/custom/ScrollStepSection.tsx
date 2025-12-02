import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Step {
  title: string;
  description: string;
  image: string;
}

interface Props {
  steps: Step[];
}

export default function ScrollStepSection({ steps }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Map scroll progress to step index
  const stepIndex = useTransform(scrollYProgress, (value: number) => {
    const index = Math.floor(value * steps.length);
    return Math.min(Math.max(index, 0), steps.length - 1);
  });

  return (
    <div ref={ref} className="relative h-[500vh] w-full">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <motion.div
          key={JSON.stringify(steps)}
          className="grid grid-cols-1 md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_3fr] gap-6 w-full"
        >
          {/* LEFT SIDE — HEADER & BUTTON */}
          <div className="flex flex-col gap-16 md:my-36 xl:pl-24">
            <h3 className="font-bold font-charter text-2xl sm:text-4xl">
              Built for <br className="hidden sm:block" /> Real Business
            </h3>
            <a
              className="primary-button hidden sm:block"
              href="https://docs.fairblock.network/docs/ConfidentialStablecoins"
              rel="noopener noreferrer"
              target="_blank"
            >
              See More Use Cases
            </a>
          </div>

          {/* RIGHT SIDE — CARD AREA (YOUR RED BOX) */}
          <div className="relative h-32 md:h-full w-full rounded-xl overflow-hidden">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  opacity: useTransform(stepIndex, (cur: number) =>
                    cur === i ? 1 : 0
                  ),
                  y: useTransform(stepIndex, (cur: number) =>
                    cur === i ? 0 : 30
                  ),
                  transition: "opacity, transform",
                }}
              >
                <div className="border border-primary-blue flex items-center rounded-xl max-w-[840px]">
                  <div className="p-8 w-1/2">
                    <h3 className="font-charter font-bold mb-4 text-xl sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="font-sf-pro-display text-lg sm:text-xl">
                      {step.description}
                    </p>
                  </div>
                  <img
                    className="rounded-tr-xl rounded-br-xl w-1/2"
                    src={step.image}
                    alt={step.title}
                  />
                </div>
              </motion.div>
            ))}

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
              {steps.map((_, i) => (
                <motion.div
                  key={i}
                  onClick={() => {
                    const target = i / steps.length;
                    window.scrollTo({
                      top:
                        ref.current!.offsetTop +
                        target * ref.current!.offsetHeight,
                      behavior: "smooth",
                    });
                  }}
                  className="bg-gray-300 cursor-pointer rounded-full h-1 w-8"
                  style={{
                    backgroundColor: useTransform(stepIndex, (cur) =>
                      cur === i ? "#58BDF6" : "#d1d5db"
                    ),
                    scale: useTransform(stepIndex, (cur) =>
                      cur === i ? 1.3 : 1
                    ),
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
