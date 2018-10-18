// from data.js
var tableData = data;

var button = d3.select("#filter-btn");

button.on("click", function() {
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(dt => dt.datetime === inputValue);
    console.log(filteredData)

    var tableID = d3.select(".ufo-table");

    // var tr = d3.select("#ufo-table").select("tbody")
        // .selectAll("tr")
        // .data([["Hello","Hello","Hello","Hello","Hello","Hello","Hello"]])
        // // .enter().append("tr")

    // var td = tr.selectAll("td")
    //     .data(function(d) {return d;})
    //     .enter().append("td")
    //         .text(function(d) {return d;});
    for (i = 0; i < filteredData.length; i++) {
        var tdData = d3.select("#ufo-table").select("tbody").append("tr");
        tdData.append("td").text(filteredData[i].datetime);
        tdData.append("td").text(filteredData[i].city);
        tdData.append("td").text(filteredData[i].state);
        tdData.append("td").text(filteredData[i].country);
        tdData.append("td").text(filteredData[i].shape);
        tdData.append("td").text(filteredData[i].durationMinutes);
        tdData.append("td").text(filteredData[i].comments);
    }
});
