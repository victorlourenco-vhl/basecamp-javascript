function getAdmins(map){
    let users = [];
    for([key, value] of map) {
        if(value == 'user'){
            users.push(key);
        }
    }
    return users;
}
const usuarios = new Map();
usuarios.set('Victor', 'admin');
usuarios.set('Marcio', 'user');
usuarios.set('José', 'user');

console.log(getAdmins(usuarios));