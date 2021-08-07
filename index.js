// [Variable scopes and This keyword]

// This will be attached to the Window object. 🚫
var move = function() {
    console.log('moving...');
}


const user = {
    name: 'Gustavo',
    lastSession: '2021-07-07',
    permissions: ['read', 'write', 'delete'],
    listPermissions() {
        // const self = this;
        this.permissions.forEach(p => {
            console.log(this.name, p);
        });
    }
}

user.listPermissions();