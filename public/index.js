/*
	Javascript file for home page, nothing else.
*/
function create_post_button_notification(type, text, body) {
	new Notify({
		status: type,
		title: text,
		text: body,
		effect: 'fade',
		speed: 300,
		customClass: null,
		customIcon: null,
		showIcon: true,
		showCloseButton: true,
		autoclose: true,
		autotimeout: 3000,
		gap: 20,
		distance: 20,
		type: 1,
		position: 'right top'
	})
}
function create_post_button() {
	const post_content = document.getElementById("create-post-input").value
	if (post_content != "" && post_content != null) {
		create_post_button_notification("success", "Posted", "Your post has been posted.")
	} else {create_post_button_notification("error", "Error", "You can not post nothing!")}
}