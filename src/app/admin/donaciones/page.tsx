"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Donacion {
  id: number;
  donante_id: number;
  descripcion: string;
  fecha_donacion: string;
  valor_aproximado: number | null;
  recibida: number;
  categoria_id: number;
}

interface Donante {
  id: number;
  nombre: string;
}

interface Categoria {
  id: number;
  nombre: string;
}

export default function DonacionesPage() {
  const router = useRouter();
  const [donaciones, setDonaciones] = useState<Donacion[]>([]);
  const [donantes, setDonantes] = useState<Donante[]>([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [form, setForm] = useState({
    donante_id: "",
    descripcion: "",
    fecha_donacion: "",
    valor_aproximado: "",
    recibida: "0",
    categoria_id: "",
  });
  const [editId, setEditId] = useState<number | null>(null);

  useEffect(() => {
    checkAuthentication();
    fetchDonaciones();
    fetchDonantes();
    fetchCategorias();
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

  const fetchDonaciones = async () => {
    try {
      const res = await fetch("/api/dashboard/donaciones");
      if (!res.ok) throw new Error("Error al obtener las donaciones");
      setDonaciones(await res.json());
    } catch (error) {
      console.error("Error fetching donaciones:", error);
    }
  };

  const fetchDonantes = async () => {
    try {
      const res = await fetch("/api/dashboard/donantes");
      if (!res.ok) throw new Error("Error al obtener los donantes");
      setDonantes(await res.json());
    } catch (error) {
      console.error("Error fetching donantes:", error);
    }
  };

  const fetchCategorias = async () => {
    try {
      const res = await fetch("/api/dashboard/categorias");
      if (!res.ok) throw new Error("Error al obtener las categorías");
      setCategorias(await res.json());
    } catch (error) {
      console.error("Error fetching categorias:", error);
    }
  };

  const handleEdit = (donacion: Donacion) => {
    setEditId(donacion.id);
    setForm({
      donante_id: String(donacion.donante_id),
      descripcion: donacion.descripcion,
      fecha_donacion: donacion.fecha_donacion,
      valor_aproximado: donacion.valor_aproximado ? String(donacion.valor_aproximado) : "",
      recibida: donacion.recibida ? "1" : "0",
      categoria_id: String(donacion.categoria_id),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const method = editId ? "PUT" : "POST";

    const body = {
      id: editId ? Number(editId) : undefined,
      donante_id: Number(form.donante_id),
      descripcion: form.descripcion,
      fecha_donacion: form.fecha_donacion,
      valor_aproximado: form.valor_aproximado ? Number(form.valor_aproximado) : null,
      recibida: form.recibida === "1" ? 1 : 0,
      categoria_id: Number(form.categoria_id),
    };

    try {
      const res = await fetch("/api/dashboard/donaciones", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        fetchDonaciones();
        setForm({ donante_id: "", descripcion: "", fecha_donacion: "", valor_aproximado: "", recibida: "0", categoria_id: "" });
        setEditId(null);
      } else {
        console.error("Error al enviar la donación:", await res.json());
      }
    } catch (error) {
      console.error("Error saving donacion:", error);
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
        <h1 className="text-2xl font-bold">Gestión de Donaciones</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow"
        >
          Cerrar Sesión
        </button>
      </div>

      <form onSubmit={handleSubmit} className="mt-4 p-4 border rounded shadow">
        <h2 className="text-lg font-semibold">{editId ? "Editar Donación" : "Agregar Donación"}</h2>

        <select value={form.donante_id} onChange={(e) => setForm({ ...form, donante_id: e.target.value })} required className="w-full p-2 border rounded my-2">
          <option value="">Seleccionar Donante</option>
          {donantes.map((d) => (
            <option key={d.id} value={d.id}>{d.nombre}</option>
          ))}
        </select>

        <input type="text" placeholder="Descripción" value={form.descripcion} onChange={(e) => setForm({ ...form, descripcion: e.target.value })} required className="w-full p-2 border rounded my-2" />
        <input type="date" placeholder="Fecha de Donación" value={form.fecha_donacion} onChange={(e) => setForm({ ...form, fecha_donacion: e.target.value })} required className="w-full p-2 border rounded my-2" />
        <input type="number" placeholder="Valor Aproximado" value={form.valor_aproximado} onChange={(e) => setForm({ ...form, valor_aproximado: e.target.value })} className="w-full p-2 border rounded my-2" />

        <select value={form.categoria_id} onChange={(e) => setForm({ ...form, categoria_id: e.target.value })} required className="w-full p-2 border rounded my-2">
          <option value="">Seleccionar Categoría</option>
          {categorias.map((c) => (
            <option key={c.id} value={c.id}>{c.nombre}</option>
          ))}
        </select>

        <label className="flex items-center my-2">
          <input type="checkbox" checked={form.recibida === "1"} onChange={(e) => setForm({ ...form, recibida: e.target.checked ? "1" : "0" })} className="mr-2" />
          Recibida
        </label>

        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">{editId ? "Actualizar" : "Agregar"}</button>
      </form>
    </div>
  );
}
