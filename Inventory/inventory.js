let originalData;

document.addEventListener("DOMContentLoaded", function(event) {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Store original data for resetting table
            originalData = data;
            // Call function to create and populate the table
            createAndPopulateTable(data);
        })
        .catch(error => console.error('Error:', error));

    // Add event listener for search input
    document.getElementById('searchInput').addEventListener('input', function() {
        var searchQuery = this.value.trim().toLowerCase();
        filterTable(searchQuery);
    });
});

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
    var filteredData = originalData.filter(item => {
        return Object.values(item).some(val =>
            val.toString().toLowerCase().includes(searchQuery)
        );
    });

    if (filteredData.length > 0) {
        populateTable(filteredData);
    } else {
        // If no matching data found, reset table to original data
        populateTable(originalData);
    }
}