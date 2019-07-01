type SurgeonCreate = {
    email: string;
    name: string;
    crm: number;
    phone: string;
    uf: string;
    tuss: string;
    is_admin: boolean;
    approved_token?: string | Int32Array;
}