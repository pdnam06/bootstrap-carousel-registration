const form = document.querySelector('#registration-form');
const password = document.querySelector('#password');
const confirmation = document.querySelector('#confirmation');
const result = document.querySelector('#form-result');
function validateMatch() {
    confirmation.setCustomValidity(confirmation.value && confirmation.value !== password.value
        ? 'Mật khẩu xác nhận chưa khớp.' : '');
}
form.addEventListener('input', () => { result.hidden = true; validateMatch(); });
form.addEventListener('submit', (event) => {
    event.preventDefault();
    validateMatch();
    if (form.reportValidity()) result.hidden = false;
});
