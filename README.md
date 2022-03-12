## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## File Structure

```bash
└─ src
   ├─ api
   │  └─ [Name]API.ts
   ├─ components
   │  └─ [Name]
   │     ├─ index.tsx
   │     ├─ [Name].tsx
   │     └─ [Name].styles.tsx
   ├─ layouts
   │  └─ [Name]Layout
   │     ├─ index.tsx
   │     ├─ [Name]Layout.tsx
   │     └─ [Name]Layout.styles.tsx
   ├─ modules
   │  └─ foo
   │     └─ bar
   │        ├─ components
   │        │  └─ [Name]
   │        │     ├─ index.tsx
   │        │     ├─ [Name].tsx
   │        │     └─ [Name].styles.tsx
   │        ├─ index.tsx
   │        └─ styles.tsx
   ├─ pages
   │  ├─ foo
   │  │  └─ bar.tsx
   │  ├─ _app.tsx
   │  ├─ _document.tsx
   │  └─ index.tsx
   ├─ redux
   │  ├─ actions
   │  │  └─ auth.ts
   │  ├─ reducers
   │  │  ├─ auth.ts
   │  │  └─ index.ts # combine reducer
   │  ├─ selectors
   │  │  └─ auth.ts
   │  └─ store.ts
   ├─ hocs
   │  └─ withAuth.tsx
   ├─ contexts
   │  └─ AuthContext.tsx
   ├─ config
   │  └─ seo.ts
   ├─ constants
   ├─ hooks
   ├─ types
   └─ utils
```
