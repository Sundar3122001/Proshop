import bcrypt from 'bcryptjs';

const users=[
    {
    name:'Admin User',
    email:'admin@email.com',
    password:bcrypt.hashSync('123456',10),
    isAdmin:true   
    },
    {
        name:'nandha',
        email:'nandha@email.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:false   
    },
    {
        name:'livi',
        email:'livi@email.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:false   
    }
]

export default users;