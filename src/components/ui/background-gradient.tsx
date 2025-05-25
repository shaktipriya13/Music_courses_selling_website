import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "motion/react";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };

  const gradientStyle = cn(
    "absolute inset-0 rounded-3xl z-[1] will-change-transform",
    "bg-[radial-gradient(circle_farthest-side_at_0_100%,#ff4ecd,transparent),radial-gradient(circle_farthest-side_at_100%_0,#38bdf8,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#a3f636,transparent),radial-gradient(circle_farthest-side_at_0_0,#6366f1,#0f172a)]"
  );

  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          gradientStyle,
          "opacity-60 group-hover:opacity-100 blur-xl transition duration-500"
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={gradientStyle}
      />

      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
