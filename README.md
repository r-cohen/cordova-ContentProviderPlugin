## cordova-ContentProviderPlugin

A generic Cordova plugin for querying Content Providers on Android devices

## Example Usage

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
