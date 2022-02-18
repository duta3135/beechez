let data;
let rate = .9
const utterance = new SpeechSynthesisUtterance()
function speak(text){
    utterance.text=text
    utterance.rate=rate
    speechSynthesis.speak(utterance)
    data = text
}
function repeat(){
    utterance.text=data
    utterance.rate=1*0.75
    speechSynthesis.speak(utterance)
}
function reveal(){
    document.getElementById("text").innerHTML = data
}
function getRandomNumber(limit){
    return Math.floor((Math.random() * limit) + 1)
}
fetch('./words.json').then(res=> {return res.json()}).then(jsonData=>speak(jsonData[getRandomNumber(jsonData.length)]))
// fetch('./words.json').then(res=>x(res.json()))
