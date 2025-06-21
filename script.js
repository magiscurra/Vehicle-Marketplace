const currentUser = null; 

const guestButtons = document.getElementById("guest-buttons");
const userDropdown = document.getElementById("user-dropdown");
const userMenu = document.getElementById("user-menu");
const usernameSpan = document.getElementById("username");

function toggleUserMenu() {
  userMenu.classList.toggle("hidden");
}

function showLoginModal() {
  alert("Show login modal");
}

function showSignupModal() {
  alert("Show signup modal");
}

function logout() {
  alert("User logged out");
  userDropdown.classList.add("hidden");
  guestButtons.classList.remove("hidden");
}

function goToDashboard() {
  alert("Navigate to dashboard");
}

document.getElementById("search-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const query = document.getElementById("search-input").value;
  alert("Searching for: " + query);
});

function viewVehicleDetails(vehicleId) {
  const selectedVehicle = vehicles.find(v => v.id === vehicleId);
  if (selectedVehicle) {
    localStorage.setItem('selectedVehicle', JSON.stringify(selectedVehicle));
    window.location.href = 'VehicleDetails.html';
  }
}

const vehicles = [
  {
    id: 1,
    year: 2020,
    make: "Honda",
    model: "Civic",
    mileage: 45000,
    fuelType: "Petrol",
    transmission: "Automatic",
    condition: "Excellent",
    price: 12000,
    image: "rolls-royce-phantom-v-1.jpg",
    description: "Reliable and fuel-efficient compact car with great mileage and safety features.",
    location: "New York, NY",
    sellerName: "John Doe"
  },
  {
    id: 2,
    year: 2012,
    make: "Honda",
    model: "Civic",
    mileage: 45000,
    fuelType: "Petrol",
    transmission: "Automatic",
    condition: "Excellent",
    price: 10500,
    image: "rolls-royce-phantom-v-1.jpg",
    description: "Reliable and fuel-efficient compact car with great mileage and safety features.",
    location: "New York, NY",
    sellerName: "John Doe"
  },
  {
    id: 3,
    year: 2010,
    make: "Honda",
    model: "Civic",
    mileage: 45000,
    fuelType: "Petrol",
    transmission: "Automatic",
    condition: "Excellent",
    price: 12500,
    image: "rolls-royce-phantom-v-1.jpg",
    description: "Reliable and fuel-efficient compact car with great mileage and safety features.",
    location: "New York, NY",
    sellerName: "John Doe"
  },
  // Add more vehicles here...
];

function renderVehicleCard(vehicle) {
  return `
    <div onclick="viewVehicleDetails(${vehicle.id})" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer transform hover:scale-105 duration-200">
      <div class="relative h-48 bg-gray-200">
        <img src="${vehicle.image}" alt="${vehicle.make} ${vehicle.model}" class="w-full h-full object-cover" />
        <div class="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-sm font-medium">
          $${vehicle.price.toLocaleString()}
        </div>
      </div>
      <div class="p-4">
        <h3 class="text-xl font-semibold text-gray-900 mb-2">
          ${vehicle.year} ${vehicle.make} ${vehicle.model}
        </h3>
        <div class="grid grid-cols-3 gap-2 text-sm text-gray-600 mb-3">
          <div class="flex items-center space-x-1"><span>📅</span><span>${vehicle.year}</span></div>
          <div class="flex items-center space-x-1"><span>⏱️</span><span>${vehicle.mileage.toLocaleString()} mi</span></div>
          <div class="flex items-center space-x-1"><span>⛽</span><span>${vehicle.fuelType}</span></div>
        </div>
        <p class="text-gray-700 text-sm mb-3">${vehicle.description}</p>
        <div class="flex justify-between items-center text-sm text-gray-500">
          <span>${vehicle.location}</span>
          <span>by ${vehicle.sellerName}</span>
        </div>
      </div>
    </div>
  `;
}

window.addEventListener("DOMContentLoaded", () => {
  if (currentUser) {
    usernameSpan.textContent = currentUser.name;
    guestButtons.classList.add("hidden");
    userDropdown.classList.remove("hidden");
  }

  const grid = document.getElementById('vehicle-grid');
  const resultCount = document.getElementById('result-count');

  resultCount.textContent = `${vehicles.length} vehicle${vehicles.length !== 1 ? 's' : ''} found`;
  grid.innerHTML = vehicles.map(renderVehicleCard).join('');
});
