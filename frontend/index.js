import { backend } from 'declarations/backend';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('reservation-form');
  form.addEventListener('submit', makeReservation);
});

async function makeReservation(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const guests = parseInt(document.getElementById('guests').value);

  try {
    const result = await backend.makeReservation(name, date, time, guests);
    if ('ok' in result) {
      alert('Reservation successful!');
      form.reset();
    } else {
      alert('Failed to make reservation. Please try again.');
    }
  } catch (error) {
    console.error('Error making reservation:', error);
    alert('An error occurred. Please try again later.');
  }
}
