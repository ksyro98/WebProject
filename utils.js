const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

function simplePhpPostRequest(url, credentials, onSuccess, onFailure){
    phpRequest(
        url,
        "POST",
        {"Content-Type": "application/json"},
        credentials,
        onSuccess,
        onFailure
    )
}

function phpRequest(url, method, headers, credentials, onSuccess, onFailure){
    fetch(url, {
        method: method,
        headers: headers,
        body: JSON.stringify(credentials)
    })
        .then(res => {
            onSuccess(res)
        })
        .catch(reason => {
            console.log(reason)
            onFailure(reason)
        })
}

function getUserData(onSuccess) {
    let indexPhpUrl = 'http://localhost:63342/WebProject/index.php'
    simplePhpPostRequest(
        indexPhpUrl,
        {},
        res => {
            res.json()
                .then(res => {
                    onSuccess(res)
                })
        },
        reason => {

        }
    )
}