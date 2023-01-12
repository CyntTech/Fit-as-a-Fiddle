let searchButton = document.querySelector("#searchRecipe")

//Add an event listener to the button that runs 
//the function sendApiRequest when it is clicked
searchButton.addEventListener("click", ()=>{
    console.log("button pressed")
    sendApiRequest()
})


//An asynchronous function to fetch data from the API.
async function sendApiRequest(){
    let APP_ID = "d2709a99"
    let API_KEY = "c0240dff949b320abdfd73119469cadd"
    let response = await fetch(`https://api.edamam.com/searchRecipe?app_id=
    ${APP_ID}&app_key=${API_KEY}&q=pizza`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    useApiData(data)
}


//function that does something with the data received from the API.
//The name of the function should be customized to whatever you are
//doing with it
function useApiData(data){
    
}
