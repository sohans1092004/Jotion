This project involves building "Jotion," a Notion-inspired web application. It includes features like authentication, responsive design, collapsible/resizable sidebar, dynamic light/dark mode, and real-time database integration.

Landing Page
Features:

Light/Dark mode toggle integrated with next-themes.

Dynamic images and icons based on theme.

User authentication via Clerk (GitHub login).

Components:

Heading: Displays app name and description.

Hero Section: Showcases images dynamically based on theme.

Footer: Includes links for privacy policy and terms.

Backend Setup
Convex Integration:

Installed Convex for real-time database functionality.

Configured Convex with Clerk JWT templates for secure authentication.

Environment Variables:

Added Convex deployment ID and Clerk keys for secure communication.

Protected Pages
Created /documents page accessible only to authenticated users.

Implemented layout-level authentication checks using useConvexAuth and redirect.

Navigation Sidebar
Developed a collapsible/resizable sidebar with smooth animations using Tailwind CSS and JavaScript refs.

Sidebar behavior adapts to screen size (mobile vs. desktop).

Includes user profile and sign-out functionality.

Empty State for Documents Page
Designed an empty state with dynamic images (light/dark mode) and a button to create the first note.

Personalized greeting based on the logged-in user's name.

Responsive Design
Ensured responsiveness across devices using Tailwind breakpoints and media queries.

Sidebar dynamically adjusts its width based on user interaction or screen size.

Light/Dark Mode
Integrated next-themes for theme toggling.

Added dynamic logos and images based on the current theme.

Real-Time Features
Used Convex to enable real-time updates for creating notes, renaming them, adding icons, cover images, and embedding content like text, images, lists, etc.

Future Features
The app is set up for further development, including adding functionality to manage documents and advanced collaboration features.
