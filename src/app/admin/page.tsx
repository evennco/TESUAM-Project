"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Admin {
  id: number;
  name: string;
  email: string;
}

export default function AdminsPage() {
  const router = useRouter();
  const [admins, setAdmins] = useState<Admin[]>([]);

  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = async () => {
    try {
      const res = await fetch("/api/dashboard/admins", { credentials: "include" });
      if (res.status === 401 || res.status === 403) {
        router.push("/");
        return;
      }
      setAdmins(await res.json());
    } catch (error) {
      console.error("Error fetching admins:", error);
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
        <h1 className="text-2xl font-bold">Administradores</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow"
        >
          Cerrar Sesión
        </button>
      </div>

      <table className="w-full border mt-6">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Nombre</th>
            <th className="border border-gray-300 p-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {admins.length > 0 ? (
            admins.map((admin) => (
              <tr key={admin.id} className="border-b">
                <td className="border border-gray-300 p-2">{admin.id}</td>
                <td className="border border-gray-300 p-2">{admin.name}</td>
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
    </div>
  );
}
