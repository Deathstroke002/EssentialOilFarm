import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Aman Saini',
        email: 'aman@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Ayush Vardhan',
        email: 'ayush@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users
