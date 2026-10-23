markdown
# Component Library

A small, reusable React + TypeScript component library built for internal applications.

## 🚀 Getting Started

```bash
npm install
npm run dev
Open http://localhost:5173 in your browser.

🧪 Running Tests
bash
npm test          # run once
npm run test:watch  # watch mode
📦 Components
AlertBox
Displays a colored alert with optional close button and children.

Prop	Type	Required	Description
type	'success' | 'error' | 'warning' | 'info'	✅	Alert style
message	string	✅	Main message
onClose	() => void	❌	Called when X is clicked
children	React.ReactNode	❌	Extra content below message
tsx
<AlertBox type="success" message="Saved!" onClose={() => {}}>
  <p>Optional extra text</p>
</AlertBox>
UserProfileCard
Displays user information with toggleable email/role and optional edit button.

Prop	Type	Required	Description
user	User	✅	User to display
showEmail	boolean	❌ (default true)	Show email
showRole	boolean	❌ (default true)	Show role
onEdit	(userId: string) => void	❌	Called on Edit click
children	React.ReactNode	❌	Extra content
tsx
<UserProfileCard user={user} onEdit={(id) => console.log(id)} />
ProductDisplay
Displays product information with configurable details and Add to Cart button.

Prop	Type	Required	Description
product	Product	✅	Product to display
showDescription	boolean	❌ (default true)	Show description
showStockStatus	boolean	❌ (default true)	Show In/Out of Stock
onAddToCart	(productId: string) => void	❌	Called on Add to Cart
children	React.ReactNode	❌	Extra content
tsx
<ProductDisplay product={product} onAddToCart={(id) => console.log(id)} />
📁 Project Structure
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
🛠 Tech Stack
React 18

TypeScript

Vite

Tailwind CSS

Vitest + Testing Library

📝 Reflection
Optional props are handled with ? in the interface and default values in destructuring.

Interfaces are designed to make required data required and extras optional.

Type safety comes from the union AlertType and typed callbacks like (userId: string) => void.

Composition is achieved by letting components accept children and by managing shared state (showAlert, cartItems) at the App level.