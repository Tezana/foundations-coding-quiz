# Foundations of Coding Quiz App

A simple, ADHD-friendly study app for WGU Foundations of Coding.

## Current content

- Module 1: Algorithmic Thinking & Programming
- 40 multiple-choice questions
- Immediate feedback and explanations
- Randomized question order
- 5 / 10 / 20 / all-question quiz modes
- Saves best score locally in the browser
- Mobile friendly

## Adding future modules

Open `data/modules.js` and add another object:

```js
{
  id: "module2",
  title: "Module 2: Troubleshooting & Debugging",
  questions: [
    {
      q: "Question text",
      choices: ["A", "B", "C", "D"],
      answer: 0,
      explanation: "Short explanation"
    }
  ]
}
```

The app automatically adds the module to the dropdown.

## Run locally

Double-click `index.html`, or use a local server:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000

## Publish with GitHub Pages

1. Create a GitHub repository named `foundations-coding-quiz`.
2. Upload all files in this folder to the repository.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder.
6. Save.
7. GitHub will provide the live website link.

## File structure

```text
foundations-coding-quiz/
├── index.html
├── styles.css
├── app.js
├── README.md
└── data/
    └── modules.js
```
