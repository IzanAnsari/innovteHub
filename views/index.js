

function filterTable() {
    var brandFilter = document.getElementById("brandFilter").value;
    var descriptionFilter = document.getElementById("descriptionSelect").value;
    var tagsFilter = document.getElementById("tagsSelect").value;

    var table = document.getElementById("myTable");
    var rows = table.getElementsByTagName("tr");

    for (var i = 1; i < rows.length; i++) { // Start from 1 to skip the header row
        var brand = rows[i].getElementsByTagName("td")[0].textContent.trim();
        var description = rows[i].getElementsByTagName("td")[1].textContent.trim();
        var tags = rows[i].getElementsByTagName("td")[4].textContent.trim();

        var brandMatch = brandFilter === "volvo" || brand === brandFilter;
        var descriptionMatch = descriptionFilter === "volvo" || description === descriptionFilter;
        var tagsMatch = tagsFilter === "volvo" || tags.includes(tagsFilter);

        if (brandMatch && descriptionMatch && tagsMatch) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}

function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;

    while (switching) {
        switching = false;
        rows = table.rows;

        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].querySelector("td:first-child"); // Select the first <td> in the row

            y = rows[i + 1].querySelector("td:first-child");

            if (x && y) {
                // Compare the text content of the <td> elements
                if (x.textContent.toLowerCase() > y.textContent.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }

        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

document.getElementById("izan").addEventListener("click", sortTable);


document.addEventListener('DOMContentLoaded', function() {
    function filterRowsByTime() {
      var table = document.getElementById('myTable');
      var rows = table.getElementsByTagName('tr');

      for (var i = 1; i < rows.length; i++) { // Start from 1 to skip header row
        var cells = rows[i].getElementsByTagName('td');
        var nextMeeting = cells[5].innerText; // Assuming the next meeting time is in the 6th column

        // Extract minutes and hours from the time (adjust the regex based on your time format)
        var match = nextMeeting.match(/(\d+)\s+(minute|hour)/i);

        if (match) {
          var timeValue = parseInt(match[1]);
          var timeUnit = match[2].toLowerCase();

          // Filter rows with meetings within the next hour or minute
          if ((timeUnit === 'minute' && timeValue <= 60) ||
              (timeUnit === 'hour' && timeValue <= 1)) {
            rows[i].style.display = ''; // Show the row
          } else {
            rows[i].style.display = 'none'; // Hide the row
          }
        } else {
          rows[i].style.display = 'none'; // Hide the row if no match
        }
      }
    }

    // Attach the filter function to the filter icon
    var filterIcon = document.querySelector('.fa-filter');
    if (filterIcon) {
      filterIcon.addEventListener('click', filterRowsByTime);
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    function refreshTable() {
      var table = document.getElementById('myTable');
      
      // Insert code here to update the table data if needed
      // For demonstration purposes, let's just reload the page
      location.reload();
    }

    // Attach the refresh function to the refresh icon
    var refreshIcon = document.querySelector('.fa-refresh');
    if (refreshIcon) {
      refreshIcon.addEventListener('click', refreshTable);
    }
  });

