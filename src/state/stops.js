const SET_STOPS = 'stops/SET_STOPS'


let favoritesStops = "";
let saveData = "";
let divTest = "";
let buttonTest = "";
let data = "";

// Read value from storage, or empty array
favoritesStops = JSON.parse(localStorage.getItem('favorites') || "[]");

  saveData = function () {
  data = document.getElementById("takeDeparture").value;
  favoritesStops.push(data);
  localStorage.setItem('favorites', JSON.stringify(favoritesStops));
}

//  document.getElementById('divTest').textContent = favoritesStops.join(', ');
//  document.getElementById('buttonTest').onclick = saveData;





export const setStops = stops => ({
    type: SET_STOPS,
    stops
})

export const fetchStops = () => dispatch => {
    fetch(
        'https://frozen-garden-78232.herokuapp.com/transport/stops.json'
    ).then(
        response => response.json()
    ).then(
        stops => dispatch(setStops(stops))
    )
}

const initialState = [];

export default (state = initialState, action = {}) => {
    switch(action.type) {
        case SET_STOPS:
            return action.stops;
        default:
            return state
    }
}