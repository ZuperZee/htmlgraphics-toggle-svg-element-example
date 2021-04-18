import type { TimeRange } from "@grafana/data";
import { createSeries } from "./createSeries";

enum LoadingState {
  NotStarted = "NotStarted",
  Loading = "Loading",
  Streaming = "Streaming",
  Done = "Done",
  Error = "Error",
}

function updateData(): void {
  window.data = {
    state: LoadingState.Done,
    series: [
      createSeries("orange-metric", Math.random() > 0.5 ? 1 : 0),
      createSeries("blue-metric", Math.random() > 0.5 ? 1 : 0),
    ],
    // TODO: add a proper TimeRange stub
    timeRange: {} as TimeRange,
  };
}

export { updateData };
