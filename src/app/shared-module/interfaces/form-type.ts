interface custNumber {
    min: number;
    max: number;
    minlength: number;
    maxlength: number;
    regex: string;
    decimal: boolean;
}

interface custtext {
    minlength: number;
    maxlength: number;
    alphanumeric: boolean;
    regex: string
}

interface custPassword {
    minlength: number;
    maxlength: number;
    regex: string
}

export interface ICustomSelect{
    name: string;
    value: string;
}
export interface ICustomFormControl{
    name: string;
    type: string;
    required:boolean;
    disabled:boolean;
    readonly:boolean;
    formControlName: string;
    selectOptions?: ICustomSelect[];
    multiselect?:boolean;
}
