"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReportRepo = void 0;
const report_model_1 = require("../models/report.model");
/**
* Allows you to create a report
* @param place the place where the violation was commited
* @param type the type of violation
* @param date the date of when the violation was commited | default is the current date
* @param description the description of the violation | is an optional value
* @returns the created report
*/
async function createReportRepo(place, type, date, description) {
    const createReport = await new report_model_1.reportSchema({
        place: place,
        type: type,
        date: date,
        description: description
    }).save();
    return createReport;
}
exports.createReportRepo = createReportRepo;
