function validateForm(event) {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm_password").value;

    if (password !== confirmPassword) {
        alert("Mật khẩu xác nhận không khớp!");
        event.preventDefault();
        return false;
    }

    alert("Đăng ký thành công!");
    return true;
}

function validateAge() {
    const birthdayInput = document.getElementById("birthday");
    if (!birthdayInput.value) return;

    const birthday = new Date(birthdayInput.value);
    const today = new Date();

    let age = today.getFullYear() - birthday.getFullYear();
    const monthDiff = today.getMonth() - birthday.getMonth();

    if (monthDiff < 0 || 
       (monthDiff === 0 && today.getDate() < birthday.getDate())) {
        age--;
    }

    if (age < 18) {
        birthdayInput.setCustomValidity("Bạn phải trên 18 tuổi!");
    } else {
        birthdayInput.setCustomValidity("");
    }
}