const searchInput = document.getElementById('search-input');
const resultArtists = document.getElementById('result-artists');
const resultPlaylist = document.getElementById('result-playlist');

function requestApi(searchTerm) {
    const url = 'http://localhost:8000/artists?name_like=${searchTerm}'
    fetch(url)
        .then((response) => response.json())
        //.then((result) => displayResults(result))

}



document.addEventListener('input', function() {
    const serchTerm = searchInput.value.toLocaleLowerCase();
    if (searchTerm === '' ) {
        resultPlaylist.classList.add('hidden');
        resultArtists.classList.remove('hidden');
        return;
    }

    requestApi( searchTerm);
});