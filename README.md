# Popup Design

## 📌 Project Overview
This project is a **modern popup design** that displays a thank-you message when a user submits a form. The popup appears smoothly with a subtle animation effect and can be closed with an "OK" button.

---

## 🎨 Tech Stack
- **HTML** – For structuring the page
- **CSS** – For styling and animations
- **JavaScript** – For handling popup functionality

---

## 🚀 Features
✅ Smooth popup animation

✅ Fully responsive design

✅ Click-based trigger mechanism

✅ Minimalist and clean UI

✅ Lightweight and fast

---

## 📂 File Structure
```
Popup-Design/
│── index.html        # Main HTML structure
│── style.css         # Styles for the popup and page
│── script.js         # JavaScript functionality
│── 404-tick.png      # Tick icon for the popup
│── README.md         # Project documentation
```

---

## 📸 Screenshot
![Popup Design](preview.png) *(Add a preview image of your project here)*

---

## 🎯 How to Use
1. **Download or clone** this repository.
2. Open `index.html` in a browser.
3. Click the **Submit** button to trigger the popup.
4. Click **OK** to close the popup.

---

## ⚡ Code Snippets
### HTML Structure
```html
<div class="container">
    <button type="submit" class="btn">Submit</button>
    <div class="popup" id="popup">
        <img src="404-tick.png" alt="tick-icon">
        <h2>Thank You!</h2>
        <p>Your details have been successfully submitted.</p>
        <button type="button" class="OKbtn">OK</button>
    </div>
</div>
```

---

### JavaScript Functionality
```js
let btn = document.querySelector(".btn");
let okBtn = document.querySelector(".OKbtn");
let popup = document.getElementById("popup");

btn.addEventListener("click", () => {
    popup.classList.add("open-popup");
});

okBtn.addEventListener("click", () => {
    popup.classList.remove("open-popup");
});
```

---

## 🌟 Future Improvements
🔹 Add fade-in/out animation

🔹 Implement a countdown timer for auto-close

🔹 Enhance accessibility with ARIA attributes

---

## 🏆 Author
**Pranav Thorat** 🚀  

---

## 📜 License
This project is **open-source** and free to use under the MIT License.

