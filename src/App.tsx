import { createBrowserRouter, RouterProvider } from "react-router";
import DashboardLayout from "./layouts/DashboardLayout";
import Home from "./pages/Home";
import Lessons from "./pages/Lessons";

function PlaceholderPage({ title }: { title: string }) {
  return (
    <section className="page-section">
      <h1 className="page-title">{title}</h1>
      <p className="page-description">
        Questa sezione sarà disponibile a breve.
      </p>
    </section>
  );
}

function NotFoundPage() {
  return (
    <section className="empty-state">
      <h1 className="page-title">Pagina non trovata</h1>
      <p className="page-description">
        La pagina richiesta non esiste o è stata spostata.
      </p>
    </section>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    Component: DashboardLayout,
    children: [
      { index: true, Component: Home },
      { path: "lessons", Component: Lessons },
      { path: "add", element: <PlaceholderPage title="Aggiungi materiale" /> },
      { path: "account", element: <PlaceholderPage title="Account" /> },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
