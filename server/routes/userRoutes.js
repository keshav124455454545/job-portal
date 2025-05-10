import express from 'express'
import { applyForJob, getUserData, getUserJobApplications, updateUserResume, createOrGetUser } from '../controllers/userController.js'
import upload from '../config/multer.js'


const router = express.Router()

// Create or Get user Data
router.post('/create-or-get', createOrGetUser)

// Get user Data
router.get('/user', getUserData)

// Apply for a job
router.post('/apply', applyForJob)

// Get applied jobs data
router.get('/applications', getUserJobApplications)

// Update user profile (resume)
router.post('/update-resume', upload.single('resume'), updateUserResume)

export default router;