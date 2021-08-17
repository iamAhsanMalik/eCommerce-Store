import bcrypt from 'bcryptjs';
const users = [
  {
    userName: 'Admin User',
    userEmail: 'admin@example.com',
    userPassword: bcrypt.hashSync('admin'),
    isAdmin: true,
  },
  {
    userName: 'John Doe',
    userEmail: 'john@example.com',
    userPassword: bcrypt.hashSync('admin'),
  },
  {
    userName: 'Jane Doe',
    userEmail: 'jane@example.com',
    userPassword: bcrypt.hashSync('admin'),
  },
];

export default users;
