import { reportSchema } from '../models/report.model';

/**
* Allows you to create a report
* @param place the place where the violation was commited
* @param type the type of violation
* @param date the date of when the violation was commited | default is the current date
* @param description the description of the violation | is an optional value
* @returns the created report
*/
export async function createReportRepo(place: string, type: string, date: Date, description?:string){
    const createReport = await new reportSchema({
        place: place,
        type: type,
        date: date,
        description: description
    }).save();

    return createReport;
}