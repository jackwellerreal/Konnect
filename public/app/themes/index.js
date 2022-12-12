/*
When addiiing a theme, add the code below to the themes array:


{   
    "name": "Theme name",
    "author": "Your konnect username",
    "description": "Theme description",
    "license": "Theme license"
}

*/

const themes = `[
    {   
        "name": "Dark Mode",
        "author": "whatqm",
        "license": "MIT",
        "path": "/css/default/dark/styles.css"
    },
    {   
        "name": "Light Mode",
        "author": "whatqm",
        "license": "MIT",
        "path": "/css/default/light/styles.css"
    },
    {   
        "name": "High Contrast",
        "author": "whatqm",
        "license": "MIT",
        "path": "/css/default/highcontrast/styles.css"
    },
    {   
        "name": "Classic",
        "author": "whatqm",
        "license": "MIT",
        "path": "/css/default/classic/styles.css"
    },
    {   
        "name": "Pitch Black",
        "author": "whatqm",
        "license": "MIT",
        "path": "/css/colours/black/styles.css"
    },
    {   
        "name": "Bright White",
        "author": "whatqm",
        "license": "MIT",
        "path": "/css/colours/white/styles.css"
    },
    {   
        "name": "Discord",
        "author": "whatqm",
        "license": "MIT",
        "path": "/css/social/discord/styles.css"
    },
    {   
        "name": "Github",
        "author": "whatqm",
        "license": "MIT",
        "path": "/css/social/github/styles.css"
    },
    {   
        "name": "Google",
        "author": "whatqm",
        "license": "MIT",
        "path": "/css/social/google/styles.css"
    },
    {   
        "name": "Reddit",
        "author": "whatqm",
        "license": "MIT",
        "path": "/css/social/reddit/styles.css"
    },
    {   
        "name": "Bad HTML",
        "author": "whatqm",
        "license": "MIT",
        "path": "/css/social/badhtml/styles.css"
    },
    {   
        "name": "Mount Fuji",
        "author": "whatqm",
        "license": "MIT",
        "path": "/css/background/styles.css"
    },
    {   
        "name": "Bad HTML",
        "author": "whatqm",
        "license": "MIT",
        "path": "/css/colour/styles.css"
    }
]`;

function previewTheme(theme) {
    console.log('Loading theme: ' + theme);
    const styles = document.getElementById('style');

    styles.href = theme;
}

function loadStore() {
    let themesjson = JSON.parse(themes);

    for (let theme = 0; theme < themesjson.length; theme++) {  
        var html = `
        <div class="post">
            <div class="post-info">
                <img src="img.svg" class="post-pfp">
                <div>
                    <h2>${themesjson[theme].name}</h2>
                    <h3>@${themesjson[theme].author}</h3>
                </div>
            </div>
            <p class="post-content">
                <iconify-icon inline="" icon="fa6-solid:scale-balanced"></iconify-icon> ${themesjson[theme].license} license
            </p>
            </br>
            <button style="background: transparent; border: none; cursor: pointer; color: var(--text); font-size: large; padding: 0.5em; margin-right: 0.75em; margin-top: 0.25em; border-radius: 10px; background-color: var(--button);" id="use-button" onclick=""><iconify-icon inline="" icon="fa6-solid:download"></iconify-icon> Use</button>
            <button style="background: transparent; border: none; cursor: pointer; color: var(--text); font-size: large; padding: 0.5em; margin-right: 0.75em; margin-top: 0.25em; border-radius: 10px; background-color: var(--button);" id="preview-button" onclick="previewTheme('${themesjson[theme].path}')"><iconify-icon inline="" icon="fa6-solid:eye"></iconify-icon> Preview</button>
        </div>` 

        document.getElementById('posts').insertAdjacentHTML('beforeend', html);
    }
}