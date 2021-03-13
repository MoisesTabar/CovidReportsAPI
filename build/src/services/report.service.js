"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const report_repository_1 = require("../repositories/report.repository");
const user_model_1 = require("../models/user.model");
/**
* Executes the report implementation
* @param _id the object id to find in database
* @param place the place where the violation was commited
* @param type the type of violation
* @param date the date of when the violation was commited | default is the current date
* @param description the description of the violation
* @returns the created report
*/
async function create(_id, type, place, date, description) {
    const findUser = await user_model_1.userSchema.findById({ _id });
    const createReport = await (await report_repository_1.createReportRepo(type, place, date, description)).populate(findUser._id.toString());
    return createReport;
}
exports.create = create;
