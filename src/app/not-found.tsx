import Link from "next/link";

export default function NotFound() {
    return (
        <section className="flex items-center justify-center min-h-screen bg-white dark:bg-foundationcolorwhite">
            <div className="bg-red-100 border border-red-300 p-6 rounded-lg text-center max-w-lg">
                <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-5xl text-red-700">¡Ups!</h1>
                <p className="mb-4 text-3xl tracking-tight font-medium text-red-700 md:text-4xl">Parece que la página que estás buscando no existe</p>
                <p className="mb-4 text-lg font-light text-foundationcolorblack">Verifica que la dirección web que ingresaste está correcta o puedes ir a inicio para navegar en nuestro sitio</p>
                <Link href="/">
                    <p className="inline-flex text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-red-900 my-4">
                        Volver al inicio
                    </p>
                </Link>
            </div>
        </section>
    );
}