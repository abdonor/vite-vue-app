import {UsersEnrolledDto} from "./UsersEnrolledDto";

export interface ReportUsersEnrolledDto
{
    data : [
        UsersEnrolledDto[],
    ],
    data_course : [
        name: string,
        quantity: string
    ],
    total_by_country : [
        country : {
            total: string
        }
    ],
    total : number

}