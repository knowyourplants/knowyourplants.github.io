const params = new URLSearchParams(window.location.search);
const plantId = params.get('id');

fetch('data/plants.json')
  .then(res => res.json())
  .then(data => {
    const plant = data.find(p => p.id === plantId);
    if (!plant) return;

    const details = document.getElementById('plant-details');
    details.innerHTML = `
      <img src="${plant.image}" alt="${plant.name}" class="detail-img" />
      <h2>${plant.name}</h2>
      <em>${plant.scientificName}</em>
      <p>${plant.description}</p>
      
      <h3>Growing Conditions</h3>
      <ul>
        <li><strong>Sunlight:</strong> ${plant.sunlight}</li>
        <li><strong>Water:</strong> ${plant.water}</li>
        <li><strong>Soil:</strong> ${plant.soil}</li>
        <li><strong>Temperature:</strong> ${plant.temperature}</li>
        <li><strong>Climate:</strong> ${plant.climate}</li>
        <li><strong>Growing Season:</strong> ${plant.growingSeason}</li>
        <li><strong>Days to Maturity:</strong> ${plant.daysToMature}</li>
        <li><strong>Harvest Time:</strong> ${plant.harvestTime}</li>
      </ul>

      <h3>Nutritional Value</h3>
      <ul>
        ${plant.nutrients.map(n => `<li><strong>${n.name}:</strong> ${n.benefit}</li>`).join('')}
      </ul>

      <h3>Common Uses</h3>
      <ul>${plant.uses.map(use => `<li>${use}</li>`).join('')}</ul>

      <h3>Growing Tips</h3>
      <ul>${plant.tips.map(tip => `<li>${tip}</li>`).join('')}</ul>
    `;
  });
