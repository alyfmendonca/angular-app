type Surgery = {
    id:number;
    status: string;
    complicated: boolean;
    hours_duration: string,
    minutes_duration: string,
    true_hours_duration: string,
    true_minutes_duration: string,
    explanation?: string,
    percentage: number;
    discount: boolean;
    note: string;
    media?: [{
        id: number,
        media: string,
        surgery: number
    }];
    surgeon: [{
        name:string,
        crm:number,
    }];
    patient: [{
        name: string,
        cpf: number,
        birth_date: string,
    }];
    main_tuss: [{
        id: number,
        str: string,
    }];
    hospital: any[];
    comorbidities: any[];
    secondary_tuss: [{
        id: number,
        str: string,
    }];
    accommodations: any[];
    accommodations_days?: any[];
    cost?: any[];
    costs_options?: any[];
    cid?: {
        id: number,
        str: string
    };
    
}