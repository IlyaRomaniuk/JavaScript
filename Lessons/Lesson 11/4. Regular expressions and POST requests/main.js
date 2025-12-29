let form = document.forms[0];
form.onsubmit = function(ev) {
    ev.preventDefault();
    let userId = this.userId.value;
    let title = this.title.value;
    let body = this.body.value;
    console.log(userId, title, body);
}