document.addEventListener('DOMContentLoaded', () => {
    const calendar = document.getElementById('calendar');
    const eventModal = document.getElementById('eventModal');
    const closeModal = document.getElementsByClassName('close')[0];
    const eventForm = document.getElementById('eventForm');
    const eventDateInput = document.getElementById('eventDate');
    const eventTitleInput = document.getElementById('eventTitle');
    const eventDescriptionInput = document.getElementById('eventDescription');
    let events = [];
    let eventIdCounter = 0;

    // Load events from JSON file
    fetch('events.json')
        .then(response => response.json())
        .then(data => {
            events = data;
            eventIdCounter = events.length ? events[events.length - 1].id + 1 : 1;
            renderCalendar();
        })
        .catch(error => console.error('Error loading events:', error));

    function renderCalendar() {
        const date = new Date();
        date.setDate(1);
        const firstDayIndex = date.getDay();
        const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
        const nextDays = 7 - new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay() - 1;
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        let days = "";

        for (let x = firstDayIndex; x > 0; x--) {
            days += `<div class="day prev-date">${prevLastDay - x + 1}</div>`;
        }

        for (let i = 1; i <= lastDay; i++) {
            const currentDate = `${date.getFullYear()}-${date.getMonth() + 1}-${i}`;
            const eventList = events.filter(event => event.date === currentDate);
            days += `<div class="day" data-date="${currentDate}">${i}
                        ${eventList.map(event => `<div class="event">${event.title}</div>`).join('')}
                     </div>`;
        }

        for (let j = 1; j <= nextDays; j++) {
            days += `<div class="day next-date">${j}</div>`;
        }
        calendar.innerHTML = days;
    }

    calendar.addEventListener('click', (e) => {
        if (e.target.classList.contains('day') && !e.target.classList.contains('prev-date') && !e.target.classList.contains('next-date')) {
            eventModal.style.display = 'block';
            eventDateInput.value = e.target.dataset.date;
        }
    });

    closeModal.onclick = function() {
        eventModal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target == eventModal) {
            eventModal.style.display = 'none';
        }
    };

    eventForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addEvent();
    });

    function addEvent() {
        let date = eventDateInput.value;
        let title = eventTitleInput.value;
        let description = eventDescriptionInput.value;

        if (date && title) {
            let eventId = eventIdCounter++;
            events.push({ id: eventId, date: date, title: title, description: description });
            renderCalendar();
            eventDateInput.value = "";
            eventTitleInput.value = "";
            eventDescriptionInput.value = "";
        }
    }
});
