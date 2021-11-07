const txtTitle = document.querySelector('#txtTitle');
const txtBody = document.querySelector('#txtBody');
const btnSubmit = document.querySelector('#btnSubmit');
const message = document.querySelector('.blue');

const param = new URLSearchParams(location.search);
const id = param.get('id');

message.removeAttribute('hidden');

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(data => {

        message.setAttribute('hidden', '');

        console.log(data)

        txtTitle.value = data.title;
        txtBody.value = data.body;
    })

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
        method: 'PUT',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(payload),
    };

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, options)
        .then(response => response.json())
        .then(data => {

            message.setAttribute('hidden', '');

            alert(`Record updated with id: ${data.id}`);

            window.location = 'index.html';
        })
})

/**
 * URLSearchParams
 * - use to get query string parameters
 * - param.get('YOUR_QUERY_STRING_NAME')
 * 
 * Steps to be followed for update:
	- Create a link with id (update.html?id=300)
	- Read the query string id on update page
	- Make a call to server with this id (Get single post)
	- Fill the form with data came from server
	- Show loader till data received
	- On button click validate the form
	- After validating make a PUT call to server
	- Redirect to home page
 */