let originalData;
var datas=[
{"Inventory Id": 2, "Store": "Jane Smith", "Brand": 25,"Description": 30, "On Hand": 30,"Predicted weekly":20 ,"Lead time":2,"Safety Stock":36 ,'Stock out':'yes',"Reorder Point":23,"Maximum Stock Level":23,"EOQ":56,"Stock Turnover Rate":34,"ABC Analysis":78,"Status": 30},
{"Inventory Id": 3, "Store": "Bob Johnson", "Brand": 35,"Description": 30, "On Hand": 30,"Predicted weekly":20 ,"Lead time":2,"Safety Stock":36 ,'Stock out':'yes',"Reorder Point":23,"Maximum Stock Level":23,"EOQ":56,"Stock Turnover Rate":34,"ABC Analysis":78, "Status": 30},
{"Inventory Id": 4, "Store": "Bob Johnson", "Brand": 35,"Description": 30, "On Hand": 30,"Predicted weekly":20 ,"Lead time":2,"Safety Stock":36  ,'Stock out':'yes',"Reorder Point":23,"Maximum Stock Level":23,"EOQ":56,"Stock Turnover Rate":34,"ABC Analysis":78, "Status": 30},
{"Inventory Id": 1, "Store": "John Doe", "Brand": 30, "Description": 30, "On Hand": 30,"Predicted weekly":20 ,"Lead time":2,"Safety Stock":36  ,'Stock out':'yes',"Reorder Point":23,"Maximum Stock Level":23,"EOQ":56,"Stock Turnover Rate":34,"ABC Analysis":78, "Status": 30},
{"Inventory Id": 2, "Store": "Jane Smith", "Brand": 25,"Description": 30, "On Hand": 30,"Predicted weekly":20 ,"Lead time":2,"Safety Stock":36  ,'Stock out':'yes',"Reorder Point":23,"Maximum Stock Level":23,"EOQ":56,"Stock Turnover Rate":34,"ABC Analysis":78, "Status": 30},
{"Inventory Id": 3, "Store": "Bob Johnson", "Brand": 35,"Description": 30, "On Hand": 30,"Predicted weekly":20 ,"Lead time":2,"Safety Stock":36  ,'Stock out':'yes',"Reorder Point":23,"Maximum Stock Level":23,"EOQ":56,"Stock Turnover Rate":34,"ABC Analysis":78, "Status": 30},
{"Inventory Id": 1, "Store": "John Doe", "Brand": 30, "Description": 30, "On Hand": 30,"Predicted weekly":20 ,"Lead time":2,"Safety Stock":36  ,'Stock out':'yes',"Reorder Point":23,"Maximum Stock Level":23,"EOQ":56,"Stock Turnover Rate":34,"ABC Analysis":78, "Status": 30},
{"Inventory Id": 1, "Store": "45", "Brand": 30, "Description": 30, "On Hand": 30,"Predicted weekly":20 ,"Lead time":2,"Safety Stock":36  ,'Stock out':'yes',"Reorder Point":23,"Maximum Stock Level":23,"EOQ":56,"Stock Turnover Rate":34,"ABC Analysis":78, "Status": 30},

];
document.addEventListener("DOMContentLoaded", function(event) {
    // Call function to create and populate the table
    createAndPopulateTable(datas);

    // Populate dropdown with column names
    populateDropdown();

    // Add event listener for search input
    document.getElementById('searchInput').addEventListener('input', function() {
        var searchQuery = this.value.trim().toLowerCase();
        filterTable(searchQuery);
    });

    // Add event listener for column checkboxes
    document.querySelectorAll('.column-checkbox').forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            var columnName = this.dataset.column;
            toggleColumn(columnName, this.checked);
        });
    });
});

function populateDropdown() {
    var dropdownContent = document.getElementById('dropdownContent');
    Object.keys(datas[0]).forEach(function(columnName) {
        var label = document.createElement('label');
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'column-checkbox';
        checkbox.dataset.column = columnName;
        checkbox.checked = true; // By default, all columns are checked
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(' ' + columnName));
        dropdownContent.appendChild(label);
    });
}

function toggleColumn(columnName, isVisible) {
    var columnIndex = Object.keys(datas[0]).indexOf(columnName);
    var table = document.querySelector('table');
    var cells = table.querySelectorAll('td:nth-child(' + (columnIndex + 1) + '), th:nth-child(' + (columnIndex + 1) + ')');
    cells.forEach(function(cell) {
        cell.style.display = isVisible ? '' : 'none';
    });
}

function createAndPopulateTable(data) {
    // Create table element
    var table = document.createElement("table");
    var tableContainer = document.getElementById("tableContainer");
    tableContainer.appendChild(table);

    // Create table header row
    var thead = table.createTHead();
    var headerRow = thead.insertRow();
    Object.keys(data[0]).forEach(key => {
        var th = document.createElement("th");
        th.textContent = key.toUpperCase();
        headerRow.appendChild(th);
    });

    // Populate table with data
    populateTable(data);
}

function populateTable(data) {
    var table = document.querySelector("table tbody");
    if (table) {
        table.remove(); // Remove existing tbody
    }
    table = document.createElement("tbody");
    document.querySelector("table").appendChild(table);

    // Create table body and populate data
    data.forEach(item => {
        var row = table.insertRow();
        Object.values(item).forEach(value => {
            var cell = row.insertCell();
            cell.textContent = value;
        });
    });
}

function filterTable(searchQuery) {
    var filteredData = datas.filter(item => {
        return Object.values(item).some(val =>
            val.toString().toLowerCase().includes(searchQuery)
        );
    });

    if (filteredData.length > 0) {
        populateTable(filteredData);
    } else {
        // If no matching data found, reset table to original data
        populateTable(datas);
    }
}
