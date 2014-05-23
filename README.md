## cordova-ContentProviderPlugin

A generic Cordova plugin for querying Content Providers on Android devices

## Android Content Providers

A complete list of available content providers in Android can be found here:
http://developer.android.com/reference/android/provider/package-summary.html

## Note About Permissions

Most content providers require to add special permissions in AndroidManifest.xml file. For example, if you want to query the "content://sms/" content, you will need to add the following permission (see Android SDK for more info):

    <uses-permission android:name="android.permission.READ_SMS" />

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
