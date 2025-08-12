// Enunciado:

// Crea una clase User que tenga las siguientes propiedades:

//     username (string)

//     password (string)

// Y los siguientes métodos:

//     login(password) → retorna true si la contraseña coincide, false si no.

//     changePassword(oldPassword, newPassword) → permite cambiar la contraseña solo si oldPassword es correcta. Retorna true si se cambia, false si falla.

//     getMaskedUsername() → devuelve el nombre de usuario con los últimos 2 caracteres ocultos con * (ejemplo: "maria" → "mar**").



class User {
    constructor(username, password) {
        if (typeof username !== 'string') {
            throw new Error('Username must be a string');
        }
        if (!password || typeof password !== 'string') {
            throw new Error('Password must be a non-empty string');
        }

        this.username = username;
        this.password = password;
    }

    login(password) {
        return this.password === password;
    }

    changePassword(oldPassword, newPassword) {
        if (this.password === oldPassword && newPassword && typeof newPassword === 'string') {
            this.password = newPassword;
            return true;
        }
        return false;
    }

    getMaskedUsername() {
        const length = this.username.length;
        if (length <= 2) {
            console.log('*'.repeat(length))
            return '*'.repeat(length);
        }
        console.log(this.username.slice(0, length - 2) + '**')
        return this.username.slice(0, length - 2) + '**';
    }
}

// Ejemplo de uso:
const user = new User("maria", "12345");

console.log(user.login("12345")); // true
console.log(user.changePassword("12345", "abcde")); // true
console.log(user.login("abcde")); // true
console.log(user.getMaskedUsername()); // mar**
