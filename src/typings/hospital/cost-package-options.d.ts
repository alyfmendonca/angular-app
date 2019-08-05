type CostPackageOptions = {
    name: string;
    cost_groups: [{
        cost_group: {
            id: number,
            name: string,
            surgery_tax: number,
            additional_tax: number,
            anesthesia_tax: number,
            material_tax: number,
            clinical_fee: number,
            cost_package: number,
        }
        tuss: [{
            id: number;
            str: string;
        }];
    }];
    
}
