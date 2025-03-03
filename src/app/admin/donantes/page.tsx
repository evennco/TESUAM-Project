"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Donante {
  id: number;
  nombre: string;
  telefono: string;
  email: string;
  direccion: string;
}

export default function DonantesPage() {
  const router = useRouter();
  const [donantes, setDonantes] = useState<Donante[]>([]);
  const [form, setForm] = useState({ nombre: "", telefono: "", email: "", direccion: "" });
  const [editId, setEditId] = useState<number | null>(null);

  useEffect(() => {
    checkAuthentication();
    fetchDonantes();
  }, []);

  const checkAuthentication = async () => {
    try {
      const res = await fetch("/api/auth/cookieCheck", {
        method: "GET",
        credentials: "include",
      });

      if (res.status !== 200) {
        router.push("/");
      }
    } catch (error) {
      console.error("Error checking authentication:", error);
      router.push("/");
    }
  };

  const fetchDonantes = async () => {
    try {
      const res = await fetch("/api/dashboard/donantes");
      if (res.status === 401 || res.status === 403) {
        router.push("/");
        return;
      }
      setDonantes(await res.json());
    } catch (error) {
      console.error("Error fetching donantes:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const method = editId ? "PUT" : "POST";
    const body = editId ? { id: editId, ...form } : form;

    try {
      const res = await fetch("/api/dashboard/donantes", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        fetchDonantes();
        setForm({ nombre: "", telefono: "", email: "", direccion: "" });
        setEditId(null);
      }
    } catch (error) {
      console.error("Error saving donante:", error);
    }
  };

  const handleEdit = (donante: Donante) => {
    setEditId(donante.id);
    setForm({ nombre: donante.nombre, telefono: donante.telefono, email: donante.email, direccion: donante.direccion });
  };

  const handleDelete = async (id: number) => {
    if (!confirm("¿Seguro que deseas eliminar este donante?")) return;

    try {
      const res = await fetch("/api/dashboard/donantes", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      if (res.ok) fetchDonantes();
    } catch (error) {
      console.error("Error deleting donante:", error);
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

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Gestión de Donantes</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow"
        >
          Cerrar Sesión
        </button>
      </div>

      <form onSubmit={handleSubmit} className="mt-4 p-4 border rounded shadow">
        <h2 className="text-lg font-semibold">{editId ? "Editar Donante" : "Agregar Donante"}</h2>
        <input
          type="text"
          placeholder="Nombre"
          value={form.nombre}
          onChange={(e) => setForm({ ...form, nombre: e.target.value })}
          required
          className="w-full p-2 border rounded my-2"
        />
        <input
          type="text"
          placeholder="Teléfono"
          value={form.telefono}
          onChange={(e) => setForm({ ...form, telefono: e.target.value })}
          className="w-full p-2 border rounded my-2"
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          className="w-full p-2 border rounded my-2"
        />
        <input
          type="text"
          placeholder="Dirección"
          value={form.direccion}
          onChange={(e) => setForm({ ...form, direccion: e.target.value })}
          className="w-full p-2 border rounded my-2"
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          {editId ? "Actualizar" : "Agregar"}
        </button>
      </form>

      <table className="w-full border-collapse border mt-6">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Nombre</th>
            <th className="border border-gray-300 p-2">Email</th>
            <th className="border border-gray-300 p-2">Teléfono</th>
            <th className="border border-gray-300 p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {donantes.map((d) => (
            <tr key={d.id}>
              <td className="border border-gray-300 p-2">{d.id}</td>
              <td className="border border-gray-300 p-2">{d.nombre}</td>
              <td className="border border-gray-300 p-2">{d.email}</td>
              <td className="border border-gray-300 p-2">{d.telefono}</td>
              <td className="border border-gray-300 p-2">
                <button className="bg-yellow-400 text-white px-2 py-1 rounded mr-2" onClick={() => handleEdit(d)}>
                  Editar
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => handleDelete(d.id)}>
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
