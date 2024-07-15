---
layout: calculator
title: Seed Calculator
calculation_function: customCalculation
custom_js: /assets/js/custom_calculations.js
---

<label for="seed">Seed: </label>
<input type="number" id="seed" name="seed" step="1" min="0" max="1000" placeholder="Enter Seed" required>

<label for="xmin">X Min:</label>
<input type="number" id="xmin" name="xmin" min="0.0" max="1.0" value="0.0" required>

<label for="xmax">X Max:</label>
<input type="number" id="xmax" name="xmax" min="0.0" max="1.0" value="1.0" required>

<label for="ymin">Y Min:</label>
<input type="number" id="ymin" name="ymin" min="0.0" max="1.0" value="0.0" required>

<label for="ymax">Y Max:</label>
<input type="number" id="ymax" name="ymax" min="0.0" max="1.0" value="1.0" required>

<label for="rmin">R Min:</label>
<input type="number" id="rmin" name="rmin" min="0.0" max="360.0" value="0.0" required>

<label for="rmax">R Max:</label>
<input type="number" id="rmax" name="rmax" min="0.0" max="360.0" value="360.0" required>
