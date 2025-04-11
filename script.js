fetch('data/plants.json')
  .then(res => res.json())
  .then(data => {
    const plantList = document.getElementById('plant-list');
    const searchInput = document.getElementById('search');

    function displayPlants(plants) {
      plantList.innerHTML = '';
      plants.forEach(plant => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <img src="${plant.image}" alt="${plant.name}" />
          <div class="card-content">
            <h3>${plant.name}</h3>
            <em>${plant.scientificName}</em>
            <p>${plant.description}</p>
            <p>☀️ ${plant.sunlight} | 💧 ${plant.water}</p>
          </div>
        `;
        card.addEventListener('click', () => {
          window.location.href = `plant.html?id=${plant.id}`;
        });
        plantList.appendChild(card);
      });
    }

    displayPlants(data);

    searchInput.addEventListener('input', () => {
      const filtered = data.filter(plant =>
        plant.name.toLowerCase().includes(searchInput.value.toLowerCase())
      );
      displayPlants(filtered);
    });
  });
