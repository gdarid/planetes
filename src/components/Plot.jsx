import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { ErrorBoundary } from "./ErrorBoundary";
import BrowserOnly from "@docusaurus/BrowserOnly";
import styles from "./Plot.module.css";


function PlotLoader({ data, children, plotdata }) {
  const isLarge = useMediaQuery("(min-width: 500px)");

  if (!plotdata || !isLarge) return null;

  return (
    <ErrorBoundary>
      <BrowserOnly fallback={<div>Chargement en cours...</div>}>
        {() => {
          const Plot = require("react-plotly.js").default;
          return (
            <figure className={styles.container}>
              <Plot data={plotdata} {...data} />
              {children ? <figcaption className={styles.legend}>{children}</figcaption> : null}
            </figure>
          );
        }}
      </BrowserOnly>
    </ErrorBoundary>
  );
}

/** Composant générique pour un affichage de type pie avec props suivantes
    labels : les libellés (tableau)
    values : les valeurs (tableau)
    title  : le titre
*/
export function PlotPie(props) {
  const { labels: allLabels, values: allValues, children, title, width = 400, height = 400, hoverinfo = "label+value+percent" } = props;

  if (!allLabels || !allValues) return null;

  const plotdata = [
    {
      values: allValues,
      labels: allLabels,
      type: "pie",
      name: "PlotPie",
      domain: { row: 0, column: 0 },
      hoverinfo,
      textinfo: "percent",
      hole: 0.4,
    },
  ];

  const layout = { width, height, title };

  return <PlotLoader data={{ layout }} plotdata={plotdata}>{children}</PlotLoader>;
}