const xl = require('excel4node');
const wb = new xl.Workbook();
const ws = wb.addWorksheet('mmv');

const data = [

    {
        "marca": "MERCEDES",
        "modelo": "L-13-130",
        "ano": "1981"



    },
    {
        "marca": "MERCEDES",
        "modelo": "L-13-1300",
        "ano": "1982"



    },
    {
        "marca": "MERCEDES",
        "modelo": "L-13-1300",
        "ano": "1983"



    },
];
const headingColumnName = [
    "marca",
    "modelo",
    "ano"
];

let headingColumnIndex = 1;
headingColumnName.forEach(heading => {
    ws.cell(1, headingColumnIndex++).string(heading);


}
);
let rowIndex = 2; // começa inserir na linha 2 da tabela 2
data.forEach(record => {
    let columnIndex = 1;
    Object.keys(record).forEach(headingColumnName => {
        ws.cell(rowIndex, columnIndex++).string(record[headingColumnName]);
    });
    rowIndex++;
});
wb.write('mmv.xlsx');