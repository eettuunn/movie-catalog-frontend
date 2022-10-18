$(document).ready(function (){
    LoadDetails()
})

function LoadDetails(){
    let response = fetch('https://react-midterm.kreosoft.space/api/movies/details/f233bcdc-94d2-4345-a2a8-08d9b9f3d2a2')
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            console.log(json);
            $( "#movie-details" ).find("#movie-poster").attr("src", json.poster)
            //$( "#movie-details" ).attr("id", "detail-" + json.id);
            $( "#movie-details" ).find("#movie-name").text(json.name)
            $( "#movie-details" ).find("#movie-year").text(json.year)
            $( "#movie-details" ).find("#movie-country").text(json.country)
            GetGenres(json)
            $( "#movie-details" ).find("#movie-time").text(`${json.time} мин.`)
            $( "#movie-details" ).find("#movie-tagline").text(json.tagline)
            $( "#movie-details" ).find("#movie-director").text(json.director)
            $( "#movie-details" ).find("#movie-budget").text(`$${json.budget}`)
            $( "#movie-details" ).find("#movie-fees").text(`$${json.fees}`)
            $( "#movie-details" ).find("#movie-age-limit").text(`${json.ageLimit}+`)

        }).catch(error => console.error(error));

}

function GetGenres(movie){
    for(let genre of movie.genres){
        if(genre !== movie.genres[movie.genres.length - 1]) {
            $( "#movie-details" ).find("#movie-genres").append(genre.name + ', ');
        } else {
            $( "#movie-details" ).find("#movie-genres").append(genre.name);
        }
    }
}