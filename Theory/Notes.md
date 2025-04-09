
# 📌 React Hook: useRef

## 🔍 What is `useRef`?

- `useRef` is a hook in React that allows you to **access and control HTML elements directly**.
- It creates a **reference** (ref) to a DOM element or a value that **doesn't cause re-renders** when changed.

---

## 🧠 Why use `useRef`?

- To **get the value** from an `<input>` or any HTML element **without** using `useState`.
- To **focus** or **scroll** to a specific element.
- To **store** any mutable value without re-rendering the component.

---

## 💡 useRef vs useState

| Feature        | `useRef`                              | `useState`                          |
|----------------|----------------------------------------|-------------------------------------|
| Triggers re-render | ❌ No                             | ✅ Yes                              |
| Use case          | Access DOM, hold value silently     | Store value and update UI           |
| Usage in forms    | Uncontrolled inputs                 | Controlled inputs                   |

---

## 🔧 Syntax

```js
const myRef = useRef(initialValue);

```

## Example

```js
import React, { useRef } from 'react';

function RefForm() {
  const inputRef = useRef(null); // Creating reference to the input box

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("You typed: " + inputRef.current.value); // Accessing input value directly
    inputRef.current.value = ""; // Clearing the input
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef}//ref set the reference

      placeholder="Enter something" />
      <button type="submit">Submit</button>
    </form>
  );
}


export default RefForm;
```




# 🧠 Understanding useRef as a Reference (Pointer)

## 🔍 What does "setting a reference" mean in React?

When we use `useRef` like this:

```js
const inputRef = useRef();
```

We are asking React:

> "Please give me a **box** to store something that doesn't trigger re-renders."

Then when we write:

```jsx
<input ref={inputRef} />
```

React will automatically place the **actual input DOM element** into that box.

---

## 📦 What is inside inputRef?

After rendering, this is what happens:

```js
inputRef.current === <input type="text" />
```

That means:

- `inputRef` → The reference object
- `inputRef.current` → The actual input DOM element
- `inputRef.current.value` → The value inside the input field

---

## 💡 Analogy: Pointer in C/C++ vs useRef in React

### In C/C++:

```c
int a = 10;
int* ptr = &a; // ptr points to a
```

### In React:

```js
const inputRef = useRef();
<input ref={inputRef} /> // inputRef "points" to the DOM element
```

- `ptr` points to the memory location of `a`
- `inputRef.current` points to the input element

---

## ✅ Final Summary

- `useRef()` gives you a **reference object**.
- `ref={inputRef}` tells React to **put the actual DOM element** inside `.current`.
- Access the value with `inputRef.current.value`.
- It’s just like using a **pointer** to a DOM element — without re-rendering anything.

---




 ## 🔤 What is Regex?

- Regex (short for Regular Expression) is a pattern used to match text.

- Think of it as a smart filter that checks if a string (like an email, password, phone number, etc.) follows a certain format.





## Hosting React Application to Firebase in Short

### ✅ Setting Up Firebase and Configuration

1. Visit [Firebase](https://firebase.google.com/)
2. Click **Get Started** (Login/Signup to Firebase)
3. Click **Add Project** and give your project a name
4. Note down the **Project ID**
5. Enable **Google Analytics** for your project (optional)
6. Configure Analytics using the default account
7. Click **Create Project**
8. After creation, you’ll be taken to the **Firebase Dashboard**
9. Click the **Web</>** icon to register your app as a web app
10. Provide a name for your web app
11. Check the option: `Also set up Firebase Hosting for this app`
12. Click **Register App**
13. Firebase will now show a configuration script
    - Install Firebase SDK in your project:
      ```bash
      npm install firebase
      ```
    - Create a file `firebase.js` inside the `utils` folder
    - Copy and paste the provided configuration code

14. Navigate to **Authentication > Sign-in method** in Firebase Console
15. Enable **Email/Password** sign-in method (you may enable other providers too)
16. You can now see all registered users under the **Users** tab

---

### 🚀 Deployment Steps

1. Open terminal in your React project directory
2. Run the following commands:

   ```bash
   npm install -g firebase-tools     # Install Firebase CLI globally
   firebase login                    # Login to your Firebase account
   firebase init                    # Initialize Firebase in your project
   ```

3. After running `firebase init`, follow the prompts:

#### 🔧 firebase init Prompts:

- Select features to set up:
  - Use arrow keys and spacebar to select:
    - `Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys`

- Choose project:
  - `Use an existing project`
  - Then choose your created Firebase project (e.g., `netflixgpt-57a56`)

- Hosting Setup:
  - `What do you want to use as your public directory?`
    - Type: `build`
  - `Configure as a single-page app (rewrite all URLs to /index.html)?`
    - Answer: `No`
  - `Set up automatic builds and deploys with GitHub?`
    - Answer: `No`

- Firebase will generate files:
  - `.firebaserc`, `firebase.json`
  - Confirm it writes `build/404.html` if applicable

4. Build your React app:
   ```bash
   npm run build
   ```
   - This creates an optimized `build` folder

5. Finally, deploy your app:
   ```bash
   firebase deploy
   ```

6. You’ll get a Firebase Hosting URL where your site is live 🎉

---

### ✅ Summary:
- Firebase helps you host your React app with a few easy steps
- `firebase init` configures your project for deployment
- `firebase deploy` uploads and makes your site live

Make sure your `build` directory is clean and tested before every deployment.






---

```markdown
# 📘 Netflix GPT1 – Firebase + Redux Auth Integration Notes

## 🔐 Regex for Validation

### ✅ Regex for Email Validation

```js
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```

### ✅ Regex for Password Validation

```js
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
```

---

## 🔥 Adding the SignUp Account of User to Firebase

- Go to Firebase documentation  
- Search for the **User Authentication**  
- Go to the **Web** section and search for  
- **Password Authentication** (because we are using the email and password-based authentication)  
- Then select the `createUserWithEmailAndPassword` Web modular API  

---

## 🚀 Dispatch the Action for the Redux Store

- We can do dispatch an action on the **SignUp** and **SignIn** utilities or APIs provided by Firebase because the SignUp and SignIn APIs by Firebase provide us the `user` object which contains the SignUp and SignIn information.

- We have to dispatch an action on **SignUp**, **SignIn** as well as **Log out** of the user.  
  Instead of dispatching the action again and again and here and there, we use a utility or API provided by Firebase.

---

## 🔁 Firebase `onAuthStateChanged` – Manage Users

- Go to Firebase documentation under the **Manage Users** section  
- Use the `onAuthStateChanged` Firebase utility or API  
- This API is called automatically when **SignIn** or **SignUp** occurs or any **authentication state changes**.  
- We can say that `onAuthStateChanged` is kind of an event listener which calls automatically when any authentication state changes.

- So I want to call the `onAuthStateChanged` API **once**, so we call it inside the **useEffect** hook  
- And dispatch the action **inside the API**  
- *(Optional)* Also we use the API in the root level like **Body** or **App**

---

## 🌐 Navigation – `useNavigate()`

- For direct navigation, we use a hook `useNavigate()`  
- Provided by the **react-router** library

---

## 🔓 SignOut Functionality

- We have created a **SignOut** button on the header  
- And we want to sign out. For this purpose, we use again an API provided by Firebase  
- The API is `signOut` → search it in the documentation under the **Manage User** section under the **Web**

---

## 👤 User Profile – `updateProfile`

- Now we want to **add the user profile** to our header of browse page  
- For that, we want to access the **user profile data** from the Firebase database  
- So for this purpose, we use an API which is `updateProfile`  
- Find it in the **Manage Users** section of Firebase documentation under the **Web**

```

---
