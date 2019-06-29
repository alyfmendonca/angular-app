type SurgeonById = {
    id:number;
    name: string;
    crm: number;
    phone: string;
    uf: string;
    status: string;
    approved_date: string;
    used_approved_token: boolean;
    user: number;
    approved_by: number;
    tuss: [{
        id: number,
        str: string,
    }];
}