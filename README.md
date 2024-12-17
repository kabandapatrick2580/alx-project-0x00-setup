# React Genesis: Mastering Next.js Setup

## Project Overview
**Level:** Novice  
**Weight:** 1  
**Start Date:** Dec 15, 2024, 11:00 PM  
**End Date:** Dec 22, 2024, 11:00 PM  
**Checker Release Date:** Dec 15, 2024, 11:00 PM  
**Manual QA Review:** Request upon project completion  
**Auto Review:** Launched at the deadline  

## Tasks

### 0. Scaffolding a Project
**Objective:** Understand the essence of creating a project using CLI tools like `npx`, coupled with `create-next-app`.

**Instructions:**
1. Open a new Visual Studio Code instance and open the terminal.
2. Navigate to your project directory.
3. Run the command: `npx create-next-app@latest alx-project-0x00 --typescript`
4. Select `Yes` for ESLint, Tailwind CSS, and import alias.
5. Select `No` for `/src` directory and App Router.
6. Start your application using the command: `npm run dev`

**Repo:**
- **GitHub repository:** alx-project-0x00-setup
- **Directory:** alx-project-0x00
- **File:** README.md

### 1. Setting Up Project Directories
**Objective:** Understand the folder structure provided by the Next.js framework.

**Instructions:**
1. From the root directory, create `components` and `interfaces` directories.
2. Modify `pages/index.tsx` to use an arrow function and move the export to the end of the file.
3. Create empty files: `components/Card.tsx`, `components/Pill.tsx`, `interfaces/index.ts`.
4. Run `npm run dev` and check the changes at `http://localhost:3000`.

**Repo:**
- **GitHub repository:** alx-project-0x00-setup
- **Directory:** alx-project-0x00
- **Files:** components/Card.tsx, components/Pill.tsx, interfaces/index.ts

### 2. Basic Routing
**Objective:** Explore simple routing in Next.js.

**Instructions:**
1. Create `pages/landing.tsx` and `pages/about.tsx`.
2. Add basic functional components to these files.
3. Run `npm run dev` and check the changes at `http://localhost:3000/landing` and `http://localhost:3000/about`.

**Repo:**
- **GitHub repository:** alx-project-0x00-setup
- **Directory:** alx-project-0x00
- **Files:** pages/landing.tsx, pages/about.tsx, interfaces/index.ts, README.md

### 3. Rendering Components
**Objective:** Design reusable components to prevent code repetition.

**Instructions:**
1. Move images to `public/assets/images`.
2. Replace the content of `components/Card.tsx` and `components/Pill.tsx` with provided code.
3. Run `npm run dev` and check the changes at `http://localhost:3000/landing`.

**Repo:**
- **GitHub repository:** alx-project-0x00-setup
- **Directory:** alx-project-0x00
- **Files:** components/Card.tsx, components/Pill.tsx, README.md

### 4. Using Components
**Objective:** Make use of the Card and Pill components created previously.

**Instructions:**
1. Import and use the `Card` component in `pages/landing.tsx`.
2. Run `npm run dev` and check the changes at `http://localhost:3000/landing`.

**Repo:**
- **GitHub repository:** alx-project-0x00-setup
- **Directory:** alx-project-0x00
- **Files:** pages/landing.tsx, README.md

### 5. Typing Your Functional Components
**Objective:** Make components dynamic by passing props.

**Instructions:**
1. Add `PillProps` interface to `interfaces/index.ts`.
2. Modify `components/Pill.tsx` to accept `title` prop.
3. Run `npm run dev` and check the changes at `http://localhost:3000/landing`.

**Repo:**
- **GitHub repository:** alx-project-0x00-setup
- **Directory:** alx-project-0x00
- **Files:** interfaces/index.ts, components/Pill.tsx, README.md

### 6. Advanced Task
**Objective:** Create a button component that accepts title and styles as arguments.

**Repo:**
- **GitHub repository:** alx-project-0x00-setup
- **Directory:** alx-project-0x00
- **Files:** interfaces/index.ts, components/Button.tsx, pages/landing.tsx

### 7. Manual Review
**Repo:**
- **GitHub repository:** alx-project-0x00-setup
- **Directory:** alx-project-0x00

---

**Copyright © 2024 ALX, All rights reserved.**