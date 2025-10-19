
```markdown
# 💳 Smart ATM Simulator

[![HTML5](https://img.shields.io/badge/HTML5-orange?logo=html5)]() 
[![CSS3](https://img.shields.io/badge/CSS3-blue?logo=css3)]() 
[![JavaScript](https://img.shields.io/badge/JavaScript-yellow?logo=javascript)]()  
[![Status](https://img.shields.io/badge/Project-Live-success?logo=githubpages)](https://ahmed-devx.github.io/project-38-ATM/)

A **JavaScript-based ATM Simulator** that intelligently dispenses cash using **mixed denominations**, just like a real ATM.  
It ensures the total matches the withdrawal amount while providing a **smart, realistic note combination**.

🎯 **Live Demo:** [Smart ATM Simulator](https://ahmed-devx.github.io/project-38-ATM/)

---

## 🧠 Overview

This project demonstrates a smart ATM logic system.  
When a user enters a withdrawal amount, the program distributes the cash using a **balanced mix of notes** — not only large bills.  

It’s a great mini-project for JavaScript learners who want to master:
- Loops  
- Conditionals  
- Math operations (`Math.floor()`, `%`)  
- DOM manipulation  

---

## 💰 Available Denominations

```

5000, 1000, 500, 100, 50, 20, 10

```

---

## ⚙️ Features

✅ User enters any valid withdrawal amount  
✅ Displays detailed note breakdown  
✅ Smart cash distribution (prefers large notes but includes smaller ones)  
✅ Prevents invalid entries (not multiples of 10)  
✅ Shows total number of notes dispensed  
✅ 100% built with **HTML, CSS, and JavaScript only**

---

## 🧮 Example Output

**Input:**
```

Enter amount: 7000

```

**Output:**
```

💵 Notes Breakdown:

5000: 1
1000: 1
500: 1
100: 4
50: 1
20: 2
10: 1
Total notes: 10

````

---

## 💡 How It Works

1. User enters amount → program checks if it’s a multiple of 10.  
2. The script loops through all denominations (from largest to smallest).  
3. For each denomination:
   - `Math.floor(amount / note)` → finds number of notes.  
   - `amount % note` → updates remaining amount.  
   - Counts total notes dispensed.  
4. Displays a clear, formatted result in the browser.

---

## 🧰 Technologies Used

| Technology | Purpose |
|-------------|----------|
| **HTML5** | Page structure |
| **CSS3** | Styling and layout |
| **JavaScript (ES6)** | Logic, calculations, and DOM manipulation |

---

## 🖥️ Setup Instructions

1. **Clone this repository:**
   ```bash
   git clone https://github.com/ahmed-devx/project-38-ATM.git
````

2. **Open the folder** in VS Code or any editor.
3. **Run** `index.html` in your browser.
4. **Enter any amount** to test your smart ATM!

---

## 📸 Preview

![ATM Screenshot](https://ahmed-devx.github.io/project-38-ATM/preview.png)

---

## 🚀 Future Enhancements

* 💾 Add ATM balance tracking
* 💸 Add deposit & transaction history
* ⚙️ Allow custom denominations
* 🧾 Generate printable withdrawal receipt

---

## 👨‍💻 Author

**Muhammad Ahmed**
Full Stack Developer & JavaScript Enthusiast

💼 [LinkedIn](https://www.linkedin.com/in/muhammad-ahmed-dev07/)
🐙 [GitHub](https://github.com/ahmed-devx)

---

⭐ **If you like this project, don’t forget to star the repo!** ⭐

```

---

Would you like me to make a **shorter version (2–3 sections)** of this README too for your GitHub repo front page — while keeping this detailed one inside `/docs/README.md` (like a pro project structure)?
```
