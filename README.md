  Safe Workplace AI Monitor

A professional, AI-powered tool to promote respectful and inclusive communication in workplaces.

This project was developed as part of the IBM SkillsBuild AI Summer Certificate Program 2025. It uses lightweight NLP techniques to classify messages as safe, gender-biased, or harassment, and can optionally log flagged cases anonymously for future analysis.


1. Project Overview

The Safe Workplace AI Monitor is designed to analyze written communication—such as chat messages or emails—in workplace settings. Its primary goal is to detect potentially harmful content, including gender-biased language and harassment, without compromising user privacy.

The tool helps promote gender equality, encourages healthier professional environments, and demonstrates a practical use of ethical AI.


 2. Key Features

-> Analyzes communication anonymously  
-> Detects harassment and gender bias using simple NLP classification  
-> Categorizes messages into:  
  -> Safe Communication  
  -> Gender Bias Detected  
  -> Harassment Detected  
-> Logs flagged incidents to external systems (e.g., Google Sheets via Zapier webhook)  
-> No user authentication required – lightweight and accessible  
-> Easy to deploy and adapt for different use cases  


 3. How It Works

1. The user pastes a workplace message into the tool.  
2. The AI logic (currently keyword-based) analyzes the message.  
3. The message is classified based on pre-defined rules.  
4. If gender bias or harassment is detected, the incident can be logged via a webhook for HR or administrative review.  

This system is entirely client-side and does not store or transmit user data unless explicitly configured.


4.Project Structure

Root Directory

README.md – Project overview, instructions, and documentation.

data.json – Sample messages flagged by the AI logic for demo/testing.

index.html – Main HTML file that renders the user interface.


/static

static/css/style.css – Stylesheet for the frontend UI (colors, layout, fonts).

static/js/script.js – JavaScript file containing classification logic (AI logic).


/templates

templates/index.html – Optional: if using Flask or any backend (else, same as root index.html).


> Note: If you're hosting this as a static website (e.g., GitHub Pages or Netlify), you don't need the /templates folder — just place index.html at the root.


Example Layout (Tree View)

Safe_Workplace_AI_Monitor/
├── index.html
├── data.json
├── README.md
├── static/
    ├── css/
    │   └── style.css
    └── js/
        └── script.js


5. Sample Log Format

Example of a message flagged and logged anonymously:

```json
[
  {
    "message": "You're too emotional to lead this team.",
    "category": "Gender Bias",
    "timestamp": "2025-08-06T10:00:00Z"
  },
  {
    "message": "You're a complete idiot.",
    "category": "Harassment",
    "timestamp": "2025-08-06T11:00:00Z"
  }]
```

6. Tech Stack

Frontend: HTML, CSS, JavaScript

NLP Logic: Basic keyword-based detection

Deployment: GitHub Pages or Netlify (static site)

Logging: Webhook integration with Zapier + Google Sheets


7. Use Cases

Internal HR tools for behavior monitoring

Educational AI/ethics projects

University or high school AI showcase

Gender equality hackathons or innovation challenges


8. Future Improvements

Replace keyword detection with machine learning model (BERT or custom)

Expand dataset with anonymized real-world examples

Add admin dashboard with incident summaries

Real-time integration with workplace platforms (Slack, Microsoft Teams)

Role-based access for HR teams


9. Deployment Instructions

To deploy this project using GitHub Pages:

1. Fork or clone this repository.


2. Go to your GitHub repository settings.


3. Navigate to "Pages".


4. Under "Source", select main branch and / (root) folder.


5. Save and wait for the link to be generated.



You can also deploy it on Netlify or any static site hosting platform.


10. Credits

Developed by: [Your Name or Team Name]
Program: IBM SkillsBuild AI Summer Certificate Program – 2025
Location: India



11. License

This project is open-source and released under the MIT License.
Feel free to use, modify, and share with appropriate credit.


12. Feedback

Have suggestions, ideas, or found a bug?
Please open an issue in this repository or connect via LinkedIn.

