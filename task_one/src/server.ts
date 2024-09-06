import express, { Request, Response } from 'express';
import fs from 'fs';
import jwt from 'jsonwebtoken';
import path from 'path';

const app = express();
app.use(express.json());

const usersFilePath = path.resolve(__dirname, 'users.json');

const loadUsers = (): Array<{ id: number, username: string, password: string, image: string }> => {
  const data = fs.readFileSync(usersFilePath, 'utf-8');
  return JSON.parse(data);
};

app.post('/login', (req: Request, res: Response) => {
  const { username, password } = req.body;
  const users = loadUsers();
  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user.id }, 'secret_key', { expiresIn: '1h' });

  res.json({ token, image: user.image });
});

app.listen(5000, () => {
  console.log('Server running at http://localhost:5000');
});
