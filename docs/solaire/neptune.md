---
description: Planète Neptune
tags:
   - Planète géante de glaces
---

# Neptune

<!-- Imports éventuels pour composants à placer juste en dessous -->
import { PlotPie } from "../../src/components/Plot";

Neptune est la huitième planète par ordre d'éloignement au Soleil et la plus éloignée connue du Système solaire.

Elle orbite autour du Soleil à une distance d'environ 30,1 UA (4,5 milliards de kilomètres), avec une excentricité orbitale moitié moindre que celle de la Terre et une période de révolution de 164,79 ans.

Il s'agit de la troisième planète la plus massive du Système solaire et de la quatrième plus grande par la taille — un peu plus massive mais un peu plus petite qu'Uranus. Par ailleurs, elle est la planète géante la plus dense.

![Vue de Neptune](../../files/Neptune.jpg)

Vue de Neptune avec Protée (en haut), Larissa (en bas à droite) et Despina (à gauche), depuis le télescope spatial Hubble

## Origine du nom

La planète porte le nom de Neptune, dieu des mers dans la mythologie romaine, et a pour symbole astronomique ♆, une version stylisée du trident du dieu.

## L'atmosphère

L'atmosphère de Neptune est proche de celle d'Uranus et représente entre 5 et 10 % de la masse de la planète.
Elle est composée principalement d'hydrogène (H2) pour 85 %, d'hélium (He) pour 13 % et de méthane (CH4) pour 2 %.

<PlotPie
  title="Composition volumétrique de l'atmosphère"
  width={400}
  height={400}
  hoverinfo="label+percent"
  labels={[
    "Dihydrogène",
    "Hélium",
    "Méthane",
  ]}
  values={[85.0, 13.0, 2.0 ]}
></PlotPie>

## Pour aller plus loin

:::tip Wikipedia
[Neptune](https://fr.wikipedia.org/wiki/Neptune_(planète))
:::


