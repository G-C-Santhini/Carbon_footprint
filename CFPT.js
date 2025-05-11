document.getElementById('footprintForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const activities = {
    car: 4.6,
    bus: 1.8,
    meat: 2.5,
    ac: 3.2,
    recycle: -1.5
  };

  let total = 0;
  const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

  checkboxes.forEach(checkbox => {
    total += activities[checkbox.value] || 0;
  });

  const result = document.getElementById('result');
  result.textContent = `Your estimated daily carbon footprint is ${total.toFixed(1)} kg CO₂.`;

  if (total > 7) {
    result.style.color = 'red';
  } else if (total > 3) {
    result.style.color = 'orange';
  } else {
    result.style.color = 'green';
  }
});
