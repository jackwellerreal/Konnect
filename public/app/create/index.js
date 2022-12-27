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