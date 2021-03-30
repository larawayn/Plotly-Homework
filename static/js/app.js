// Pull in JSON data and fill drop down list
var path = '../../data/samples.json';
d3.json(path).then(function (data) {
  // console.log(data)

  var names = Object.values(data.names);
  var dropDownlist = document.getElementById('selDataset');
  for (i = 0; i < names.length; i++) {
    dropDownlist.options[i] = new Option(names[i]);
  };
});

// Initialize plots
function init() {
  buildPlots('940');
}

init();

//Change plot when option changes
function optionChanged() {
  var dropDownMenu = d3.select('#selDataset');
  var dataset = dropDownMenu.node().value;
  // console.log(dataset);
  buildPlots(dataset);
};

optionChanged();

//Unpack data
function unpack(rows, index) {
  return rows.map(function (row){
    return row[index];
  });
};

//Update plotly and retrieve JSON data
function buildPlots(id) {
  var path = '../../data/samples.json';
  d3.json(path).then(function (data) {
    // console.log(data);

//Assign data for metadata
    var metaData = data.metadata
    console.log(metaData)

    var newMetaData = metaData.filter(record => record.id == id);
    var demographics = Object.entries(newMetaData[0])
    console.log(demographics)
    

    var updatedMetaData = demographics.map(element => element.join(' : '))

    d3.select('#sample-metadata>ul').remove(); 

    //create a list of subject's demographic data
    var demogList = d3.select('#sample-metadata').append('ul'); 

    // append demographic info to metadata panel
    updatedMetaData.forEach(element => {var items = demogList.append('li')
      items.text(`${element}`)
  })



    //Assign data for plots
      var samples = data.samples;
      console.log(samples);
      console.log(id);

      var newData = samples.filter(record => record.id == id);
      console.log(newData);

      var newSampleValues = newData[0].sample_values;
      console.log(newSampleValues)
      var newOtuLabels = newData[0].otu_labels;
      var newOtuIds = newData[0].otu_ids;

      var updatedOtuIds = []

      Object.values(newOtuIds).forEach(element => {
        var ids = (`OTU: ${element}`);
        updatedOtuIds.push(ids)
        
      });
      console.log(updatedOtuIds)


  // Create trace for bar chart
      var trace1 = {
        y: updatedOtuIds.slice(0,10).reverse(),
        x: newSampleValues.slice(0,10).reverse(),
        type: 'bar',
        hovertext: newOtuLabels,
        orientation: 'h'
      }

      var data = [trace1];

  // Create layout for bar chart
      var layout = {
        title: 'Bellylbutton Bacteria Info by ID',
        xaxis: {title:'Sample Values'},
        yaxis: {title:'Taxonomy ID'}
      }

  // Plot bar chart
      Plotly.newPlot('bar', data, layout)
    





  // Create trace for bubble chart   
      var trace2 = {
        x: newOtuIds,
        y: newSampleValues,
        mode: "markers",
        marker: {
            size: newSampleValues,
            color: newOtuIds, 
            colorscale: 'Electric'
          
        },
        text: newOtuLabels
      };

      var data2 = [trace2];

  // Create layout for bubble chart  
      var layout2 = {
        title: `Bubble Plot`,
        showlegend: false,
        height: 800,
        width: 1200,
        
        
      };

  // Plot bubble chart    
      Plotly.newPlot('bubble', data2, layout2)


  // Create variable for gauge chart
      var data3 = [
        {
          value: newMetaData[0]['wfreq'],
          title: { text: "Belly Button Washing Frequency" },
          type: "indicator",
          mode: "gauge+number",
          gauge: {
            axis: { range: [null, 9], tickwidth: 1, tickcolor: "darkblue" },
            bar: { color: "darkblue" },
            bgcolor: "white",
            borderwidth: 2,
            bordercolor: "gray",
            steps: [
              { range: [0, 1], color: "lightblue" },
              { range: [1, 2], color: "royalblue" },
              { range: [2, 3], color: "cyan" },
              { range: [3, 4], color: "royalblue" },
              { range: [4, 5], color: "cyan" },
              { range: [5, 6], color: "royalblue" },
              { range: [6, 7], color: "cyan" },
              { range: [7, 8], color: "royalblue" },
              { range: [8, 9], color: "royalblue" },
            ],
        }
      }];

      var layout3 = { width: 600, height: 500, margin: { t: 0, b: 0 } };
      Plotly.newPlot('gauge', data3, layout3);





    });
};


  

  