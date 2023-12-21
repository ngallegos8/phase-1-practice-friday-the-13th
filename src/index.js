let currentMovie
let movieData = []
const bloodRating = document.querySelector("#amount")
document.addEventListener("DOMContentLoaded", () => {

    fetch("http://localhost:3000/movies")
        .then(response => response.json())
        .then(movieData => {
            displayImage(movieData)
            showDetails(movieData[0])
            })
            addRating()

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
        // btnWatched.src = movieData.watched
        // btnWatched.src = watchHistory.value

        // const bloodRating = document.querySelector("#amount")
        bloodRating.textContent = movieData.blood_amount
        if(movieData.watched){
            btnWatched.textContent = "Watched" 
        }
        if(!movieData.watched){
            btnWatched.textContent = "Unwatched" 
        }
        // movieData.watched ? btnWatched.textContent = "Unwatched" : btnWatched.textContent = "Unwatched"
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



    // function createCounter() {
    //     let count = 0;
    //     return function() {
    //        count++;
    //        return count;
    //     }
    //  }
    //  const counter = createCounter();
    //  const button = document.querySelector("#watched");
    //  const countDisplay = document.getElementById("count");
    //  button.addEventListener("click", () => {
    //     countDisplay.innerHTML = counter();
    //  });

    // history = countDisplay

    // function watchHistory(countDisplay)
    //     countDisplay % === 0 ? "Watched" : "Unwatched"

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
            currentMovie.blood_amount += parseInt(e.target["blood-amount"].value)
            console.log(currentMovie)
            showDetails(currentMovie)
            e.target.reset()
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
    


    //GITHUB SOLUTION
// let movieData;
// let currentMovie;

// fetch("http://localhost:3000/movies")
// .then(response => response.json())
// .then(json => {
//      movieData = json;
     
//      movieData.forEach(movie => {
//          createMovieImageInBar(movie);
//      })

//      showMovieDetail(movieData[0]);

//      hookUpWatchedButton();

//      hookUpBloodForm();
// });

// function createMovieImageInBar(movie) {
//     let movieList = document.querySelector("#movie-list");

//     let movieImage = document.createElement("img");
//     movieImage.src = movie.image;
//     movieList.appendChild(movieImage);

//     movieImage.addEventListener('click', () => {
//         showMovieDetail(movie);
//     });
// }

// function showMovieDetail(movie) {
//     currentMovie = movie;

//     let detailTitle = document.querySelector("#title");
//     let detailImage = document.querySelector("#detail-image");
//     let detailDescription = document.querySelector("#description");
//     let detailYearReleased = document.querySelector("#year-released");
//     let watchedButton = document.querySelector("#watched");
//     let bloodAmount = document.querySelector("#amount");

//     detailTitle.textContent = movie.title;
//     detailImage.src = movie.image;
//     detailDescription.textContent = movie.description;
//     detailYearReleased.textContent = movie.release_year;
//     watchedButton.textContent = movie.watched ? "Watched" : "Unwatched"
//     bloodAmount.textContent = movie.blood_amount;
// }

// function hookUpWatchedButton() {
//     let watchedButton = document.querySelector("#watched");
//     watchedButton.addEventListener('click', () => {
//         currentMovie.watched = !currentMovie.watched;
//         watchedButton.textContent = currentMovie.watched ? "Watched" : "Unwatched";
//     });
// }

// function hookUpBloodForm() {
//     const bloodForm = document.querySelector("#blood-form");
//     bloodForm.addEventListener('submit', (event) => {
//         event.preventDefault();

//         const amountToAdd = event.target["blood-amount"].value;
//         currentMovie.blood_amount += parseInt(amountToAdd);

//         document.querySelector("#amount").textContent = currentMovie.blood_amount;

//         event.target.reset();
//     })
// }