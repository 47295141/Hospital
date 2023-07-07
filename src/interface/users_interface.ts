export interface Iuser{
    id: string;
    name: string;
    last_name:string;
    phone_number?: string;
    created_at: Date;
    update_at: Date;
}
export type CreateUser = Omit<Iuser, 'id' | 'created_at' | 'update_at'>;
export type UpdateUser = Partial<CreateUser>;