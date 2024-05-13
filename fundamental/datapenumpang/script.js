const passengers = [
    { id: 1, name: 'John Doe', age: 25, destination: 'Jakarta' },
    { id: 2, name: 'Jane Smith', age: 30, destination: 'Surabaya' },
    { id: 3, name: 'Bob Johnson', age: 40, destination: 'Bandung' },
    { id: 4, name: 'Alice Williams', age: 35, destination: 'Yogyakarta' }
];

function loadPassengers(passangerToShow) {
    const passengerList = document.getElementById('passengerList');
    passengerList.innerHTML = ''; 

    passangerToShow.map(passenger => {
        const listItem = document.createElement('tr');
        listItem.innerHTML = `
            <td>${passenger.id}</td>
            <td>${passenger.name}</td>
            <td>${passenger.age}</td>
            <td>${passenger.destination}</td>
        `;
        passengerList.appendChild(listItem);
    });
}

function searchPassanger() {
        const searchInput = document.getElementById('searchInput').value.toLowerCase();
        const filteredPassangers = passengers.filter(passenger => passenger.name.toLowerCase().includes(searchInput));
        loadPassengers(filteredPassangers);
}

window.onload = () => loadPassengers(passengers);
