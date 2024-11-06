const proxyUrl = 'https://api.allorigins.win/get?url=';
const iframeUrl = encodeURIComponent('https://webapp.rejseplanen.dk/bin/stboard.exe/mn?L=vs_liveticker&input=SDE%20Munkebjergvej%20(Odense%20Kommune)!&start=yes&time=now&outputMode=tickerMode&tools=no&LTcss=by&productsFilter=1111111111110000');

fetch(proxyUrl + iframeUrl)
    .then(response => response.json())
    .then(data => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data.contents, 'text/html');
        const table = doc.querySelector('#data');
        if (table) {
            const rows = table.querySelectorAll('tr');
            rows.forEach(row => {
                const cells = row.querySelectorAll('td');
                cells.forEach(cell => {
                    console.log(cell.innerText);
                });
            });
        } else {
            console.error('Table not found.');
        }
    })
    .catch(error => console.error('Error fetching data:', error));
