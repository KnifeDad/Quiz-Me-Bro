import db from '../config/connection.js';
import { Question } from '../models/index.js'
import cleanDB from './cleanDb.js';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const questionData = JSON.parse(
  readFileSync(join(__dirname, 'pythonQuestions.json'), 'utf8')
);

try {
  await db();
  await cleanDB();

  // bulk create each model
  await Question.insertMany(questionData);

  console.log('Seeding completed successfully!');
  process.exit(0);
} catch (error) {
  console.error('Error seeding database:', error);
  process.exit(1);
}
