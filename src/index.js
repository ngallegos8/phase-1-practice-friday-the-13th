let currentMovie
let movieData = []

document.addEventListener("DOMContentLoaded", () => {

    fetch("http://localhost:3000/movies")
        .then(response => response.json())
        .then(movieData => {
            displayImage(movieData)
            showDetails(movieData[0])
            })

        })


    function displayImage(movieData) {
        let movieImageList = document.querySelector("#movie-list")
        movieData.forEach(movie => {
            let navItemImage = document.createElement("img")
            navItemImage.src = movie.image
            // img.dataset.id = movie.id
            movieImageList.appendChild(navItemImage)
            navItemImage.addEventListener("click", () => {
                // console.log(movie)
                showDetails(movie)
                addRating()
            }) 
        })
    }
    const btnWatched = document.querySelector("#watched")

    function showDetails(movieData) {
        currentMovie = movieData
        console.log(movieData)
        const detailImage = document.querySelector("#detail-image")
        detailImage.src = movieData.image

        const detailTitle = document.querySelector("#title")
        detailTitle.textContent = movieData.title 

        const detailYear = document.querySelector("#year-released")
        detailYear.textContent = movieData.release_year

        const detailDescription = document.querySelector("#description")
        detailDescription.textContent = movieData.description

        const btnWatched = document.querySelector("#watched") //made global var above
        btnWatched.src = movieData.watched
        // btnWatched.src = watchHistory.value

        const bloodRating = document.querySelector("#amount")
        bloodRating.src = movieData.blood_amount.value
    }

    // function watchHistory (btnWatched) {
    //     return btnWatched ? "Watched" : "Unwatched"
    // }

    // function submitHistory(watchHistory) {
    //     btnWatched.addEventListener("submit", (e) => {
    //         e.preventDefault()
    //         currentMovie.watched = e.target.value

    //     })
    // }



    function createCounter() {
        let count = 0;
        return function() {
           count++;
           return count;
        }
     }
     const counter = createCounter();
     const button = document.querySelector("#watched");
     const countDisplay = document.getElementById("count");
     button.addEventListener("click", () => {
        countDisplay.innerHTML = counter();
     });

    // history = countDisplay

    function watchHistory(countDisplay)
        countDisplay % === 0 ? "Watched" : "Unwatched"

    // function watchHistory(history) {
    //     if(history === "true") {
    //         buttonText = "Watched"
    //     } else {
    //         buttonText = "Unwatched"
    //     }
    // }


    let bloodDropRating = movieData.blood_amount
    let bloodDropAmount = document.querySelector("#amount")
    bloodDropAmount.src = bloodDropRating



    function addRating (){
        let userInput = document.querySelector("#blood-form")
        userInput.addEventListener("submit", (e) => {
            e.preventDefault()
            currentMovie.blood_amount = e.target["blood-amount"].value
            showDetails(currentMovie)
        })
    }



    // function submitForm(){
    //     let form = document.querySelector("#high-score-form")
    //     form.addEventListener("submit", (event)=> {
    //         event.preventDefault()
    //         currentGame.high_score = event.target["score-input"].value
    //         showDetails(currentGame)
    //     })
    // }
    
