console.log(document.body)


//Gather Data from the DOM

var httpRequest;
var data

function makeRequest() {
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = handleResponse;
    httpRequest.open("POST", "https://canvasjs.com/services/data/datapoints.php");
    httpRequest.send();
}

function handleResponse() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            data = JSON.parse(httpRequest.responseText);

            console.log(data);
            // var chart = new CanvasJS.Chart("chartContainer", )
        }
    }
}

    makeRequest();

let div = document.createElement('div');
let canvas = document.createElement('canvas');
canvas.id = 'canvas';
canvas.width = 800;
div.append(canvas);


// document.getElementById('firstHeading').appendChild(div, canvas);
const table1 = document.getElementById('table1');
const table2 = document.getElementById('table2');
table1.parentNode.insertBefore(div, table1);
// table2.parentNode.insertBefore(div, table2);
// console.log(table1.parentNode);
// console.log(table2);
// console.log(canvas)
// console.log(div);


const ctx = document.getElementById('canvas');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

function gatherDomData(e) {
    let data =[];
    /* Getting the number of rows in the table. */
    let rowLength = e.rows.length;
    console.log(rowLength);

    for (let i = 0; i < rowLength; i++) {
        /* Getting the rows of the table. */
        let row = e.rows[i];
        console.log(row);
        /* Getting the cells of the table. */
        let col = e.rows.item(i).cells;
        // console.log(col);
        /* Getting the number of columns in the table. */
        let colLength = col.length;
        // console.log(colLength);
        for (let j = 0; j < colLength; j++) {
            /* Getting the data of the table. */
            let data1 = col.item(j).innerHTML;
            console.log(data1);
            data.push(data1);
        }        
       
    }
    return data;
}

gatherDomData(table1);