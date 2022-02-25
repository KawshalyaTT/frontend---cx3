import { ClientData } from "./client-details"

export interface ITargetData {
    targetId: number;
    targetName: string;
    targetCode: number;
    targetSize: number;
    estimatedNoOfLoans: number;
    teamMembers: string[];
    loanType: string;
    projectType: string;
    clientId: ClientData;
}