
const restaurantData = document.querySelector('.restaurant-data');
const lagosBtn = document.querySelector('#lagosBtn');
const allCitiesBtn = document.querySelector('#allCitiesBtn');
const btn = document.querySelectorAll('.btn');
const searchBar = document.querySelector('#search-input')

window.addEventListener('load', loadData())

allCitiesBtn.addEventListener('click', () => loadData())


searchBar.addEventListener('keypress', (e) => {
    
    if (e.key === 'Enter') {
        e.preventDefault()
        let searchValue = searchBar.value;
        const dataSearched = searchData(searchValue)

        restaurantData.innerHTML = '';
        dataSearched.forEach((data) => {

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
})

function searchData(search) {
    let searchFilter = Data.filter(item => {
        let keywords = item.keyword
        for (const word of keywords) {
            if (word.toLowerCase() === search.toLowerCase()) return item
        }
        // if(keywords.include(search)) return item
    })
    return searchFilter
}


function loadData() {
    restaurantData.innerHTML = '';
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



// lagosBtn.addEventListener('click', () => searchCity("Lagos"))

function searchCity(city) {
    // let searchResult = Data.filter((item) => item.city===city)
    // if(searchResult.length===0) return alert(`${city} not found`);
    restaurantData.innerHTML = ``
    city.forEach((data) => {
        console.log(data)
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

btn.forEach((eachBtn) => {
    eachBtn.addEventListener('click', (e) => {
        const btnCity = e.currentTarget.dataset.city;
        const citiesArray = Data.filter((data) => {
            if (data.city === btnCity) {
                return data
            }
        })
        searchCity(citiesArray);
        // console.log(citiesArray[0].city)
    })
})