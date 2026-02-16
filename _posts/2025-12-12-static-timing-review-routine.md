---
title: "A Repeatable Static Timing Review Routine"
date: 2025-12-12
tags:
  - Digital Design
  - STA
  - ASIC Flow
---
A timing report is only useful when reviewed with the same structure every
time. I use a short routine that keeps critical-path analysis readable for
teammates.

## Review sequence

1. Confirm clock definitions and generated-clock relationships.
2. Inspect top setup violations by endpoint group.
3. Inspect top hold violations with emphasis on short data paths.
4. Cross-check transition and fanout outliers before optimization.

## Notes format

```text
[path-id] u_core/u_decode/u_alu/...
type: setup
slack: -0.072 ns
root cause hypothesis: high fanout net + long local route
next action: buffer split + placement refinement
```

That format keeps optimization conversations concrete and avoids jumping to
tool switches before understanding path-level physics.
