import express from 'express';
import User from '../models/user_model.js'; // Make sure the file name ends with .js if using ES Modules

const router = express.Router();

router.post('/', async (req, res) => {
  const { identifier, password } = req.body;

  try {
    // Normalize the identifier
    const normalizedIdentifier = identifier.toLowerCase();

    // Check if user already exists
    const existingUser = await User.findOne({ identifier: normalizedIdentifier });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user (storing plain password - not secure)
    const newUser = new User({
      identifier: normalizedIdentifier,
      password
    });

    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
