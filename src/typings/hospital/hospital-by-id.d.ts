type HospitalById = {
    id: number;
    name: string;
    email:string;
    address: string;
    phone: string;
    cep: number;
    cost_package: number;
    cost_groups: CostGroup[];
    all_tuss: Tuss[];
}
