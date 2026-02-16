---
title: "Introduction to Verilog for IC Design"
date: 2026-02-15
---

Verilog is a hardware description language (HDL) used to model electronic systems. In this post I explain the basics of Verilog syntax and demonstrate how simple logic circuits can be coded and simulated. Topics include modules, nets vs. registers, always blocks, and test benches.

```verilog
module half_adder(
  input a,
  input b,
  output sum,
  output carry
);
  assign sum = a ^ b;
  assign carry = a & b;
endmodule
```

Stay tuned for future posts where I explore synthesis and FPGA implementation.