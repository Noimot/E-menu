
const restaurantData = document.querySelector('.restaurant-data');
const lagosBtn = document.querySelector('#lagosBtn');
const allCitiesBtn = document.querySelector('#allCitiesBtn')


window.addEventListener('load', loadData())

function loadData() {
    Data.forEach((data) => {

        let container = document.createElement('div')
        container.classList.add("data-container")
        container.innerHTML = ` 
        <div class="menu-image">
                <img src="${data.Image}" alt="${data.restaurant}" />
            </div>
            <div class="restaurant-info">
                <h3>Restaurant: ${data.restaurant}</h3>
                <p>Addrress: ${data.Address}</P>
                <p>Menu: ${data.Menu}</P>
                <div>
                    <small>City: ${data.city} </small> |
                    <small>Phone Number: ${data.contact}</small>
                </div>

            </div>`
        restaurantData.append(container)
    })
}


allCitiesBtn.addEventListener('click', () => loadData())

lagosBtn.addEventListener('click', () => searchCity("Lagos"))

function searchCity(city) {
    let searchResult = Data.filter((item) => item.city===city)
    if(searchResult.length===0) return alert(`${city} not found`);
    restaurantData.innerHTML=``
    searchResult.forEach((data) => {

        let container = document.createElement('div')
        container.classList.add("data-container")
        container.innerHTML = ` 
        <div class="menu-image">
                <img src="${data.Image}" alt="${data.restaurant}" />
            </div>
            <div class="restaurant-info">
                <h3>Restaurant: ${data.restaurant}</h3>
                <p>Addrress: ${data.Address}</P>
                <p>Menu: ${data.Menu}</P>
                <div class="restaurant-contact">
                    <small>City: ${data.city}</small>
                    <small>Phone Number: ${data.contact}</small>
                </div>

            </div>`
        restaurantData.append(container)
    })
}