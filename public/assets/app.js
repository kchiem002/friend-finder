let surveyDone = false
let answersArray = []
let inputName
let uploadPhoto
let surveyAnswers
let friendsList

const formValidation = () => {
    inputName = document.querySelector('#inputName').value
    uploadPhoto = document.querySelector('#uploadPhoto').value
    surveyAnswers = document.getElementsByTagName('select').value
    
    for (let i = 0; i < surveyAnswers.length; i++){
        answersArray.push(parseInt(surveyAnswers[i].value))
        if (surveyAnswers[i] !== '-Select One-' && inputName !== '' && uploadPhoto !== '') {
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
                surveyAnswers: [
                    parseInt(document.querySelector('#q1').value),
                    parseInt(document.querySelector('#q2').value),
                    parseInt(document.querySelector('#q3').value),
                    parseInt(document.querySelector('#q4').value),
                    parseInt(document.querySelector('#q5').value),
                    parseInt(document.querySelector('#q6').value),
                    parseInt(document.querySelector('#q7').value),
                    parseInt(document.querySelector('#q8').value),
                    parseInt(document.querySelector('#q9').value),
                    parseInt(document.querySelector('#q10').value),
                ]
            })
        })
        .then(_ => {
            console.log('New Friend Added')
            calculation()
        })
    }
    else {
        if (inputName === '' || uploadPhoto === '') {
            alert("You must complete the entire form to proceed")
        }
    }
})

const calculation = () => {
    friendsList = []
    
}
