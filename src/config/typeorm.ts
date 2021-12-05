import {createConnection} from "typeorm"

export async function connect(){
    const connection=await createConnection();
    !!connection.isConnected?console.log("Database connected!"):console.log("Can not connect some thing went wrong:(")
    
}