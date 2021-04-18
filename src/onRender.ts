import { getMetricValueFromName } from "@gapit/grafana-metric";

for (const rectangleProps of customProperties.rectangles) {
  const { selector, metric, hideOnValue } = rectangleProps;

  const rectangleElement = htmlNode.querySelector<SVGRectElement>(selector);

  // Throw an error if the element doesn't exist
  if (!rectangleElement)
    throw new Error(`Could not find element with selector ${selector}`);

  // Get the metric value from the name (alias) which is set in the query
  const metricValue = getMetricValueFromName(metric);

  // If the metricValue is equal to the hideOnValue (1) then hide the element
  rectangleElement.style.display =
    metricValue === hideOnValue ? "none" : "inline";
}
