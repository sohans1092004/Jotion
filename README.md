# Jotion - A Notion-Inspired Web Application
Welcome to Jotion, a Notion-inspired web application built with modern technologies like Next.js, Tailwind CSS, Convex (for real-time database functionality), and Clerk (for authentication). This app includes features such as authentication, responsive design, collapsible/resizable sidebar, dynamic light/dark mode, and real-time database integration.

## Features
Landing Page
__Light/Dark Mode Toggle__: Integrated with next-themes.

**Dynamic Images and Icons**: Adjust based on the selected theme.

**User Authentication**: GitHub login via Clerk.

## Backend Setup
**Convex Integration**:Installed Convex for real-time database functionality.

Configured Convex with Clerk JWT templates for secure authentication.

__Environment Variables__:Added Convex deployment ID and Clerk keys for secure communication.

## Protected Pages
Created /documents page accessible only to authenticated users.

Implemented layout-level authentication checks using useConvexAuth and redirect.

## Navigation Sidebar
Developed a collapsible/resizable sidebar with smooth animations using Tailwind CSS and JavaScript refs.

Sidebar behavior adapts to screen size (mobile vs. desktop).

Includes user profile and sign-out functionality.

## Empty State for Documents Page
Designed an empty state with dynamic images (light/dark mode) and a button to create the first note.

Personalized greeting based on the logged-in user's name.

## Responsive Design
Ensured responsiveness across devices using Tailwind breakpoints and media queries.

Sidebar dynamically adjusts its width based on user interaction or screen size.

## Light/Dark Mode
Integrated next-themes for theme toggling.

Added dynamic logos and images based on the current theme.

## Real-Time Features
Used Convex to enable real-time updates for creating notes, renaming them, adding icons, cover images, and embedding content like text, images, lists, etc.

## Technologies Used
**Frontend**:Next.js (React Framework), Tailwind CSS (Utility-first CSS framework)

**Backend**:Convex (Real-time database)

**Authentication**: Clerk (User management and authentication)

## Icons & Styling:

Lucide React (Icon library),
ShadCN UI (Component library)

## Future Features
This app is set up for further development, including:

I) Creating and managing documents.

II) Advanced collaboration features.

III) Embedding additional content types like videos or external links.

IV) Full-text search functionality.
