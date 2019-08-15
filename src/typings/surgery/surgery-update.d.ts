type SurgeryUpdate = {
    id:number;
    complicated?:boolean;
    hours_duration?:string;
    minutes_duration?: string;
    surgeon?: {
        name:string;
        crm:string;
        uf:string;
    }
        name?:string;
        cpf?:string;
        birth_date?: string; 
    
    main_tuss?:string;
    comorbidities?:string;
    accommodations?:string;
    accommodations_days?:string;
    media?: [{
        id?: number;
        media?: string;
        surgery?: number;
    }]
}