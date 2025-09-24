import Link from "next/link";
import {getServerSession} from "next-auth";
import {options} from "../api/auth/[...nextauth]/options";

const nav = async () => {
  const session = await getServerSession(options);
  return (
    <header className="bg-gray-600 text-gray-100">
        <nav className="flex justify-between items-center w-full px-10 py-4">
        <div>Recetas</div>
        <div className="flex gap-10">
            <Link href="/">Inicio</Link>
            <Link href="/createUser">Crear cuenta</Link>
            <Link href="/clientemember">Cliente miembro</Link>
            <Link href="/member">Miembro</Link>
            <Link href="/public">Página principal</Link>
            {session ? (
              <Link href={"/api/auth/signout?callbackUrl=/"}>Cerrar sesion</Link> 
            ): (
              <Link href={"/api/auth/signin"}>Iniciar sesion</Link> 
            )}
        </div>
        </nav>
    </header>
  );
};

export default nav;