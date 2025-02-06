"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Admin {
  id: number;
  username: string;
  email: string;
}

interface Donante {
  id: number;
  nombre: string;
  telefono: string;
  email: string;
  direccion: string;
}

interface Categoria {
  id: number;
  nombre: string;
  descripcion: string;
}

interface Donacion {
  id: number;
  donanteId: number;
  descripcion: string;
  fechaDonacion: string;
  valorAproximado: number;
  recibida: number;
  categoriaId: number;
}

export default function Dashboard() {
  const router = useRouter();
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [donantes, setDonantes] = useState<Donante[]>([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [donaciones, setDonaciones] = useState<Donacion[]>([]);

  useEffect(() => {
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

    checkAuthentication();
  }, [router]);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const adminsRes = await fetch("/api/dashboard/admins", { credentials: "include" });
        const donantesRes = await fetch("/api/dashboard/donantes", { credentials: "include" });
        const categoriasRes = await fetch("/api/dashboard/categorias", { credentials: "include" });
        const donacionesRes = await fetch("/api/dashboard/donaciones", { credentials: "include" });

        setAdmins(await adminsRes.json());
        setDonantes(await donantesRes.json());
        setCategorias(await categoriasRes.json());
        setDonaciones(await donacionesRes.json());
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Panel de Administración</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow"
        >
          Cerrar Sesión
        </button>
      </div>

      {/* Administradores */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Administradores</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Usuario</th>
            <th className="border border-gray-300 p-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {admins.length > 0 ? (
            admins.map((admin) => (
              <tr key={admin.id} className="border-b">
                <td className="border border-gray-300 p-2">{admin.id}</td>
                <td className="border border-gray-300 p-2">{admin.username}</td>
                <td className="border border-gray-300 p-2">{admin.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="text-center p-4">No hay datos disponibles</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Donantes */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Donantes</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Nombre</th>
            <th className="border border-gray-300 p-2">Teléfono</th>
            <th className="border border-gray-300 p-2">Email</th>
            <th className="border border-gray-300 p-2">Dirección</th>
          </tr>
        </thead>
        <tbody>
          {donantes.map((donante) => (
            <tr key={donante.id} className="border-b">
              <td className="border border-gray-300 p-2">{donante.id}</td>
              <td className="border border-gray-300 p-2">{donante.nombre}</td>
              <td className="border border-gray-300 p-2">{donante.telefono}</td>
              <td className="border border-gray-300 p-2">{donante.email}</td>
              <td className="border border-gray-300 p-2">{donante.direccion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
