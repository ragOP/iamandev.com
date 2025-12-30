import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * ✅ Always-on Effects:
 * - Shimmer (moving light sweep)
 * - Glow pulse (breathing glow)
 * - Shake (subtle constant jitter)
 *
 * Notes:
 * - Uses ::before for shimmer overlay
 * - Uses filter drop-shadow + animation for glow
 * - Shake uses tiny translate/rotate changes
 */

const buttonVariants = cva(
  [
    "relative overflow-hidden", // needed for shimmer overlay
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold",
    "transition-all duration-300",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    "active:scale-95",
    "will-change-transform", // smoother shake
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:bg-destructive/90",
        outline:
          "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:bg-secondary/90",
        ghost: "text-foreground hover:bg-muted hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",

        /**
         * ✅ Add always-on shimmer + glow + shake here
         * You can remove "btn-shake" if you want only shimmer/glow.
         */
        hero:
          "bg-gradient-primary text-primary-foreground shadow-lg btn-shimmer btn-glow btn-shake",
        heroOutline:
          "border-2 border-foreground/20 bg-transparent text-foreground hover:border-primary hover:text-primary hover:bg-primary/5",
        glass:
          "bg-background/50 backdrop-blur-lg border border-border/50 text-foreground hover:bg-background/80 hover:border-primary/50",
        instagram:
          "bg-gradient-instagram text-primary-foreground shadow-lg btn-shimmer btn-glow btn-shake",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-md px-4 text-xs",
        lg: "h-14 rounded-xl px-10 text-base",
        xl: "h-16 rounded-xl px-12 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;

  /**
   * Optional toggles (if you want to control per button)
   * If you don't need, you can delete these props.
   */
  shimmer?: boolean;
  glow?: boolean;
  shake?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      shimmer,
      glow,
      shake,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    // Optional: allow forcing effects on any button:
    const effectClasses = cn(
      shimmer ? "btn-shimmer" : "",
      glow ? "btn-glow" : "",
      shake ? "btn-shake" : ""
    );

    return (
      <>
        <Comp
          className={cn(buttonVariants({ variant, size, className }), effectClasses)}
          ref={ref}
          {...props}
        />
        {/* ✅ Local CSS (keep inside component file) */}
        <style>{`
          /* =========================
             ALWAYS-ON SHIMMER
             ========================= */
          .btn-shimmer::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            /* Shimmer streak */
            background: linear-gradient(
              120deg,
              rgba(255,255,255,0) 0%,
              rgba(255,255,255,0.22) 18%,
              rgba(255,255,255,0.55) 28%,
              rgba(255,255,255,0.22) 38%,
              rgba(255,255,255,0) 60%
            );
            transform: translateX(-140%) skewX(-18deg);
            animation: btnShimmer 1.35s linear infinite;
            mix-blend-mode: screen;
            opacity: 1;
          }

          @keyframes btnShimmer {
            0% {
              transform: translateX(-160%) skewX(-18deg);
              opacity: 0.95;
            }
            35% {
              opacity: 1;
            }
            100% {
              transform: translateX(160%) skewX(-18deg);
              opacity: 0.95;
            }
          }

          /* =========================
             ALWAYS-ON GLOW (PULSE)
             ========================= */
          .btn-glow {
            position: relative;
            /* a little extra pop */
            filter: drop-shadow(0 10px 22px rgba(255,255,255,0.10));
            animation: btnGlowPulse 1.1s ease-in-out infinite;
          }

          @keyframes btnGlowPulse {
            0%, 100% {
              filter:
                drop-shadow(0 10px 22px rgba(255,255,255,0.10))
                drop-shadow(0 0 0px rgba(255,255,255,0.0));
            }
            50% {
              filter:
                drop-shadow(0 14px 30px rgba(255,255,255,0.16))
                drop-shadow(0 0 18px rgba(255,255,255,0.22));
            }
          }

          /* =========================
             ALWAYS-ON SHAKE (STRONGER)
             - small jitter with rotate
             - still readable / not annoying
             ========================= */
          .btn-shake {
            animation: btnShake 0.42s ease-in-out infinite;
          }

          @keyframes btnShake {
            0%   { transform: translate3d(0px, 0px, 0) rotate(0deg); }
            10%  { transform: translate3d(-0.6px, 0.3px, 0) rotate(-0.25deg); }
            20%  { transform: translate3d(0.5px, -0.4px, 0) rotate(0.22deg); }
            30%  { transform: translate3d(-0.4px, -0.2px, 0) rotate(-0.18deg); }
            40%  { transform: translate3d(0.6px, 0.4px, 0) rotate(0.26deg); }
            50%  { transform: translate3d(-0.3px, 0.2px, 0) rotate(-0.16deg); }
            60%  { transform: translate3d(0.4px, -0.3px, 0) rotate(0.20deg); }
            70%  { transform: translate3d(-0.55px, 0.35px, 0) rotate(-0.24deg); }
            80%  { transform: translate3d(0.35px, 0.25px, 0) rotate(0.16deg); }
            90%  { transform: translate3d(-0.25px, -0.25px, 0) rotate(-0.12deg); }
            100% { transform: translate3d(0px, 0px, 0) rotate(0deg); }
          }

          /* Respect reduced motion */
          @media (prefers-reduced-motion: reduce) {
            .btn-shimmer::before,
            .btn-glow,
            .btn-shake {
              animation: none !important;
            }
          }
        `}</style>
      </>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
