"use client";
import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
        credentials: "include", // ✅ AÑADIDO AQUÍ
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error al iniciar sesión:", errorData.message);
        return;
      }

      // Redirección al panel de administración si el login es exitoso
      router.push("/admin");

    } catch (error) {
      console.error("Error en el servidor:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Usuario:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <label htmlFor="password">Contraseña:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit">Iniciar sesión</button>
    </form>
  );
};

export default LoginForm;
