---
description: Planète Terre
tags:
   - Planète tellurique
---

# Terre

<!-- Imports éventuels pour composants à placer juste en dessous -->
import { PlotPie } from "../../src/components/Plot";

La Terre est la troisième planète par ordre d'éloignement au Soleil et la cinquième plus grande du Système solaire aussi bien par la masse que le diamètre. Par ailleurs, elle est le seul objet céleste connu pour abriter la vie. Elle orbite autour du Soleil en 365,256 jours solaires — une année sidérale — et réalise une rotation sur elle-même relativement au Soleil en 23 h 56 min 4 s — un jour sidéral — soit un peu moins que son jour solaire de 24 h du fait de ce déplacement autour du Soleil. L'axe de rotation de la Terre possède une inclinaison de 23°, ce qui cause l'apparition des saisons.

D'après la datation radiométrique, la Terre s'est formée il y a 4,54 milliards d'années. Elle possède un unique satellite naturel, la Lune, qui s'est formée peu après.

![Photographie de la Terre](../../files/Earth_from_Apollo.jpg)

Photographie prise par l'équipage d'Apollo 17 en 1972

## Origine du nom

Le nom de la Terre s'apparente à Terra, déesse romaine de la terre. La Terre est parfois appelée Gaïa, en souvenir de la déesse grecque de la fertilité de la terre et du sol. Du fait de l'étendue des océans et mers, la Terre est aussi surnommée la planète bleue (couleur très visible depuis l'espace).

## L'atmosphère terrestre

L'atmosphère terrestre est l'enveloppe gazeuse, entourant la Terre, que l'on appelle air. L'air sec se compose à 78,087 % de diazote, à 20,95 % de dioxygène, à 0,93 % d'argon, à 0,041 % de dioxyde de carbone, et de traces d'autres gaz.

L'atmosphère protège la vie sur Terre en filtrant le rayonnement solaire ultraviolet, en réchauffant la surface par la rétention de chaleur (effet de serre) et en réduisant partiellement les écarts de température entre le jour et la nuit.

<PlotPie
  title="Composition volumétrique de l'atmosphère"
  width={400}
  height={400}
  hoverinfo="label+percent"
  labels={[
    "Diazote",
    "Dioxygène",
    "Argon",
    "Autres",
  ]}
  values={[78.084, 20.946, 0.934, 0.036 ]}
></PlotPie>

## Pour aller plus loin

:::tip Wikipedia
[Terre](https://fr.wikipedia.org/wiki/Terre)
:::

