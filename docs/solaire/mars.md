---
description: Planète Mars
tags:
   - Planète tellurique
---

# Mars

<!-- Imports éventuels pour composants à placer juste en dessous -->
import { PlotPie } from "../../src/components/Plot";

Mars est la quatrième planète du Système solaire par ordre croissant de la distance au Soleil. Son éloignement au Soleil est compris entre 1,381 et 1,666 UA (206,6 à 249,2 millions de kilomètres), avec une période orbitale de 686,71 jours ou 1,88 année terrestre.

C’est une planète tellurique, comme le sont Mercure, Vénus et la Terre, environ dix fois moins massive que la Terre mais dix fois plus massive que la Lune. 

![](../../files/OSIRIS_Mars.jpg)  
Photographie de la planète Mars en vraies couleurs, prise en 2007 par l'instrument OSIRIS de la sonde Rosetta

## Origine du nom

Mars est nommée d'après l'ancien dieu romain de la guerre, parce qu'elle est rouge comme le sang.

Le symbole astronomique de Mars est un cercle portant une flèche pointant vers le nord-est (Unicode : ♂).
Ce symbole est une représentation stylisée du bouclier et de la lance du dieu Mars.

## L'atmosphère

Mars possède une atmosphère ténue dont la pression moyenne au niveau de référence martien est par définition de 610 Pa, avec une température moyenne de 210 K (−63 °C). 
Elle est composée principalement de dioxyde de carbone CO2 (96,0 ± 0,7 %), d'argon Ar (1,93 ± 0,01 %) et de diazote N2 (1,89 ± 0,03 %). Viennent ensuite le dioxygène O2 (0,145 ± 0,009 %), le monoxyde de carbone CO (< 0,1 %), la vapeur d'eau H2O (0,03 %) et le monoxyde d'azote NO (0,013 %).

<PlotPie
  title="Composition volumétrique de l'atmosphère"
  width={400}
  height={400}
  hoverinfo="label+percent"
  labels={[
    "Dioxyde de carbone",
    "Argon",     
    "Diazote",
    "Dioxygène",
    "Monoxyde de carbone",
    "Vapeur d'eau",
  ]}
  values={[96.0, 1.93, 1.89, 0.14, 0.07, 0.03]}
></PlotPie>


## Pour aller plus loin

:::tip Wikipedia
[Mars](https://fr.wikipedia.org/wiki/Mars_(planète))  
:::

