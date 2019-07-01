type CostGroupCreate = {
    hospitl_id:number;
    name:string;
    surgery_tax:number;
    additional_tax:number;
    anesthesia_tax:number;
    material_tax: number;
    clinical_schedule:number;
    tuss:string;
    accommodations: number;
    Semi_intensiva?: string;
    CTI?: string;
    Andar?: string;
    Day_Clinic?: string;
}