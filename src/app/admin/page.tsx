"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Donacion {
  id: number;
  donante_id: number;
  descripcion: string;
  fecha_donacion: string;
  valor_aproximado: string | null;
  recibida: number;
  categoria_id: number;
}

export default function DonacionesPage() {
  const router = useRouter();
  const [donaciones, setDonaciones] = useState<Donacion[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [editId, setEditId] = useState<number | null>(null);
  const [form, setForm] = useState({
    donante_id: "",
    descripcion: "",
    fecha_donacion: "",
    valor_aproximado: "",
    recibida: "0",
    categoria_id: "",
  });

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
        fetchDonaciones();
      } else {
        setIsAuthenticated(false);
        router.push("/admin");
      }
    } catch (error) {
      console.error("Error checking authentication:", error);
      setIsAuthenticated(false);
      router.push("/");
    }
  };

  const fetchDonaciones = async () => {
    try {
      const res = await fetch("/api/dashboard/donaciones", { credentials: "include" });
      if (res.status === 401 || res.status === 403) {
        router.push("/");
        return;
      }
      setDonaciones(await res.json());
    } catch (error) {
      console.error("Error fetching donaciones:", error);
    }
  };

  const handleEdit = (donacion: Donacion) => {
    // Convertir el valor aproximado a número entero sin formato de moneda
    let valorLimpio = donacion.valor_aproximado ? donacion.valor_aproximado.replace(/[^\d]/g, "") : "";
    
    setEditId(donacion.id);
    setForm({
      donante_id: String(donacion.donante_id),
      descripcion: donacion.descripcion,
      fecha_donacion: donacion.fecha_donacion,
      valor_aproximado: valorLimpio,
      recibida: donacion.recibida ? "1" : "0",
      categoria_id: String(donacion.categoria_id),
    });
  };

  const handleDelete = async (id: number) => {
    if (!confirm("¿Seguro que deseas eliminar esta donación?")) return;

    try {
      const res = await fetch("/api/dashboard/donaciones", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      if (res.ok) fetchDonaciones();
    } catch (error) {
      console.error("Error deleting donacion:", error);
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editId) return;

    const body = {
      id: editId,
      donante_id: Number(form.donante_id),
      descripcion: form.descripcion,
      fecha_donacion: form.fecha_donacion,
      valor_aproximado: form.valor_aproximado ? Number(form.valor_aproximado) : null,
      recibida: form.recibida === "1" ? 1 : 0,
      categoria_id: Number(form.categoria_id),
    };

    try {
      const res = await fetch("/api/dashboard/donaciones", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        fetchDonaciones();
        setForm({ donante_id: "", descripcion: "", fecha_donacion: "", valor_aproximado: "", recibida: "0", categoria_id: "" });
        setEditId(null);
      } else {
        console.error("Error al actualizar la donación:", await res.json());
      }
    } catch (error) {
      console.error("Error updating donacion:", error);
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
        <h1 className="text-2xl font-bold">Gestión de Donaciones</h1>
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

      {editId && (
        <form onSubmit={handleUpdate} className="mt-4 p-4 border rounded shadow">
          <h2 className="text-lg font-semibold">Editar Donación</h2>
          <input type="text" placeholder="Descripción" value={form.descripcion} onChange={(e) => setForm({ ...form, descripcion: e.target.value })} required className="w-full p-2 border rounded my-2" />
          <input type="date" placeholder="Fecha de Donación" value={form.fecha_donacion} onChange={(e) => setForm({ ...form, fecha_donacion: e.target.value })} required className="w-full p-2 border rounded my-2" />
          <input type="number" placeholder="Valor Aproximado" value={form.valor_aproximado} onChange={(e) => setForm({ ...form, valor_aproximado: e.target.value })} className="w-full p-2 border rounded my-2" />
          <label className="flex items-center my-2">
            <input type="checkbox" checked={form.recibida === "1"} onChange={(e) => setForm({ ...form, recibida: e.target.checked ? "1" : "0" })} className="mr-2" />
            Recibida
          </label>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Actualizar</button>
        </form>
      )}

      <table className="w-full border mt-6">
        <thead>
          <tr>
            <th>ID</th>
            <th>Donante ID</th>
            <th>Descripción</th>
            <th>Fecha de Donación</th>
            <th>Valor Aproximado</th>
            <th>Recibida</th>
            <th>Categoría ID</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {donaciones.map((d) => (
            <tr key={d.id}>
              <td>{d.id}</td>
              <td>{d.donante_id}</td>
              <td>{d.descripcion}</td>
              <td>{d.fecha_donacion}</td>
              <td>{d.valor_aproximado ?? "N/A"}</td>
              <td>{d.recibida ? "Sí" : "No"}</td>
              <td>{d.categoria_id}</td>
              <td>
                <button className="bg-yellow-400 text-white px-2 py-1 rounded mr-2" onClick={() => handleEdit(d)}>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
