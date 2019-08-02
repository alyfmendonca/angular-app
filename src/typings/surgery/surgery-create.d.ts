type SurgeryCreate = {
    main_tuss: number;
    secondary_tuss:string;
    name: string;
    cpf: number;
    birth_date: string;
    comorbidities: string;
    hours_duration: string,
    minutes_duration: string,
    complicated: boolean;
    accommodations: string;
    accommodations_days:string;
    cid?: string;
    date_time: string;
    explanation?: string;
}