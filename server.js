const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorDisplay = document.getElementById('errorDisplay');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    errorDisplay.style.display = 'none';
    errorDisplay.textContent = '';

    // 1. ตรวจสอบว่ากรอกข้อมูลครบถ้วนไหม
    if (username === '' || password === '') {
        showError('กรุณากรอกข้อมูลให้ครบถ้วน ⚠️');
        return;
    }

    // 2. ตรวจสอบบัญชีผู้ใช้จาก localStorage
    const savedUsers = JSON.parse(localStorage.getItem('users') || '{}');
    const isDefaultAdmin = username === 'admin' && password === '12121212';
    const isRegisteredUser = savedUsers[username] === password;

    if (isDefaultAdmin || isRegisteredUser) {
        localStorage.setItem('loginUser', username);
        window.location.href = 'page.html';
    } else {
        showError('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง ❌');
    }
});

function showError(message) {
    errorDisplay.textContent = message;
    errorDisplay.style.display = 'block';
}
