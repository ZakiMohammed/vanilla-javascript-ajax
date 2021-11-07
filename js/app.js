const lst = document.querySelector('#lst');

const update = (id) => {
    window.location = `update.html?id=${id}`;
};
const remove = (e, id) => {

    const result = confirm(`Are you sure you want to delete this id: ${id}?`);
    if (!result) {
        return;
    }

    fetch(`https://jsonplaceholder.typicode.com/postSs/${id}`, { method: 'DELETE' })
        .then(response => response.json())
        .then(() => {
            e.parentElement.remove();
        })
};

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            lst.innerHTML += `
                <div>
                    <h4>${item.title}</h4>
                    <p>${item.body}</p>
                    <button onclick="update(${item.id})">Update</button>
                    <button onclick="remove(this, ${item.id})">Delete</button>
                </div>
            `
        });
    })
/**
 * fetch()
 *  - we have supplied first argument which is URL of API
 *  - it returns a Promise object
 *  - if any function returns Promise object then you have to use then() function
 * first then
 *  - it is used to get only the JSON data from the response we obtained from server
 * second then
 *  - in this you will get the actual JSON data which you can use to process your UI
 * response.json()
 *  - it internally parse the JSON response from server and return only the payload
 */

// const list = [
//     { id: 1, title: 'Title 1', body: 'Body 1' },
//     { id: 2, title: 'Title 2', body: 'Body 2' },
//     { id: 3, title: 'Title 3', body: 'Body 3' },
//     { id: 4, title: 'Title 4', body: 'Body 4' },
//     { id: 5, title: 'Title 5', body: 'Body 5' },
// ]

// list.forEach(item => {
//     lst.innerHTML += `
//         <div>
//             <h4>${item.title}</h4>
//             <p>${item.body}</p>
//         </div>
//     `
// });