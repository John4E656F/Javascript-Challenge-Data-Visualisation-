
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

let dataObj = {}
let dataCountry=[];
let data2 = [];
let data3 = [];
let data4 = [];
let data5 = [];
let data6 = [];
let data7 = [];
let data8 = [];
let data9 = [];
let data10 = [];
let data11 = [];
let data12 = [];

let x = [];
function gatherDomData(e) {
    
    /* Getting the number of rows in the table. */
    let rowLength = e.rows.length;
    // console.log(rowLength);

    for (let i = 1; i < rowLength; i++) {
        /* Getting the cells of the table. */
        let col = e.rows.item(i).cells;

        dataCountry.push(col.item(1).innerText);
        data2.push(col.item(2).innerHTML);
        data3.push(col.item(3).innerHTML);
        data4.push(col.item(4).innerHTML);
        data5.push(col.item(5).innerHTML);
        data6.push(col.item(6).innerHTML);
        data7.push(col.item(7).innerHTML);
        data8.push(col.item(8).innerHTML);
        data9.push(col.item(9).innerHTML);
        data10.push(col.item(10).innerHTML);
        data11.push(col.item(11).innerHTML);
        data12.push(col.item(12).innerHTML);
        
    }
    console.log(x);
}

console.log(dataCountry);
console.log(data2);
console.log(data3);
console.log(data4);
console.log(data5);
console.log(data6);
console.log(data7);
console.log(data8);
console.log(data9);
console.log(data10);
console.log(data11);
console.log(data12);
gatherDomData(table1);
