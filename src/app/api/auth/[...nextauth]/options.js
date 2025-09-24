import GoogleProvider from "next-auth/providers/google";

export const options = {
    providers: [
        GoogleProvider({
            profile(profile){
                console.log("Perfil de Google: ", profile);

                let userRole = "Usuario de Google";
                 if (profile?.email == "emiliagonzalez71@aragon.unam.mx"){
                    userRole ="admin";
                 }
            return{
                ...profile,
                id: profile.sub,
                role:userRole, 
            };
        },
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_Secret,
        }),
    ],
    callbacks:{
        async jwt({token, user}){
            if(user) token.role = user.role;
            return token;
        },
        async session({session,token}){ 
            if (session?.user) session.user.role = token.role;
            return session;
        },
    },
};