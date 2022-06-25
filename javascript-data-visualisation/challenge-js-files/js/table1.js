



    // Coded By John4E656F
    // var dataPoints = [];
    // $.getJSON("https://canvasjs.com/services/data/datapoints.php", function(data) {  
    //     $.each(data, function(key, value){
    //         dataPoints.push({x: value[0], y: parseInt(value[1])});
    //     });
    //     chart = new CanvasJS.Chart("chartContainer",{
    //         title:{
    //             text:"Live Chart with dataPoints from External JSON"
    //         },
    //         data: [{
    //         type: "line",
    //         dataPoints : dataPoints,
    //         }]
    //     });
    //     chart.render();
    //     updateChart();
    // });




let div = document.createElement('div');
let canvas = document.createElement('canvas');
canvas.id = 'canvas1';
canvas.width = 800;
div.append(canvas);


// document.getElementById('firstHeading').appendChild(div, canvas);
const table1 = document.getElementById('table1');
table1.parentNode.insertBefore(div, table1);
// table2.parentNode.insertBefore(div, table2);
// console.log(table1.parentNode);
// console.log(table2);
// console.log(canvas)
// console.log(div);
// Code by John

function point(e) {
    return parseFloat((e + "").replace(",", "."));
}

let dataCountry=[];
let dataGlobal = [];
let labelYears = [];

function gatherDomData(e) {

    /* Getting the number of rows in the table. */
    let rowLength = e.rows.length;
    let years = e.rows[1];
    let yearsLength = years.cells.length;


    for(let j = 2; j < yearsLength; j++) {
        let yrs = years.cells[j].innerText;
        labelYears.push(yrs);
    }

    

    
    for (let i = 1; i < rowLength; i++) {
        /* Getting the cells of the table. */
        let row = e.rows[i];
        
        let colCountry = row.cells[1].innerText;
        dataCountry.push(colCountry);

        let temp = [];


        for (var j = 2, col; col = row.cells[j]; j++) {
            temp.push(point(col.innerText));

        }
        dataGlobal.push(temp)
        

    }

}
// Coded By John4E656F
console.log(dataCountry);

console.log(dataGlobal);

console.log(labelYears)

gatherDomData(table1);

const Belgium = {
    label: dataCountry[1],
    data: dataGlobal[1],
    backgroundColor: [
    'rgb(255, 99, 132)',
    ],
    borderColor: [
    'rgb(0,0,0)',
    ],
    borderWidth: 4
}

const Bulgaria = {
    label: dataCountry[2],
    data: dataGlobal[2],
    backgroundColor: [
    'rgba(34,139,34)',
    ],
    borderColor: [
    'rgba(0, 128, 0)',
    ],
    borderWidth: 4
}

const Czech = {
    label: dataCountry[3],
    data: dataGlobal[3],
    backgroundColor: [
    'rgba(173, 216, 230)',
    ],
    borderColor: [
    'rgba(135, 206, 250)',
    ],
    borderWidth: 4
}

const Denmark = {
    label: dataCountry[4],
    data: dataGlobal[4],
    backgroundColor: [
    'rgba(255, 0, 0)',
    ],
    borderColor: [
    'rgba(139, 0, 0)',
    ],
    borderWidth: 4
}

const Germany = {
    label: dataCountry[5],
    data: dataGlobal[5],
    backgroundColor: [
    'rgba(255, 99, 132, 0.2)',
    ],
    borderColor: [
    'rgba(255, 99, 132, 1)',
    ],
    borderWidth: 4
}

const Estonia = {
    label: dataCountry[6],
    data: dataGlobal[6],
    backgroundColor: [
    'rgba(0, 0, 205)',
    ],
    borderColor: [
    'rgba(0, 0, 0)',
    ],
    borderWidth: 4
}

const Ireland = {
    label: dataCountry[7],
    data: dataGlobal[7],
    backgroundColor: [
    'rgba(255, 255, 255)',
    ],
    borderColor: [
    'rgba(0, 128, 0)',
    ],
    borderWidth: 4
}

