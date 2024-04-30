
// const apiUrl = `https://getthirukkural.appspot.com/api/3.0/kural/${kuralNumber}?appid=${appid}&format=${format}`;

const id='pwgffcv3vkeya';
const format='JSON';

let kuralYen=document.getElementById('kuralNumber');
let submit=document.getElementById('submit_kural');
let adhigaaram =document.getElementById('adhigaaram');
let iyeal=document.getElementById('iyeal');
let paal=document.getElementById('paal');
let kuralMudhalVari=document.getElementById('kuralMudhalVari');
let kuralerandamVari =document.getElementById('kuralerandamVari');
let kuralVilakkam=document.getElementById('kural-vilakkam')
let errorScreen=document.querySelector('.errorSecreen')

submit.addEventListener('click', async() =>{
    let kuralnumber=kuralYen.value;
    console.log(kuralnumber);
    if(kuralnumber ===''){
        setError("தகவல்: திருக்குறள் எண்ணை உள்ளிடவும், வெற்று இடம் ஏற்றுக்கொள்ள படாது.");
    }
    else if(kuralnumber<=0){
        setError("தகவல்: திருக்குறள் எண்ணை உள்ளிடவும், எதிர்மறை எண் ஏற்றுக்கொள்ள படாது.");
    }
    else if(kuralnumber >=1331){
        setError(`தகவல்:பெறப்பட்ட எண்:${kuralnumber}-இல் திருக்குறள் இல்லை திருக்குறள் எண் 1லிருந்து 1330 வரை தேவையான எண்ணை உள்ளிடவும்.`);
    }
    else{
        getKural(kuralnumber);
    }
   
});

async function getKural(kuralNumber){
    try{
        const urlLink = `https://getthirukkural.appspot.com/api/3.0/kural/${kuralNumber}?appid=${id}&format=${format}`;
        const response= await fetch(urlLink);
        console.log(response);
        const data= await response.json();
        console.log(data);
        adhigaaram.innerHTML=data.athigaram;
        iyeal.innerHTML=data.iyal;
        paal.innerHTML=data.paal;
        kuralMudhalVari.innerHTML=data.line1;
        kuralerandamVari.innerHTML=data.line2;
        kuralVilakkam.innerHTML=data.urai3;
        errorScreen.textContent='';
    }
    catch(e){
        console.log(e);
    }
}

function setError(message){
    let data=document.createElement('p');
    data.textContent=message;
    data.classList.add('errorSecreen');
    errorScreen.textContent='';
    console.log(errorScreen);
    errorScreen.appendChild(data);
    
}