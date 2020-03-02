// from data.js
var tableData = data;

//understand d3
var tbody = d3.select("tbody");

// Function to build the table
function buildTable(tableData) {
  // Clear existing data
  tbody.html("");

  // Loop through each object and append rows and cells for each value
  tableData.forEach((dataRow) => {
     var row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
      var cell = row.append("td");
        cell.text(val);
      }
    );
  });
}

// Function to search the table by date/time
function handleClick() {

  // Prevent Refresh 
  d3.event.preventDefault();

  // Get the datetime value entered by user
  var date = d3.select("#datetime").property("value");
  let searchData = tableData;

  // Filter by datetime
  if (date) {
    searchData = searchData.filter(row => row.datetime === date);
  }

 // Build table based on search data
  buildTable(searchData);
}

// Event statement for button click 
d3.selectAll("#filter-btn").on("click", handleClick);

// Default Loading Page 
buildTable(tableData);

///////