type CostGroupItem = {
    hospital_id?:number;
    name:string;
    surgery_tax:number;
    additional_tax:number;
    anesthesia_tax:number;
    material_tax: number;
    clinical_schedule?:number;
    clinical_fee?:number;
    tuss:string;
    Semi_intensiva?: number;
    CTI?: number;
    Andar?: number;
    Day_Clinic?: number;
}