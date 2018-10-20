// from data.js
var tableData = data;

var allData = tableData.map(function(d){return d});
var mapDate = tableData.map(function(d){return d.datetime});
var mapCity = tableData.map(function(d){return d.city});
var mapState = tableData.map(function(d){return d.state});
var mapCountry = tableData.map(function(d){return d.country});
var mapShape = tableData.map(function(d){return d.shape});
var mapDuration = tableData.map(function(d){return d.durationMinutes});
var mapComment = tableData.map(function(d){return d.comments});

var filterButton = d3.select("#filter-btn");
var dateButton = d3.select("#date");
var cityButton = d3.select("#city");
var stateButton = d3.select("#state");
var countryButton = d3.select("#country");
var shapeButton = d3.select("#shape");
var durationButton = d3.select("#duration");
var commentButton = d3.select("#comment");

for (i = 0; i < allData.length; i++) {
    var tdData = d3.select("#ufo-table").select("tbody").append("tr");
    tdData.append("td").text(allData[i].datetime);
    tdData.append("td").text(allData[i].city);
    tdData.append("td").text(allData[i].state);
    tdData.append("td").text(allData[i].country);
    tdData.append("td").text(allData[i].shape);
    tdData.append("td").text(allData[i].durationMinutes);
    tdData.append("td").text(allData[i].comments);
};

function unique(data){
    uniqueValues = []
    for (i=0; i < data.length; i++){
        if (uniqueValues.includes(data[i]) === false) {
            uniqueValues.push(data[i])
        };
    };
    return uniqueValues;
};

function filter(iElement, dElement) {
    d3.select("tbody").remove();
    d3.select("#ufo-table").append("tbody");

    var filteredData = tableData.filter(dt => dt[dElement] === iElement);

    var tableID = d3.select(".ufo-table");

    for (i = 0; i < filteredData.length; i++) {
        var tdData = d3.select("#ufo-table").select("tbody").append("tr");
        tdData.append("td").text(filteredData[i].datetime);
        tdData.append("td").text(filteredData[i].city);
        tdData.append("td").text(filteredData[i].state);
        tdData.append("td").text(filteredData[i].country);
        tdData.append("td").text(filteredData[i].shape);
        tdData.append("td").text(filteredData[i].durationMinutes);
        tdData.append("td").text(filteredData[i].comments);
    };
};

filterButton.on("click", function(){
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime").property("value");
    var dataElement = "datetime"
    filter(inputElement, dataElement);
    console.log(inputElement)
});

dateButton.on("click", function(){
    var uniqueData = unique(mapDate);
    var aDate = d3.select("#dateMenu");
    d3.selectAll(".dropdown-item").remove();

    for (i = 0; i < uniqueData.length; i++) {
        aDate.append("a").attr("class","dropdown-item").attr("href","#").text(uniqueData[i]);
    };

    d3.selectAll(".dropdown-item").on("click", function(){
        console.log(d3.select(this).text())
        var inputElement = d3.select(this).text()
        var dataElement = "datetime";
        filter(inputElement, dataElement)
    });
});

cityButton.on("click", function(){
    var uniqueData = unique(mapCity);
    var aCity = d3.select("#cityMenu");
    d3.selectAll(".dropdown-item").remove();

    for (i = 0; i < uniqueData.length; i++) {
        aCity.append("a").attr("class","dropdown-item").attr("href","#").text(uniqueData[i]);
    };

    d3.selectAll(".dropdown-item").on("click", function(){
        console.log(d3.select(this).text())
        var inputElement = d3.select(this).text()
        var dataElement = "city";
        filter(inputElement, dataElement)
    });
});

stateButton.on("click", function(){
    var uniqueData = unique(mapState);
    var aState = d3.select("#stateMenu");
    d3.selectAll(".dropdown-item").remove();

    for (i = 0; i < uniqueData.length; i++) {
        aState.append("a").attr("class","dropdown-item").attr("href","#").text(uniqueData[i]);
    };

    d3.selectAll(".dropdown-item").on("click", function(){
        console.log(d3.select(this).text())
        var inputElement = d3.select(this).text()
        var dataElement = "state";
        filter(inputElement, dataElement)
    });
});

countryButton.on("click", function(){
    var uniqueData = unique(mapCountry);
    var aCountry = d3.select("#countryMenu");
    d3.selectAll(".dropdown-item").remove();

    for (i = 0; i < uniqueData.length; i++) {
        aCountry.append("a").attr("class","dropdown-item").attr("href","#").text(uniqueData[i]);
    };

    d3.selectAll(".dropdown-item").on("click", function(){
        console.log(d3.select(this).text())
        var inputElement = d3.select(this).text()
        var dataElement = "country";
        filter(inputElement, dataElement)
    });
});

shapeButton.on("click", function(){
    var uniqueData = unique(mapShape);
    var aShape = d3.select("#shapeMenu");
    d3.selectAll(".dropdown-item").remove();

    for (i = 0; i < uniqueData.length; i++) {
        aShape.append("a").attr("class","dropdown-item").attr("href","#").text(uniqueData[i]);
    };

    d3.selectAll(".dropdown-item").on("click", function(){
        console.log(d3.select(this).text())
        var inputElement = d3.select(this).text()
        var dataElement = "shape";
        filter(inputElement, dataElement)
    });
});
