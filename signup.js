const signupForm = document.getElementById('signupForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const confirmInput = document.getElementById('confirmPassword');
const errorDisplay = document.getElementById('errorDisplay');

signupForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmInput.value.trim();

    errorDisplay.style.display = 'none';
    errorDisplay.textContent = '';
    errorDisplay.classList.remove('success-text');

    if (username === '' || password === '' || confirmPassword === '') {
        showError('กรุณากรอกข้อมูลให้ครบถ้วน ⚠️');
        return;
    }

    if (password.length < 8) {
        showError('รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร 🔐');
        return;
    }

    if (password !== confirmPassword) {
        showError('รหัสผ่านทั้งสองช่องไม่ตรงกัน ❌');
        return;
    }

    const savedUsers = JSON.parse(localStorage.getItem('users') || '{}');
    if (savedUsers[username]) {
        showError('ชื่อผู้ใช้งานนี้มีอยู่แล้ว กรุณาเปลี่ยนใหม่');
        return;
    }

    savedUsers[username] = password;
    localStorage.setItem('users', JSON.stringify(savedUsers));

    errorDisplay.classList.add('success-text');
    errorDisplay.textContent = 'สมัครสมาชิกสำเร็จ! ย้ายไปหน้าเข้าสู่ระบบใน 2 วินาที...';
    errorDisplay.style.display = 'block';

    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000);
});

function showError(message) {
    errorDisplay.textContent = message;
    errorDisplay.style.display = 'block';
}
