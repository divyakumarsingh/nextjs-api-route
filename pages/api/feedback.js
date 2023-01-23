import path from 'path';
import fs from 'fs';

export default function handler(req, res) {
  const email = req.body.email || "";
  const feedback = req.body.feedback || "";

  const feedbackObj = {
    id: new Date().toISOString(),
    email,
    feedback
  }

  const filePath = path.join(process.cwd(), 'data', 'feedback.json');
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);

  data.push(feedbackObj);
  fs.writeFileSync(filePath, JSON.stringify(data));
  res.status(201).json({ message: "Added successfully", feedback: feedbackObj });
}
