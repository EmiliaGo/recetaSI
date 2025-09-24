import { getServerSession } from "next-auth";
import {options} from "../api/auth/[...nextauth]/options";
import { redirect } from "next/dist/server/api-utils";

const member = async () => {
  const session = await getServerSession (options)

  if(!session){
    redirect("/api/auth/signin?callbackUrl=/member");
    
  }

  return (
    <div>
        <h1>Sesion del servidor miembro</h1>
    </div>
  );
};
export default member;
