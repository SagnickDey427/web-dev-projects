const url ='https://api.dictionaryapi.dev/api/v2/entries/en/'
const result = document.getElementById("result")
const audio = document.getElementById("sound")
const btn = document.getElementById("search-btn")

btn.addEventListener('click',()=>{
    const inputWord = document.getElementById("inp-word").value;
    fetch(`${url}${inputWord}`).then((response)=>response.json()).then((data)=>{
        console.log(data)
        result.innerHTML=`<div class="word">
                <h3>${inputWord}</h3>
                <button onclick="playSound()">
                    <i class="fa-solid fa-volume-high"></i>
                </button>
            </div>
            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech} </p>
                <p>${data[0].phonetics[1].text || data[0].phonetics[0].text}</p>
            </div>
            <p class="word-meaning">${data[0].meanings[0].definitions[0].definition}</p>
            <p class="word-example">${data[0].meanings[0].definitions[0].example || data[0].meanings[1].definitions[0].example || data[0].meanings[2].definitions[0].example}</p>`;
            audio.setAttribute('src',`${data[0].phonetics[0].audio || data[0].phonetics[1].audio}`)
    })
});

function playSound(){
    audio.play();
}
