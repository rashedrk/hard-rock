/* Getting The Search result*/
document.getElementById("search-btn").addEventListener("click",function () {
    const serachText=document.getElementById("search").value
    fetch(`https://api.lyrics.ovh/suggest/${serachText}`)
    .then(res => res.json())
    .then(rawData => {
        for (let i = 0; i < rawData.data.length; i++) {
            const songDetails = rawData.data[i];
            const detailsContainer= document.createElement("div");
            detailsContainer.innerHTML=`
            <div class="search-result col-md-8 mx-auto py-4" id="result">
            <div class="single-result row align-items-center my-3 p-3">
                <div class="col-md-9">
                    <h3 class="lyrics-name">${songDetails.title}</h3>
                    <p class="author lead">Album by <span>${songDetails.artist.name}</span></p>
                </div>
                <div class="col-md-3 text-md-right text-center">
                    <button onclick="getLyrics('${songDetails.artist.name}','${songDetails.title}')" class="btn btn-success">Get Lyrics</button>
                </div>
            </div>
        </div>
            `;
            document.getElementById("song-details").appendChild(detailsContainer);
            
        }
          
        
        
    })
})

/* Getting The Lyrics */

function getLyrics(artist,title) {
    fetch(`https://private-anon-7ba8dc2c76-lyricsovh.apiary-mock.com/v1/${artist}/${title}`)
    .then(res => res.json())
    .then(data => {
        document.getElementById("single-lyrics").innerHTML=`<p>${data.lyrics}</p>`
    })
}
