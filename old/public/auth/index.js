function errorPopup(error) {
    new Notify({
        status: 'error',
        title: "Error",
        text: error,
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

function loginerror() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const error = urlParams.get('error')
    if (error == "adne") {
        errorPopup("Account does not exist")
        console.log(error)
    }
    if (error == "ieop") {
        errorPopup("Incorrect email or password")
        console.log(error)
    }
}

function signuperror() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const error = urlParams.get('error')
    if (error == "aae") {
        errorPopup("Account already exists")
        console.log(error)
    }
}