type SurgeryAll = {
    id:number;
    status: string;
    complicated: boolean;
    surgeon: [{
        name:string,
        crm:number,
    }];
    patient: string;
    main_tuss: string;
}