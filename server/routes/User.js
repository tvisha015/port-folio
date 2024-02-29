import express from 'express';
const route=express.Router();

import { signup, login } from '../controllers/Auth.js';
import  authenticateToken from '../middleware/authMiddleware.js';
import { contactUs } from '../controllers/contactUs.js';
import { createEducation, getEducation, updateEducation } from '../controllers/education.js';
import { createExperience, getExperience, updateExperience } from '../controllers/experience.js';
import { createSocialMedia, getSocialMedia, updateSocialMedia } from '../controllers/socialMedia.js';
import { createProject, getProject, updateProject } from '../controllers/project.js';


route.post('/signup', signup);
route.post('/login', login);
route.post('/contactUs', contactUs);
route.post('/education', authenticateToken, createEducation);
route.get('/education', authenticateToken, getEducation);
route.put('/education/:id', authenticateToken, updateEducation);
route.post('/experience', authenticateToken, createExperience);
route.get('/experience', authenticateToken, getExperience);
route.put('/experience/:id', authenticateToken, updateExperience);
route.post('/socialMedia', authenticateToken, createSocialMedia);
route.get('/socialMedia', authenticateToken, getSocialMedia);
route.put('/socialMedia/:id', authenticateToken, updateSocialMedia);
route.post('/project', authenticateToken, createProject);
route.get('/project', authenticateToken, getProject);
route.put('/project/:id', authenticateToken, updateProject);




export default route;