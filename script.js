function submitQuestion() {
    let question = document.querySelector('#question-box textarea').value;
    if (question) {
        alert('Your question has been submitted! We will get back to you shortly.');
    } else {
        alert('Please enter a question before submitting.');
    }
}
