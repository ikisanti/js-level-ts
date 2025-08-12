# Frontend JavaScript Interview Exercises

This repository contains 40 coding challenges to practice JavaScript and DOM manipulation, based on real WebUI interview patterns from companies like **Globant**.

## Table of Contents

1. Unique Numbers  
2. Reverse String  
3. Frequency Counter  
4. Cart Total  
5. Active Users  
6. Flatten Nested Array  
7. Button Click (DOM)  
8. Login Form Validation (DOM)  
9. Render Product Cards (DOM)  
10. Task List with Toggle (DOM)  
11. Capitalize Words  
12. Count Vowels  
13. Find Duplicates  
14. Toggle Paragraph Visibility (DOM)  
15. Dark Mode Toggle (DOM)  
16. Palindrome Checker  
17. Deep Clone Object  
18. Countdown Timer (DOM)  
19. Accordion Section (DOM)  
20. Hover Info (DOM)  
21. Drag and Drop Basic (DOM)  
22. Debounced Search Input (DOM)  
23. Class Inheritance  
24. Validate Login with OOP  
25. Module System (Import/Export)  
26. Make a Custom EventEmitter (Class)  
27. Create an Observable Object (OOP)  
28. Stopwatch App (DOM + OOP)  
29. Infinite Scroll (DOM)  
30. Keyboard Shortcuts (DOM)  
31. Fetch Users and Display  
32. Handle Fetch Errors  
33. Retry Fetch Logic  
34. AbortController Example  
35. Show Spinner on Async Load  
36. Lazy Load Images  
37. Closure Counter (Testable)  
38. Toggle Class Utility (Testable)  
39. Create Custom DOM Element  
40. Memory Game Setup (Logic Only)  

---

## 1. Unique Numbers
**Prompt:** Create a function that receives an array of numbers and returns a new array with only the unique numbers (no repetitions), in the same order they first appear.

```js
// Input:
[4, 5, 6, 4, 2, 5, 1]
// Output:
[4, 5, 6, 2, 1]
```

---

## 2. Reverse String
**Prompt:** Write a function that receives a string and returns it reversed without using `.reverse()`.

---

## 3. Frequency Counter
**Prompt:** Create a function that receives a string and returns an object showing how many times each word appears.

```js
// Input:
"hola mundo hola hola mundo js js js"
// Output:
{ hola: 3, mundo: 2, js: 3 }
```

---

## 4. Cart Total
**Prompt:** Calculate the total to pay based on quantity and price of each product.

```js
[
  { name: "T-shirt", qty: 2, price: 25 },
  { name: "Pants", qty: 1, price: 40 },
  { name: "Shoes", qty: 1, price: 60 }
]
```

---

## 5. Active Users
**Prompt:** Given an array of users with a `lastLogin` date, return the names of users who logged in within the last 365 days.

```js
[
  { name: "Ana", lastLogin: "2024-12-20" },
  { name: "Luis", lastLogin: "2022-03-15" },
  { name: "Sofía", lastLogin: "2025-06-01" }
]
```

---

## 6. Flatten Nested Array
**Prompt:** Create a function that receives a nested array and flattens it (without `.flat()`).

```js
[1, [2, [3, 4], 5], 6]
// Output: [1, 2, 3, 4, 5, 6]
```

---

## 7. Button Click (DOM)
**Prompt:** Add an event listener to every button that changes its text to "Clicked!" when pressed.

---

## 8. Login Form Validation (DOM)
**Prompt:** Validate email and password fields on submit. Show inline errors if email is invalid or password is < 6 characters.

---

## 9. Render Product Cards (DOM)
**Prompt:** Render cards dynamically inside a div with ID "products". Show “On sale 🎉” if applicable.

```js
[
  { name: "Camisa", price: 25, onsale: true },
  { name: "Pantalón", price: 40, onsale: false },
  { name: "Zapatos", price: 60, onsale: true }
]
```

---

## 10. Task List with Toggle (DOM)
**Prompt:** Show a task list with a toggle button per item to mark as completed or not.

