import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { ErrorBoundary } from "./ErrorBoundary";
import BrowserOnly from "@docusaurus/BrowserOnly";
import styles from "./Plot.module.css";

/** Fonction pour afficher un plot (plotly)
 *  Non rendu si largeur insuffisante
 */
function PlotGen(data, children, plotdata) {
  if (!plotdata) return <></>;

  const isLarge = useMediaQuery("(min-width: 500px)");

  if (isLarge) {
    return (
      <ErrorBoundary>
        <BrowserOnly fallback={<div>Chargement en cours...</div>}>
          {() => {
            const Plot = require("react-plotly.js").default;
            return (
              <figure className={styles.container}>
                <Plot data={plotdata} {...data} />
                <figcaption className={styles.legend}>{children}</figcaption>
              </figure>
            );
          }}
        </BrowserOnly>
      </ErrorBoundary>
    );
  }

  return <></>;
}

/** Composant générique pour un affichage de type pie avec props suivantes
    labels : les libellés (tableau)
    values : les valeurs (tableau)
    title  : le titre
*/
export function PlotPie(props) {
  const allLabels = props.labels;
  const allValues = props.values;
  const children = props.children;
  const title = props.title;
  const width = props.width || 400;
  const height = props.height || 400;
  const hoverinfo = props.hoverinfo || "label+value+percent";
  let result;

  try {
    if (!allLabels || !allValues) return <></>;

    const plotdata = [
      {
        values: allValues,
        labels: allLabels,
        type: "pie",
        name: "PlotPie",
        domain: {
          row: 0,
          column: 0,
        },
        hoverinfo: hoverinfo,
        textinfo: "percent",
        hole: 0.4,
      },
    ];

    const data = { layout: { width: width, height: height, title: title } };
    result = PlotGen(data, children, plotdata);
  } catch (error) {
    return <h1>.</h1>;
  }
  return result;
}
