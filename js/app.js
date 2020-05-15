const day = document.querySelector('.day');
const slog = document.querySelector('.display-quote');


document.addEventListener('DOMContentLoaded', getDate);

function getDate() {
    const options = {
        weekday: "long"
    };
    let today = new Intl.DateTimeFormat('en-us', options).format();
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'words.json', true);

    // onload
    xhr.onload = function (err) {
        if (this.status === 200) {
            let html;
            let datas = JSON.parse(this.responseText);
            datas.forEach((data) => {
                if ((data.name).toLowerCase() === today.toLowerCase()) {
                    html = `
                    <blockquote>${data.quotes}</blockquote> 
                    `;
                    // display quote
                    slog.innerHTML = html;
                }
            })
        } else {
            console.log(err);

        }
    }
    // display day
    day.textContent = today;

    // send 
    xhr.send();
}

