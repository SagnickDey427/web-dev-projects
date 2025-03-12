const darkButton = document.getElementById("dark")
const lightButton = document.getElementById("light")
const solarButton = document.getElementById("solar")
const body = document.body

const theme = localStorage.getItem('theme')
const isSolar = localStorage.getItem('isSolar')

if(theme){
    body.classList.add(theme);
    isSolar && body.classList.add('solar');
}

darkButton.addEventListener('click',()=>{
    body.classList.replace('light','dark')
    localStorage.setItem('theme','dark')
})
lightButton.addEventListener('click',()=>{
    body.classList.replace('dark','light')
    localStorage.setItem('theme','light')
})
solarButton.addEventListener('click',()=>{
    if(body.classList.contains('solar')){
        body.classList.remove('solar')
        solarButton.style.cssText = `--bg-solar : var(--yellow);`
        solarButton.innerText = 'solar'
        localStorage.removeItem('isSolar');
    }
    else{
        solarButton.style.cssText = `--bg-solar : white;`
        body.classList.add('solar')
        solarButton.innerText = 'solarize'
        localStorage.setItem('isSolar',true)
    }
})