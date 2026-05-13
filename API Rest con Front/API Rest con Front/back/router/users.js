import express from 'express';
import { login } from '../services/users.js';

const router = express.Router();

router.post('/login', async (req, res) => {
    try {
    const user = req.body;
    const result = await login(user);
    if(result) {
        res.status(200).json(result);
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
    } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error' });
    }
});

export default router;