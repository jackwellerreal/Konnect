function notification(type, text, body) {
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
		autotimeout: 1500,
		gap: 20,
		distance: 20,
		type: 1,
		position: 'right top'
	})
}

function addEmoji(emoji) {
    let input = document.getElementById('create-post-input');
    
    input.value += emoji;
}
  
function toggleEmojiDrawer() {
    let drawer = document.getElementById('emojis');
    
    if (drawer.classList.contains('hidden')) {
        drawer.classList.remove('hidden');
    } else {
        drawer.classList.add('hidden');
    }
}

document.getElementById('create-post-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let input = document.getElementById('create-post-input');
    
    if (input.value.length <= 0) {
        notification('error', 'Error', 'You can\'t post nothing!');
    } 
    else if (input.value.length > 0) {
        try {
            axios.post = ('/createpost').then(
                res => {
                    if (res.status == 201 || res.status == 200) {
                        notification('success', 'Posted', 'Your post has been posted.');
                        notification('error', 'Failed', `Failed to post: http error code: ${res.status}`);
                    }
                }
            )
        } catch (err) {
            notification('error', 'Error', err);
            console.log(err);
        }
    }
    else if (input.value.length > 75) {
        notification('error', 'Error', 'You can\'t post that much text!');
    }
});