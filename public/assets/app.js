let surveyDone = false
let answersArray = []
let inputName
let uploadPhoto
let surveyAnswers

const formValidation = () => {
    inputName = document.querySelector('#inputName').value
    uploadPhoto = document.querySelector('#uploadPhoto').value
    surveyAnswers = document.getElementsByTagName('select')
    
    for (let i = 0; i < surveyAnswers.length; i++){
        answersArray.push(parseInt(surveyAnswers[i].value))
        if (surveyAnswers[i] !== '' && inputName !== '' && uploadPhoto !== '') {
            surveyDone = true
        }
        else {
            surveyDone = false
        }
    }
}

document.querySelector('#submitAnswers').addEventListener('click', e => {
    e.preventDefault()
    formValidation()

    if (surveyDone == true) {
        fetch('/friends', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: `${inputName}`,
                photo: `${uploadPhoto}`,
                surveyAnswers: answersArray
            })
        })
    }
    else {
        if (inputName === '' && uploadPhoto !== '') {
            document.querySelector('#userPromptName').innerHTML = "You must input your name"
        }
        else if (uploadPhoto === '' && inputName !== '') {
            document.querySelector('#userPromptPhoto').innerHTML = "You must input your photo URL"
        }
        else if (uploadPhoto === '' && inputName === '') {
            document.querySelector('#userPromptPhoto').innerHTML = "You must input your photo URL"
            document.querySelector('#userPromptName').innerHTML = "You must input your name"
        }
    }
})

