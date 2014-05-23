## cordova-ContentProviderPlugin

A generic Cordova plugin for querying Content Providers on Android devices.

Content Providers in Android can be usefull to query information such as SMS, Contacts, Calendar, and much more. Some applications use Content Providers to store their data, and this data can be queried by any third party app.

## Android Content Providers

A complete list of available content providers in Android can be found here:
http://developer.android.com/reference/android/provider/package-summary.html

## Note About Permissions

Most content providers require to add special permissions in `AndroidManifest.xml` file. For example, if you want to query the `content://sms/` provider, you will need to add the following line in the manifest (see Android SDK for more info):

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
		}, function (err) {
			console.log("error query");
		});
