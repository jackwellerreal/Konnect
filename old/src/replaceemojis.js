const emojiList = [
    { name: 'grinning', class: 'smiles', emoji: '😀' },
    { name: 'smiley', class: 'smiles', emoji: '😃' },
    { name: 'smile', class: 'smiles', emoji: '😄' },
    { name: 'grin', class: 'smiles', emoji: '😁' },
    { name: 'laughing', class: 'smiles', emoji: '😆' },
    { name: 'face_holding_back_tears', class: 'smiles', emoji: '🥹' },
    { name: 'sweat_smile', class: 'smiles', emoji: '😅' },
    { name: 'joy', class: 'smiles', emoji: '😂' },
    { name: 'rofl', class: 'smiles', emoji: '🤣' },
    { name: 'smiling_face_with_tear', class: 'smiles', emoji: '🥲' },
    { name: 'relaxed', class: 'smiles', emoji: '☺️' },
    { name: 'blush', class: 'smiles', emoji: '😊' },
    { name: 'innocent', class: 'smiles', emoji: '😇' },
    { name: 'slight_smile', class: 'smiles', emoji: '🙂' },
    { name: 'upside_down_face', class: 'smiles', emoji: '🙃' },
    { name: 'wink', class: 'smiles', emoji: '😉' },
    { name: 'relieved', class: 'smiles', emoji: '😌' },
    { name: 'heart_eyes', class: 'smiles', emoji: '😍' },
    { name: 'smiling_face_with_3_hearts', class: 'smiles', emoji: '🥰' },
    { name: 'kissing_heart', class: 'smiles', emoji: '😘' },
    { name: 'kissing', class: 'smiles', emoji: '😗' },
    { name: 'kissing_smiling_eyes', class: 'smiles', emoji: '😙' },
    { name: 'kissing_closed_eyes', class: 'smiles', emoji: '😚' },
    { name: 'yum', class: 'smiles', emoji: '😋' },
    { name: 'stuck_out_tongue', class: 'smiles', emoji: '😛' },
    { name: 'stuck_out_tongue_closed_eyes', class: 'smiles', emoji: '😝' },
    { name: 'stuck_out_tongue_winking_eye', class: 'smiles', emoji: '😜' },
    { name: 'zany_face', class: 'smiles', emoji: '🤪' },
    { name: 'face_with_raised_eyebrow', class: 'smiles', emoji: '🤨' },
    { name: 'face_with_monocle', class: 'smiles', emoji: '🧐' },
    { name: 'nerd', class: 'smiles', emoji: '🤓' },
    { name: 'sunglasses', class: 'smiles', emoji: '😎' },
    { name: 'disguised_face', class: 'smiles', emoji: '🥸' },
    { name: 'star_struck', class: 'smiles', emoji: '🤩' },
    { name: 'partying_face', class: 'smiles', emoji: '🥳' },
    { name: 'smirk', class: 'smiles', emoji: '😏' },
    { name: 'unamused', class: 'smiles', emoji: '😒' },
    { name: 'disappointed', class: 'smiles', emoji: '😞' },
    { name: 'pensive', class: 'smiles', emoji: '😔' },
    { name: 'worried', class: 'smiles', emoji: '😟' },
    { name: 'confused', class: 'smiles', emoji: '😕' },
    { name: 'slight_frown', class: 'smiles', emoji: '🙁' },
    { name: 'frowning2', class: 'smiles', emoji: '☹️' },
    { name: 'persevere', class: 'smiles', emoji: '😣' },
    { name: 'confounded', class: 'smiles', emoji: '😖' },
    { name: 'tired_face', class: 'smiles', emoji: '😫' },
    { name: 'weary', class: 'smiles', emoji: '😩' },
    { name: 'pleading_face', class: 'smiles', emoji: '🥺' },
    { name: 'cry', class: 'smiles', emoji: '😢' },
    { name: 'sob', class: 'smiles', emoji: '😭' },
    { name: 'triumph', class: 'smiles', emoji: '😤' },
    { name: 'angry', class: 'smiles', emoji: '😠' },
    { name: 'rage', class: 'smiles', emoji: '😡' },
    { name: 'face_with_symbols_over_mouth', class: 'smiles', emoji: '🤬' },/*
    { name: 'exploding_head', class: 'smiles', emoji: '🤯' },
    { name: 'flushed', class: 'smiles', emoji: '😳' },
    { name: 'hot_face', class: 'smiles', emoji: '🥵' },
    { name: 'cold_face', class: 'smiles', emoji: '🥶' },
    { name: 'face_in_clouds', class: 'smiles', emoji: '😶‍🌫️' },
    { name: 'scream', class: 'smiles', emoji: '😱' },
    { name: 'fearful', class: 'smiles', emoji: '😨' },
    { name: 'cold_sweat', class: 'smiles', emoji: '😰' },
    { name: 'disappointed_relieved', class: 'smiles', emoji: '😥' },
    { name: 'sweat', class: 'smiles', emoji: '😓' },
    { name: 'hugging', class: 'smiles', emoji: '🤗' },
    { name: 'thinking', class: 'smiles', emoji: '🤔' },
    { name: 'face_with_peeking_eye', class: 'smiles', emoji: '🫣' },
    { name: 'face_with_hand_over_mouth', class: 'smiles', emoji: '🤭' },
    { name: 'saluting_face', class: 'smiles', emoji: '🫡' },
    { name: 'face_with_open_eyes_and_hand_over_mouth', class: 'smiles', emoji: '🫢' },
    { name: 'shushing_face', class: 'smiles', emoji: '🤫' },
    { name: 'melting_face', class: 'smiles', emoji: '🫠' },
    { name: 'lying_face', class: 'smiles', emoji: '🤥' },
    { name: 'no_mouth', class: 'smiles', emoji: '😶' },
    { name: 'dotted_line_face', class: 'smiles', emoji: '🫥' },
    { name: 'neutral_face', class: 'smiles', emoji: '😐' },
    { name: 'face_with_diagonal_mouth', class: 'smiles', emoji: '🫡' },
    { name: 'expressionless', class: 'smiles', emoji: '😑' },*/
]

/*
function replaceEmojis(text) {
    for(let i = 0; i < emojiList.length; i++) {
        if(text.includes(`:${emojiList[i].name}:`)) {
            text = text.replace(`:${emojiList[i].name}:`, `<img src="../img/emojis/${emojiList[i].class}/${emojiList[i].name}.svg" class="post-content-emoji">`)
            return text
        } else if(text.includes(emojiList[i].emoji)) {
            text = text.replace(emojiList[i].emoji, `<img src="../img/emojis/${emojiList[i].class}/${emojiList[i].name}.svg" class="post-content-emoji">`)
            return text
        } else {
            return text
        }
    }
}

console.log(replaceEmojis('hey there :grinning:'))
*/

for(let i = 0; i < emojiList.length; i++) {
    console.log(`<img src="../img/emojis/${emojiList[i].class}/${emojiList[i].name}.svg" class="create-post-emojis-content-container-options-content-emoji" onclick="addEmoji('${emojiList[i].emoji}')">`)
}

