import { createReportRepo } from '../repositories/report.repository';
import { userSchema } from '../models/user.model';
import { userDto } from '../models/user.model';
/**
* Executes the report implementation
* @param _id the object id to find in database
* @param place the place where the violation was commited
* @param type the type of violation
* @param date the date of when the violation was commited | default is the current date
* @param description the description of the violation 
* @returns the created report
*/
export async function create(_id: string, type: string, place: string, date: Date, description: string){
    const findUser = await userSchema.findById({_id}) as userDto;
    const createReport = await (await createReportRepo(type, place, date, description)).populate(findUser._id.toString());
    return createReport;
}