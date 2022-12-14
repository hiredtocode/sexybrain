const functions = require('firebase-functions')
const admin = require('firebase-admin')

admin.initializeApp()

exports.addAdminRole = functions.https.onCall(async data => {
	// Get user and add custom claim (admin)
	try {
		const user = await admin.auth().getUserByEmail(data.email)
		await admin.auth().setCustomUserClaims(user.uid, {
			admin: true,
		})
		return {
			message: `Success! ${data.email} has been made an admin`,
		}
	} catch (error) {
		return error
	}
})
