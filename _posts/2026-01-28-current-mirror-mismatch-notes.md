---
title: "Current Mirror Mismatch Notes from Monte Carlo Runs"
date: 2026-01-28
tags:
  - Analog IC
  - SPICE
  - Monte Carlo
---
Mismatch analysis gets useful only when the setup is consistent. I now save one
template testbench per topology and vary only geometry and bias points between
runs.

## What changed my results

- I stopped comparing absolute currents first and started comparing percent
  error distributions.
- I tracked temperature corners alongside process corners in a single summary.
- I annotated each run with layout intent (common centroid, interdigitation,
  shared guard ring).

## Measurement snapshot

```text
Mirror Type: PMOS cascode
Target Current: 100 uA
PVT: TT, 1.2 V, 27 C
Monte Carlo Samples: 500
Mean Error: 0.84%
3-sigma Error: 3.27%
```

<figure>
  <img src="{{ '/assets/img/logo-placeholder.svg' | relative_url }}" alt="Placeholder figure for mismatch histogram">
  <figcaption>Placeholder figure location for mismatch histogram output.</figcaption>
</figure>

The next step is correlating these mismatch statistics with extracted layout
parasitics to separate device mismatch effects from routing imbalance.
