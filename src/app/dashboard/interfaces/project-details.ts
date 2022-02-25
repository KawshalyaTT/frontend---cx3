import { ClientData } from "./client-details";
import { ITargetData } from "./target-details";

export interface IProjectData {
    projectId: number;
    projectName: string;
    projectType: string;
    projectPurpose: string;
    projectTransactionSize: number;
    projectManager: string;
    projectLeader: string;
    projectIsConfidential: boolean;
    clientId?: ClientData[];
    projectCreated: Date;
    targetDetails: ITargetData[];
}

export class ProjectData implements IProjectData {

    public projectId: number;
    public projectName: string;
    public projectType: string;
    public projectPurpose: string;
    public projectTransactionSize: number;
    public projectManager: string;
    public projectLeader: string;
    public projectIsConfidential: boolean;
    public projectCreated: Date;
    public clientId?: ClientData[];
    public targetDetails: ITargetData[];
    constructor(projectId: number,
        projectName: string,
        projectType: string,
        projectPurpose: string,
        projectTransactionSize: number,
        projectManager: string,
        projectLeader: string,
        projectIsConfidential: boolean, created: string, targetdata:ITargetData[]) {
        this.projectId = projectId;
        this.projectName = projectName;
        this.projectType = projectType;
        this.projectPurpose = projectPurpose;
        this.projectTransactionSize = projectTransactionSize;
        this.projectManager = projectManager;
        this.projectLeader = projectLeader;
        this.projectIsConfidential = projectIsConfidential;
        this.projectCreated = new Date(+created);
        this.targetDetails = targetdata;
    }


}