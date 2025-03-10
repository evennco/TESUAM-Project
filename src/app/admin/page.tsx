"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface ContactFormEntry {
  id: number;
  subject: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

export default function ContactFormPage() {
  const router = useRouter();
  const [contactForms, setContactForms] = useState<ContactFormEntry[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [editForm, setEditForm] = useState<ContactFormEntry | null>(null);

  useEffect(() => {
    checkAuthentication();
  }, []);

  const checkAuthentication = async () => {
    try {
      const res = await fetch("/api/auth/cookieCheck", {
        method: "GET",
        credentials: "include",
      });

      if (res.ok) {
        setIsAuthenticated(true);
        fetchContactForms();
      } else {
        setIsAuthenticated(false);
        router.push("/login");
      }
    } catch (error) {
      console.error("Error checking authentication:", error);
      setIsAuthenticated(false);
      router.push("/");
    }
  };

  const fetchContactForms = async () => {
    try {
      const res = await fetch("/api/dashboard/contact-form", { credentials: "include" });
      if (res.status === 401 || res.status === 403) {
        router.push("/");
        return;
      }
      setContactForms(await res.json());
    } catch (error) {
      console.error("Error fetching contact forms:", error);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("¿Seguro que deseas eliminar este mensaje de contacto?")) return;

    try {
      const res = await fetch("/api/dashboard/contact-form", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      if (res.ok) fetchContactForms();
    } catch (error) {
      console.error("Error deleting contact form entry:", error);
    }
  };

  const handleEdit = (entry: ContactFormEntry) => {
    setEditForm(entry);
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editForm) return;

    try {
      const res = await fetch("/api/dashboard/contact-form", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editForm),
      });

      if (res.ok) {
        fetchContactForms();
        setEditForm(null);
      } else {
        console.error("Error updating contact form:", await res.json());
      }
    } catch (error) {
      console.error("Error updating contact form:", error);
    }
  };

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      if (res.ok) {
        router.push("/");
      } else {
        console.error("Error during logout");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  if (isAuthenticated === null) {
    return <div className="p-6 text-center">Cargando...</div>;
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Gestión de Formularios de Contacto</h1>
        <div className="flex gap-4">
          <button
            onClick={() => router.push("/admin/donantes")}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow"
          >
            Donantes
          </button>
          <button
            onClick={() => router.push("/admin/donaciones")}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow"
          >
            Donaciones
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow"
          >
            Cerrar Sesión
          </button>
        </div>
      </div>

      {editForm && (
        <form onSubmit={handleUpdate} className="mt-4 p-4 border rounded shadow bg-gray-100">
          <h2 className="text-lg font-semibold">Editar Mensaje de Contacto</h2>
          <input
            type="text"
            value={editForm.subject}
            onChange={(e) => setEditForm({ ...editForm, subject: e.target.value })}
            required
            className="w-full p-2 border rounded my-2"
            placeholder="Asunto"
          />
          <input
            type="text"
            value={editForm.name}
            onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
            required
            className="w-full p-2 border rounded my-2"
            placeholder="Nombre"
          />
          <input
            type="email"
            value={editForm.email}
            onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
            required
            className="w-full p-2 border rounded my-2"
            placeholder="Correo"
          />
          <textarea
            value={editForm.message}
            onChange={(e) => setEditForm({ ...editForm, message: e.target.value })}
            required
            className="w-full p-2 border rounded my-2"
            placeholder="Mensaje"
          ></textarea>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Guardar Cambios
          </button>
          <button
            type="button"
            onClick={() => setEditForm(null)}
            className="bg-gray-400 hover:bg-gray-500 text-white py-2 px-4 rounded ml-2"
          >
            Cancelar
          </button>
        </form>
      )}

      <table className="w-full border mt-6">
        <thead>
          <tr>
            <th>ID</th>
            <th>Asunto</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Mensaje</th>
            <th>Fecha</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {contactForms.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.id}</td>
              <td>{entry.subject}</td>
              <td>{entry.name}</td>
              <td>{entry.email}</td>
              <td>{entry.message}</td>
              <td>{new Date(entry.created_at).toLocaleString()}</td>
              <td>
                <button
                  className="bg-yellow-400 text-white px-2 py-1 rounded mr-2"
                  onClick={() => handleEdit(entry)}
                >
                  Editar
                </button>
                <button
                  className="bg-red-400 text-white px-2 py-1 rounded"
                  onClick={() => handleDelete(entry.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
