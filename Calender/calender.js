// Get the current date
const currentDate = new Date();

// Function to generate the calendar
function generateCalendar(year, month) {
  const calendarElement = document.getElementById('calendar');
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // Set the current date
  const date = new Date(year, month);

  // Clear the previous content
  calendarElement.innerHTML = '';

  // Create header for the calendar
  const header = document.createElement('h2');
  header.textContent = monthNames[date.getMonth()] + ' ' + date.getFullYear();
  calendarElement.appendChild(header);

  // Create table element
  const table = document.createElement('table');
  calendarElement.appendChild(table);

  // Create table header (days of the week)
  const thead = document.createElement('thead');
  const tr = document.createElement('tr');
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  daysOfWeek.forEach(day => {
    const th = document.createElement('th');
    th.textContent = day;
    tr.appendChild(th);
  });

  thead.appendChild(tr);
  table.appendChild(thead);

  // Create table body
  const tbody = document.createElement('tbody');
  table.appendChild(tbody);

  // Get the first day of the month and the number of days in the month
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const numDays = lastDayOfMonth.getDate();

  // Get the index of the first day of the month in the week (0 - 6)
  const firstDayIndex = firstDayOfMonth.getDay();

  // Create cells for the calendar
  let dateIndex = 1;
  for (let i = 0; i < 6; i++) { // 6 rows for maximum weeks in a month
    const row = document.createElement('tr');
    for (let j = 0; j < 7; j++) {
      const cell = document.createElement('td');
      if (i === 0 && j < firstDayIndex) {
        // Empty cell before the first day of the month
        cell.textContent = '';
      } else if (dateIndex > numDays) {
        // Empty cell after the last day of the month
        cell.textContent = '';
      } else {
        // Cell with the date
        cell.textContent = dateIndex;
        dateIndex++;
      }
      row.appendChild(cell);
    }
    tbody.appendChild(row);
  }
}

// Call the function to generate the calendar for the current month
generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
