const express = require('express');
const fs = require('fs');
const app = express()
var JsonDB = require("node-json-db");
const bodyParse = require('body-parser')
app.use(express.urlencoded())
app.use(express.json());

function findWithAttr(array, attr, value) {
	for (var i = 0; i < array.length; i += 1) {
		if (array[i] != null) {
			if (array[i][attr] === value) {
				return i;
			}
		}
	}
	return -1;
}
app.get('/', function (req, res) {
	res.sendfile('./index.html')
})
app.get('/admin', function (req, res) {
	res.sendfile('./admin.html');
})


app.post('/newData', function (req, res) {
	req_data = {
		"name": req.body.products.name,
		"images": req.body.products.images,
		"description": req.body.products.description,
	}
	if (req.body.products.del != null) {
		fs.readFile('./js/data.json', 'utf8', function readFileCallback(err, data) {
			data = JSON.parse(data);
			// delete data.products[parseInt(req.body.products.del)];
			var id_del = parseInt(req.body.products.del);
			for (const key in data.products) {
				if (data.products.hasOwnProperty(key)) {
					const element = data.products[key];
					if (element != null) {
						if (id_del == element.id) {
							delete data.products[findWithAttr(data.products, "id", id_del)];
						}
					}
				}
			}
			var newData = JSON.stringify(data);
			fs.writeFile('./js/data.json', newData, function callBack(err, data) {
				if (err) {
					console.log(err);
				}
			})
		})
		res.redirect('/admin');
	}
	if (req.body.products.update != null) {
		var id_edit = parseInt(req.body.products.id);
		fs.readFile('./js/data.json', 'utf8', function readFileCallback(err, data) {
			data = JSON.parse(data);
			for (const key in data.products) {
				if (data.products.hasOwnProperty(key)) {
					const element = data.products[key];
					if (element != null) {
						if (id_edit == element.id) {
							var newData = {
								"id": id_edit,
								"name": req.body.products.name,
								"images": req.body.products.images,
								"description": req.body.products.description,
							}
							data.products[findWithAttr(data.products, "id", id_edit)] = newData;
							var data_final = JSON.stringify(data);
						}
					}
				}
			}
			fs.writeFile('./js/data.json', data_final, function callBack(err, data) {
				if (err) {
					console.log(err);
				}
			})
		})
		res.redirect('/admin');
	} else if (req.body.products.put != null) {
		fs.readFile('./js/data.json', 'utf8', function readFileCallback(err, data) {
			data = JSON.parse(data);
			var last = data.products.length;
			data.products.push({
				"id": last + 1,
				"name": req_data.name,
				"images": req_data.images,
				"description": req_data.description
			})
			var newData = JSON.stringify(data);
			fs.writeFile('./js/data.json', newData, function callBack(err, data) {
				if (err) {
					console.log(err);
				}
			})
			res.redirect('/admin');
		});
	}

})



app.get('/data', function (req, res, next) {
	res.sendfile('./js/data.json')
})
app.listen(3000)
app.use(express.static(__dirname + '/'));