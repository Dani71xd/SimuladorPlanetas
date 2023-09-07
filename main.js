const planetSelector = document.getElementById('planetSelector');
const planet = document.getElementById('planet');

planetSelector.addEventListener('change', () => {
  const selectedPlanet = planetSelector.value;
  displaySelectedPlanet(selectedPlanet);
});

planet.addEventListener('click', () => {
  const selectedPlanet = planetSelector.value;
  startFreeFall(selectedPlanet);
});

function displaySelectedPlanet(planetName) {
  const planetImageUrl = getPlanetImage(planetName);
  planet.style.backgroundImage = `url('${planetImageUrl}')`;
}

function startFreeFall(planetName) {
  const gravity = getGravity(planetName);
  let distance = 0;
  let time = 0;

  const intervalId = setInterval(() => {
    time += 0.1;
    distance = 0.5 * gravity * time * time;
    planet.style.top = 100 + distance + '200px'; 

    if (distance >= 900) {
      clearInterval(intervalId);
      setTimeout(() => {
        planet.style.top = '200px'; 
      }, 1000);
    }
  }, 100);
}

function getGravity(planetName) {
  const gravityValues = {
    mercurio: 3.7,
    venus: 8.87,
    tierra: 9.81,
    marte: 3.71,
    jupiter: 24.79,
  };
  return gravityValues[planetName] || 0;
}

function getPlanetImage(planetName) {
  const planetImages = {
    mercurio: 'img/mercurio.png',
    venus: 'img/venus.png',
    tierra: 'img/tierra.png',
    marte: 'img/marte.png',
    jupiter: 'img/jupiter.png',
  };
  return planetImages[planetName] || '';
}


displaySelectedPlanet(planetSelector.value);