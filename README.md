markdown
# Component Library

A small, reusable React + TypeScript component library built for internal applications.

## 🚀 Getting Started

1. ```bash
2. npm install
3. npm run dev
4. Open http://localhost:5173 in your browser.

## 📁 Project Structure
text
src/
  components/
    AlertBox/         AlertBox.tsx, AlertBox.test.tsx
    UserProfileCard/  UserProfileCard.tsx, UserProfileCard.test.tsx
    ProductDisplay/   ProductDisplay.tsx, ProductDisplay.test.tsx
  types/
    index.ts          All TypeScript interfaces
  test/
    setup.ts          Test setup
  App.tsx             Demo of components working together

## 🛠 Tech Stack
React 18
TypeScript
Vite
Tailwind CSS
Vitest + Testing Library

## 📝 Reflection
Optional props are handled with ? in the interface and default values in destructuring.

Interfaces are designed to make required data required and extras optional.

Type safety comes from the union AlertType and typed callbacks like (userId: string) => void.

Composition is achieved by letting components accept children and by managing shared state (showAlert, cartItems) at the App level.