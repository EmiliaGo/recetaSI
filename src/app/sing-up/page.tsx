"use client"

import { Button } from "@/components/ui/button";
import{
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardTitle
} from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Link, Link2 } from "lucide-react";

import { FcGoogle } from "react-icons/fc";

const SingUp =() =>{
  return (<div className = "h-full flex items-center justify-center bg-[#1b0918]" >
    <Card className = "md:h-auto w-[80%] sm:w-[420px] p-4 sm:8">
      <CardHeader>
        <CardTitle className = "text-center">
          Registro
        </CardTitle>
        <CardDescription className = "text-sm text-center text-accent-foreground">
          Usa un correo o servicio, para crear una cuenta.
        </CardDescription>
      </CardHeader>
      <CardContent className = "px-2 sm:px-6">
        <form action = "" className = "space-y-3">
          <Input
            type = 'text'
            disabled = {false}
            placeholder = "Nombre"
            value = {""}
            onChange = {() => {}}
            required
          />
          <Input
            type = 'email'
            disabled = {false}
            placeholder = "Correo"
            value = {""}
            onChange = {() => {}}
            required
          />
          <Input
            type = 'password'
            disabled = {false}
            placeholder = "Ingresa una contraseña"
            value = {""}
            onChange = {() => {}}
            required
          />
          <Input
            type = 'password'
            disabled = {false}
            placeholder = "Confirma tu contraseña"
            value = {""}
            onChange = {() => {}}
            required
          />
          <Button 
            className = 'w-full'
            size = "lg"
            disabled = {false}
          >
            Continuar
          </Button>
        </form>

        <Separator/>
        <div className = "felx my-2 justify-evenly mx-auto items-center">
          <Button 
              disabled = {false}
              onClick = {() => {}}
              variant = "outline"
              size = "lg"
              className = "bg-slate-300 hover:bg-slate-400 hover:scale-110"
          >
            <FcGoogle className = "size-8 left-2.5 top-2.5"/>
          </Button>
        </div>
        <p className = "text-center text-sm mt-2 text-muted-foreground">
          ¿Ya tienes una cuenta? <Link className = "text-sky-700 ml-4 hover:underline cursor-pointer" href = "sing-in"> Iniciar
          </Link>


        </p>
      </CardContent>
    </Card>
  </div>);
}

export default SingUp; 