/*jslint browser: true*/
var viewMethods = {
	outputData: function (outputElm, data) {
		"use strict";
		var table, tr, td;
		outputElm.innerHTML = "";
		if (data) {
			table = document.createElement("table");
			data.forEach(function (row) {
				var key;
				tr = document.createElement("tr");
				for (key in row) {
					if (row.hasOwnProperty(key)) {
						td = document.createElement("td");
						td.innerText = row[key];
						tr.appendChild(td);
					}
				}
				table.appendChild(tr);
			});
			outputElm.appendChild(table);
		}
	}
};

document.addEventListener("deviceready", function () {
	"use strict";
	var btnTestQuery = document.getElementById("btnTestQuery"),
		output = document.getElementById("output");
	btnTestQuery.addEventListener("click", function () {
		window.plugins.contentproviderplugin.query({
			contentUri: "content://sms/inbox",
			projection: ["address", "date", "body"],
			selection: null,
			selectionArgs: null,
			sortOrder: "date DESC"
		}, function (data) {
			console.log(JSON.stringify(data));
			viewMethods.outputData(output, data);
		}, function (err) {
			console.log("error query");
			output.innerText = "query error: " + err;
		});
	});
}, false);