const Greece = {
    label: dataCountry[8],
    data: dataGlobal[8],
    backgroundColor: [
    'rgba(139,0,0)',
    ],
    borderColor: [
    'rgba(255, 99, 132, 1)',
    ],
    borderWidth: 4
}

const Spain = {
    label: dataCountry[9],
    data: dataGlobal[9],
    backgroundColor: [
    'rgba(255, 99, 132, 0.2)',
    ],
    borderColor: [
    'rgba(255, 255, 51)',
    ],
    borderWidth: 4
}

const France = {
    label: dataCountry[10],
    data: dataGlobal[10],
    backgroundColor: [
    'rgba(255, 255, 255)',
    ],
    borderColor: [
    'rgba(135, 206, 250)',
    ],
    borderWidth: 4
}

const Croatia = {
    label: dataCountry[11],
    data: dataGlobal[11],
    backgroundColor: [
    'rgba(220, 20, 60)',
    ],
    borderColor: [
    'rgba(255, 99, 132, 1)',
    ],
    borderWidth: 4
}

const Italy = {
    label: dataCountry[12],
    data: dataGlobal[12],
    backgroundColor: [
    'rgba(255,105,180)',
    ],
    borderColor: [
    'rgba(255,105,180)',
    ],
    borderWidth: 4
}

const Cyprus = {
    label: dataCountry[13],
    data: dataGlobal[13],
    backgroundColor: [
    'rgba(245, 255, 250)',
    ],
    borderColor: [
    'rgba(255, 127, 80)',
    ],
    borderWidth: 4
}

const Latvia = {
    label: dataCountry[14],
    data: dataGlobal[14],
    backgroundColor: [
    'rgba(245, 245, 220)',
    ],
    borderColor: [
    'rgba(233, 150, 122)',
    ],
    borderWidth: 4
}

const Lithuania = {
    label: dataCountry[15],
    data: dataGlobal[15],
    backgroundColor: [
    'rgba(173,255,47)',
    ],
    borderColor: [
    'rgba(173,255,47)',
    ],
    borderWidth: 4
}

const Luxembourg = {
    label: dataCountry[16],
    data: dataGlobal[16],
    backgroundColor: [
    'rgba(240, 248, 255)',
    ],
    borderColor: [
    'rgba(176,224, 230)',
    ],
    borderWidth: 4
}

const Hungary = {
    label: dataCountry[17],
    data: dataGlobal[17],
    backgroundColor: [
    'rgba(85, 107, 47)',
    ],
    borderColor: [
    'rgba(128, 0, 0)',
    ],
    borderWidth: 4
}

const Malta = {
    label: dataCountry[18],
    data: dataGlobal[18],
    backgroundColor: [
    'rgba(255, 222, 173)',
    ],
    borderColor: [
    'rgba(139, 0, 0)',
    ],
    borderWidth: 4
}

const Dutch = {
    label: dataCountry[19],
    data: dataGlobal[19],
    backgroundColor: [
    'rgba(0, 0, 255)',
    ],
    borderColor: [
    'rgba(205, 92, 92)',
    ],
    borderWidth: 4
}

const Austria = {
    label: dataCountry[20],
    data: dataGlobal[20],
    backgroundColor: [
    'rgba(255, 250, 250)',
    ],
    borderColor: [
    'rgba(250, 128, 114)',
    ],
    borderWidth: 4
}

const Poland = {
    label: dataCountry[21],
    data: dataGlobal[21],
    backgroundColor: [
    'rgba(255, 69, 0)',
    ],
    borderColor: [
    'rgba(240, 248, 255)',
    ],
    borderWidth: 4
}

const Portugal = {
    label: dataCountry[22],
    data: dataGlobal[22],
    backgroundColor: [
    'rgba(220, 20, 60)',
    ],
    borderColor: [
    'rgba(46, 139, 87)',
    ],
    borderWidth: 4
}

