# University of Denver Data Analytics: Plotly Homework - Belly Button Biodiversity
<p align="center">
<img width="900" height="400" src="Images/plotly.png">
</p>


## Overview: This assignment involves using JavaScript, D3 and Plotly to create a dashboard [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels. The dataset reveals a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.
---
# Development Toolkit
## JavaScript
## D3
## Plotly
---
## Step 1: Plotly

1. Use the D3 library to read in `samples.json`.

2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.


  ![bar Chart](Images/bar_chart.png)

3. Create a bubble chart that displays each sample.

* Use `otu_ids` for the x values.

* Use `sample_values` for the y values.

* Use `sample_values` for the marker size.

* Use `otu_ids` for the marker colors.

* Use `otu_labels` for the text values.

![Bubble Chart](Images/bubble_chart.png)

4. Display the sample metadata, i.e., an individual's demographic information.

5. Display each key-value pair from the metadata JSON object somewhere on the page.

![hw](Images/demographics.png)

6. Update all of the plots any time that a new sample is selected.



![hw](Images/dash.png)


The following task is advanced and therefore optional.

* Adapt the Gauge Chart from <https://plot.ly/javascript/gauge-charts/> to plot the weekly washing frequency of the individual.



* Update the chart whenever a new sample is selected.

![Weekly Washing Frequency Gauge](Images/gauge_chart.png)


