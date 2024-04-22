const getTextFromInput = () =>{
    const input = document.getElementById('textInput')
    console.log(input.value);
    return input.value
}

const getVoices = () =>{
    const systhesis = window.speechSynthesis
    systhesis.onvoiceschanged =() =>{
        const voices = systhesis.getVoices()

        return voices
    }
    
}

const speakUp = (text) =>{
    console.log('speak');
    const speak = new SpeechSynthesisUtterance(text || getTextFromInput())

        
        speak.volume = .1
        speak.pitch= 1
        speak.rate = .5
        // const systhesis = window.speechSynthesis
         window.speechSynthesis.speak(speak)
        // systhesis.speak(getTextFromInput)
    
}

document.getElementById('outer').addEventListener('mouseover',
    ()=>speakUp(`Don't you Dare!`))
    document.getElementById('inner').removeEventListener('mouseover',()=>{

    })
document.getElementById('inner').addEventListener('mouseover',
    ()=>speakUp(`Ouch!`))