const Romania = {
    label: dataCountry[23],
    data: dataGlobal[23],
    backgroundColor: [
    'rgba(204, 204, 0)',
    ],
    borderColor: [
    'rgba(30, 144, 255)',
    ],
    borderWidth: 4
}

const Slovenia = {
    label: dataCountry[24],
    data: dataGlobal[24],
    backgroundColor: [
    'rgba(205,92,92)',
    ],
    borderColor: [
    'rgba(176,196,222)',
    ],
    borderWidth: 4
}

const Slovakia = {
    label: dataCountry[25],
    data: dataGlobal[25],
    backgroundColor: [
    'rgba(255, 160, 122)',
    ],
    borderColor: [
    'rgba(106, 90, 205)',
    ],
    borderWidth: 4
}

const Finland = {
    label: dataCountry[26],
    data: dataGlobal[26],
    backgroundColor: [
    'rgba(245, 245, 245)',
    ],
    borderColor: [
    'rgba(0, 0, 255)',
    ],
    borderWidth: 4
}

const Sweden = {
    label: dataCountry[27],
    data: dataGlobal[27],
    backgroundColor: [
    'rgba(240, 230, 140)',
    ],
    borderColor: [
    'rgba(70, 13à, 180)',
    ],
    borderWidth: 4
}


const Iceland = {
    label: dataCountry[28],
    data: dataGlobal[28],
    backgroundColor: [
    'rgba(95, 158, 160)',
    ],
    borderColor: [
    'rgba(240, 128, 128)',
    ],
    borderWidth: 4
}

const Liechtenstein = {
    label: dataCountry[29],
    data: dataGlobal[29],
    backgroundColor: [
    'rgba(178, 34, 34)',
    ],
    borderColor: [
    'rgba(25, 25, 112)',
    ],
    borderWidth: 4
}

// Code by John4E656F
const Norway = {
    label: dataCountry[30],
    data: dataGlobal[30],
    backgroundColor: [
    'rgba(0, 191, 255)',
    ],
    borderColor: [
    'rgba(139, 0, 0)',
    ],
    borderWidth: 4
}

const Switzerland = {
    label: dataCountry[31],
    data: dataGlobal[31],
    backgroundColor: [
    'rgba(240, 248, 255)',
    ],
    borderColor: [
    'rgba(255, 99, 71)',
    ],
    borderWidth: 4
}
// Coded By John
const Montenegro = {
    label: dataCountry[33],
    data: dataGlobal[33],
    backgroundColor: [
    'rgba(178, 34, 34)',
    ],
    borderColor: [
    'rgba(189, 183, 107)',
    ],
    borderWidth: 4
}

const Macedonia = {
    label: dataCountry[34],
    data: dataGlobal[34],
    backgroundColor: [
    'rgba(220, 20, 60)',
    ],
    borderColor: [
    'rgba(255, 255, 0)',
    ],
    borderWidth: 4
}

const Serbia = {
    label: dataCountry[35],
    data: dataGlobal[35],
    backgroundColor: [
    'rgba(205, 92, 92)',
    ],
    borderColor: [
    'rgba(65, 105, 225)',
    ],
    borderWidth: 4
}
// Coded By John4E656F
const Turkey = {
    label: dataCountry[36],
    data: dataGlobal[36],
    backgroundColor: [
    'rgba(250, 240, 230)',
    ],
    borderColor: [
    'rgba(255, 0, 0)',
    ],
    borderWidth: 4
}
const ctx = document.getElementById('canvas1');
const chartTable1 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labelYears,
        datasets: [Belgium, Bulgaria, Czech, Denmark,
        Germany, Estonia, Ireland, Greece, Spain, France, 
        Croatia, Italy, Cyprus, Latvia, Lithuania,
        Luxembourg, Hungary, Malta, Dutch, Austria, Poland,
        Portugal, Romania, Slovenia, Slovakia, Finland,
        Sweden, Iceland, Liechtenstein, Norway, Switzerland,
        Montenegro, Macedonia, Serbia, Turkey]
    },
    options: {
    }
});


// Coded By John4E656F