const txtTitle = document.querySelector('#txtTitle');
const txtBody = document.querySelector('#txtBody');
const btnSubmit = document.querySelector('#btnSubmit');
const message = document.querySelector('.blue');

btnSubmit.addEventListener('click', () => {

    message.removeAttribute('hidden');

    const titleValue = txtTitle.value;
    const bodyValue = txtBody.value;

    if (titleValue === '' || bodyValue === '') {
        alert('Please complete the form')
        return;
    }

    const payload = {
        title: titleValue,
        body: bodyValue
    };
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(payload),
    };

    fetch('https://jsonplaceholder.typicode.com/posts', options)
        .then(response => response.json())
        .then(data => {

            message.setAttribute('hidden', '');

            alert(`Record created with id: ${data.id}`);

            window.location = 'index.html';
        })
})
