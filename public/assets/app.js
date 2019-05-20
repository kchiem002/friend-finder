let surveyDone = false
let answersArray = []
let inputName
let uploadPhoto
let surveyAnswers

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
                    document.querySelector('#q1').value,
                    document.querySelector('#q2').value,
                    document.querySelector('#q3').value,
                    document.querySelector('#q4').value,
                    document.querySelector('#q5').value,
                    document.querySelector('#q6').value,
                    document.querySelector('#q7').value,
                    document.querySelector('#q8').value,
                    document.querySelector('#q9').value,
                    document.querySelector('#q10').value,
                ]
            })
        })
    }
    else {
        if (inputName === '' || uploadPhoto === '') {
            alert("You must complete the entire form to proceed")
        }
    }
})

