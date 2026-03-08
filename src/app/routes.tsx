import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { Lessons } from "./pages/Lessons";
import { Mentors } from "./pages/Mentors";
import { Certifications } from "./pages/Certifications";
import { AIGuidance } from "./pages/AIGuidance";
import { Onboarding } from "./pages/Onboarding";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "dashboard", Component: Dashboard },
      { path: "lessons", Component: Lessons },
      { path: "mentors", Component: Mentors },
      { path: "certifications", Component: Certifications },
      { path: "ai-guidance", Component: AIGuidance },
    ],
  },
  {
    path: "/onboarding",
    Component: Onboarding,
  },
]);
