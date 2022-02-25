import { FormControl, FormGroup, Validators } from "@angular/forms";

export class AllForms {

    clientDetailsForm: FormGroup = new FormGroup({
        clientName: new FormControl(null, [Validators.required]),
        clientRegion: new FormControl(null, [Validators.required]),
        industrySize: new FormControl(0, [Validators.required]),
        clientSector: new FormControl(null, [Validators.required]),
        clientIndustry: new FormControl(null, [Validators.required])
    });

    projectDetailsForm: FormGroup = new FormGroup({
        projectName: new FormControl(null, [Validators.required]),
        projectType: new FormControl(null, [Validators.required]),
        projectTransactionSize: new FormControl(0, [Validators.required]),
        projectManager: new FormControl(null, [Validators.required]),
        projectLeader: new FormControl(null, [Validators.required]),
        projectPurpose: new FormControl(null, [Validators.required]),
        projectIsConfidential: new FormControl(false, [Validators.required])
    });

    targetDetailsForm: FormGroup = new FormGroup({
        targetName: new FormControl(null, [Validators.required]),
        targetCode: new FormControl(null, [Validators.required]),
        targetSize: new FormControl(0, [Validators.required]),
        clientName: new FormControl(null, [Validators.required]),
        EstimatedNoOfLoans: new FormControl(null, [Validators.required]),
        teamsMembers: new FormControl(null, [Validators.required]),
        loanType: new FormControl(false, [Validators.required]),
        projectType: new FormControl(false, [Validators.required])
    })

} 
