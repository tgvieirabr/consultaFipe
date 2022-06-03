const express = require('express');
const routes = express.Router();
const ObjectsToCsv = require('objects-to-csv');
const basePath = process.cwd();

routes.post('/generate',async (req, res, next) => {

    const dados = req.body;

    //console.log(dados);

    var tabela = [ ];
    dados.forEach((item) => {
        //console.log(item);
        tabela.push({
            Marca: item.marca,
        });
    });

    /*
  	const data = [
		{marca: 'CA', modelo: 'California', versao: 'California', ano: 'California'},
		{marca: 'CA', modelo: 'California', versao: 'California', ano: 'California'},
		{marca: 'CA', modelo: 'California', versao: 'California', ano: 'California'},
	];
    */

	(async () => {
		const csv = new ObjectsToCsv(tabela);
 
		await csv.toDisk(`./tabela.csv`);
 
		//console.log(await csv.toString());
  
		//const zip_download = `./tabela.csv`;
		//	zipper.sync.zip(`${basePath}/tabela/`).compress().save(zip_download);

		//	res.status(201).download(zip_download, 'tabela', function (err) {
     
		//});
		
	})();
    
});

module.exports = routes