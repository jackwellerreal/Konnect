function homeload(){
    const postwrapper = document.querySelector('.postwrapper');
    const data = fetch('./data/posts.json')
    .then(response => response.json())
    .then(data => {
        for(let data = 0; data < data.length; data++){
            const data = data.json( )

            html = ''
            html += `<div class="post">`
            html += `<div class="post-info">`
            html += `<img src="${alert}" class="post-pfp">`
            html += `<div>`
            html += `<h2>${alert}</h2><h4 style="padding-top: 0.25em; color: var(--light-60);">@${alert}</h4>`
            html += `</div>`
            html += `</div>`
            html += `<p class="post-content">${alert}</p>`
            html += `<div class="post-options-container">`
            html += `<h3 class="post-options post-options-like"><iconify-icon inline icon="fa6-solid:heart"></iconify-icon> ${alert}</h3>`
            html += `<h3 class="post-options post-options-reposts"><iconify-icon inline icon="fa6-solid:retweet"></iconify-icon> ${alert}</h3>`
            html += `<h3 class="post-options post-options-replies"><iconify-icon inline icon="fa6-solid:comment"></iconify-icon> ${alert}</h3>`
            html += `</div>`
            html += `</div>`

            console.log(html)

            postwrapper.insertAdjacentHTML('beforeend', html);
        }
    })
}