import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider, Navigate } from "react-router"
import "./index.css"

import { TooltipProvider } from "./components/ui/tooltip.tsx"

import { ThemeProvider } from "./components/theme-provider.tsx"

import { AuthLayout } from "./users/components/auth-layout.tsx"
import { LoginPage } from "./users/pages/login-page.tsx"
import { RegisterPage } from "./users/pages/register-page.tsx"

import { DashboardLayout } from "./dashboard/components/dashboard-layout.tsx"
import { DashboardPage } from "./dashboard/pages/dashboard-page.tsx"
import { ProjectsPage } from "./dashboard/projects/pages/projects-page.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/dashboard" replace />,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "",
        element: <Navigate to="/auth/login" replace />,
      }
    ]
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      }, {
        path: 'projects',
        element: <ProjectsPage />
      },
      {
        path: "settings",
        element: <div>Configuración</div>,
      }
    ]
  }
])

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TooltipProvider>
        <RouterProvider router={router} />
      </TooltipProvider>
    </ThemeProvider>
  </StrictMode>
)
