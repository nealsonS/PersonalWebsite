"use client";

import { Progress as ProgressPrimitive } from "@base-ui/react/progress";
import { cn } from "@/lib/utils";

function Progress({
  className,
  children,
  value,
  min = 0,
  max = 100,
  orientation = "horizontal",
  ...props
}: ProgressPrimitive.Root.Props & {
  orientation?: "horizontal" | "vertical";
}) {
  const vertical = orientation === "vertical";
  const percentage =
    value === null || max <= min
      ? 0
      : Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100));

  return (
    <ProgressPrimitive.Root
      value={value}
      min={min}
      max={max}
      data-orientation={orientation}
      data-slot="progress"
      className={cn(
        "flex flex-wrap gap-3",
        vertical && "w-0.5 flex-col flex-nowrap gap-0",
        className,
      )}
      {...props}
    >
      {children}
      <ProgressTrack
        className={
          vertical
            ? "min-h-0 flex-1 items-start overflow-hidden bg-sidebar-border"
            : undefined
        }
      >
        <ProgressIndicator
          className={
            vertical ? "bg-sidebar-primary transition-none" : undefined
          }
          // Base UI supplies inline horizontal dimensions; override both here.
          style={
            vertical ? { width: "100%", height: `${percentage}%` } : undefined
          }
        />
      </ProgressTrack>
    </ProgressPrimitive.Root>
  );
}

function ProgressTrack({ className, ...props }: ProgressPrimitive.Track.Props) {
  return (
    <ProgressPrimitive.Track
      className={cn(
        "relative flex h-1 w-full items-center overflow-x-hidden rounded-full bg-muted",
        className,
      )}
      data-slot="progress-track"
      {...props}
    />
  );
}

function ProgressIndicator({
  className,
  ...props
}: ProgressPrimitive.Indicator.Props) {
  return (
    <ProgressPrimitive.Indicator
      data-slot="progress-indicator"
      className={cn("h-full bg-primary transition-all", className)}
      {...props}
    />
  );
}

function ProgressLabel({ className, ...props }: ProgressPrimitive.Label.Props) {
  return (
    <ProgressPrimitive.Label
      className={cn("text-sm font-medium", className)}
      data-slot="progress-label"
      {...props}
    />
  );
}

function ProgressValue({ className, ...props }: ProgressPrimitive.Value.Props) {
  return (
    <ProgressPrimitive.Value
      className={cn(
        "ml-auto text-sm text-muted-foreground tabular-nums",
        className,
      )}
      data-slot="progress-value"
      {...props}
    />
  );
}

export {
  Progress,
  ProgressTrack,
  ProgressIndicator,
  ProgressLabel,
  ProgressValue,
};
