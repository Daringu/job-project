
function validateEmail(email:string,notify:any) {
    if (email.length<3) {
        notify.failure('the email must have at least 3 letters')
        return false
    }
    if (!email.includes('@')) {
        notify.failure('the email should include "@"')
        return false
    }
    return true
}

export {validateEmail}