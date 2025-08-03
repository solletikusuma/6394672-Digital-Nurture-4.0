export default function FlightDetails({ isLoggedIn }) {
  const flights = [
    { id: 1, from: "New York", to: "London", time: "10:00 AM" },
    { id: 2, from: "Delhi", to: "Dubai", time: "3:30 PM" },
    { id: 3, from: "Tokyo", to: "Sydney", time: "7:45 PM" }
  ];

  return (
    <div>
      <h3>Flight Details</h3>
      <ul>
        {flights.map(flight => (
          <li key={flight.id}>
            {flight.from} → {flight.to} at {flight.time}
            {isLoggedIn && <button style={{ marginLeft: '10px' }}>Book Ticket</button>}
          </li>
        ))}
      </ul>
    </div>
  );
}
