$(document).ready(function() {
  
  var dataURL = "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json";
  
  $.getJSON(dataURL).success(function(dataJSON) {
     
    var data = dataJSON.data;
    
    var canvas = d3.select("body").append("svg")
                  .attr("width", 1200)
                  .attr("height", 450)
                  .append("g")
                  .attr("transform", "translate(50, 45)");
    
   
    var bars = canvas.selectAll("rect")
                .data(data)
                .enter()
                .append("rect")
                
                .attr("width", 3)
                .attr("height", function(d, i) { 
                return d[1]/50;
                })
                .attr("x", function(d, i) { return i * 4; })
                .attr("y", 0)
                .attr("fill", "teal")
                 .on("mouseover", function(d, i) { 
                  d3.select(this).attr("fill", "#f44336");
                   $("h3").text(d[0] + " - " +"$ " +d[1]+ " Billion")
                })
      
                .on("mouseout", function(d) {
                  d3.select(this).attr("fill", "teal");
                   $("h3").text("Gross Domestic Population")
                });
    
    
  }); //json
}); //ready function