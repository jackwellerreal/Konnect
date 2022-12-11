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
		fetch("/post")
			.then(function(res) {
				if (res.status == 201 || res.status == 200) {
					create_post_button_notification("success", "Posted", "Your post has been posted.")
				} else {
					create_post_button_notification("error", "Failed", `Failed to post: http error code: ${res.status}`)
				}
			}
			)
			.then().catch(function(err) {
				console.log(err)
			})
		
	} else {create_post_button_notification("error", "Error", "You can't post nothing!")}
}
function onload() {
	scrollUp();
	loadStore();
}

function scrollUp() {
	window.scrollTo(0, 0);
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}