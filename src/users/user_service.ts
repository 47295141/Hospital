import {Injectable, UploadedFile} from '@nestjs/common'
import * as postgres from 'postgres'
import {CreateUser , UpdateUser} from '../interface/users_interface'
@Injectable()
export class UserService {
    sql = postgres();
    finMany(){
        return this.sql`
        SELECT * FROM "user";
        `
    }
    post(createUSer: CreateUser){
        return this.sql`
        INSERT INTO "user" ${this.sql(createUSer)} RETURNING *;
        `
    }
    updateUser(id: string, updateUser: UpdateUser){
        return this.sql`
        UPDATE "user"
            SET ${this.sql(updateUser)}
            WHERE "id" = ${id}
        RETURNING *;`
    }
    deleteUser(id:string){
        return this.sql`
        DELETE FROM "user"
            WHERE id = ${id};
        `
    }
    getUserById(id:string){
        return this.sql`
        SELECT * FROM "user"
            WHERE id = ${id}
        `
    }
}