```js
[
  { id: 1, text: "Hacer ejercicio", complete: false },
  { id: 2, text: "Estudiar JavaScript", complete: true },
  { id: 3, text: "Leer un libro", complete: false }
]
```

---

## 11. Capitalize Words
**Prompt:** Given a string, return the same string with each word capitalized.

---

## 12. Count Vowels
**Prompt:** Write a function that counts how many vowels are in a string.

---

## 13. Find Duplicates
**Prompt:** Given an array, return a list of duplicated values.

---

## 14. Toggle Paragraph Visibility (DOM)
**Prompt:** Create a button that toggles the visibility of a paragraph. The button text should switch between “Show Details” and “Hide Details”.

---

## 15. Dark Mode Toggle (DOM)
**Prompt:** Create a button that toggles between light and dark themes by adding/removing a class on the `body`.

---

## 16. Palindrome Checker
**Prompt:** Check if a string is a palindrome (reads the same forward and backward).

---

## 17. Deep Clone Object
**Prompt:** Create a function that deeply clones an object (nested keys included).

---

## 18. Countdown Timer (DOM)
**Prompt:** Display a countdown in seconds and stop when it reaches 0.

---

## 19. Accordion Section (DOM)
**Prompt:** Create collapsible sections that expand or hide their content on click.

---

## 20. Hover Info (DOM)
**Prompt:** Show a tooltip with additional info when hovering an element.

---

## 21. Drag and Drop Basic (DOM)
**Prompt:** Implement basic drag and drop for items inside a container.

---

## 22. Debounced Search Input (DOM)
**Prompt:** Add a debounced input listener that logs search value only if the user stops typing for 500ms.

---

## 23. Class Inheritance
**Prompt:** Create a class Animal and extend it into Dog and Cat, each with its own method.

---

## 24. Validate Login with OOP
**Prompt:** Use a class `LoginForm` that validates user credentials and exposes a login method.

---

## 25. Module System (Import/Export)
**Prompt:** Create two modules: `math.js` (with exported `add`) and `main.js` that imports and uses it.

---

## 26. Make a Custom EventEmitter (Class)
**Prompt:** Create an `EventEmitter` class with `.on(event)`, `.emit(event)` and `.off(event)` methods.

---

## 27. Create an Observable Object (OOP)
**Prompt:** Implement a custom observable object that notifies subscribers when properties are changed.

---

## 28. Stopwatch App (DOM + OOP)
**Prompt:** Create a basic stopwatch with start, stop, and reset buttons using a class and setInterval.

---

## 29. Infinite Scroll (DOM)
**Prompt:** Load more items when the user scrolls near the bottom of the page.

---

## 30. Keyboard Shortcuts (DOM)
**Prompt:** Listen to key combinations like Ctrl+S or Shift+R and show alerts when pressed.

---

## 31. Fetch Users and Display
**Prompt:** Use fetch to get users from an API and render their names in a list.

---

## 32. Handle Fetch Errors
**Prompt:** Wrap fetch calls in try/catch and show a fallback message if it fails.

---

## 33. Retry Fetch Logic
**Prompt:** Retry a fetch call up to 3 times if it fails (with delay).

---

## 34. AbortController Example
**Prompt:** Use AbortController to cancel a fetch request if it takes too long.

---

## 35. Show Spinner on Async Load
**Prompt:** Show a spinner while fetching data and hide it when data is loaded.

---

## 36. Lazy Load Images
**Prompt:** Load images only when they are about to enter the viewport (IntersectionObserver).

---

## 37. Closure Counter (Testable)
**Prompt:** Create a function `makeCounter()` that returns an incrementing counter.

---

## 38. Toggle Class Utility (Testable)
**Prompt:** Create a function that toggles a class name on an element.

---

## 39. Create Custom DOM Element
**Prompt:** Create a utility that builds an element with tag, attributes and content.

---

## 40. Memory Game Setup (Logic Only)
**Prompt:** Write a function to shuffle an array of card pairs for a memory game.
