"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportController = void 0;
const jwt_service_1 = require("../services/other/jwt.service");
const report_service_1 = require("../services/report.service");
const user_model_1 = require("../models/user.model");
class ReportController {
    async createReport(req, res) {
        try {
            const { type, description, date, place } = req.body;
            if (!type || !place)
                return res.status(400).json({ error: 'Provide missing fields' });
            const nationalId = await jwt_service_1.decodeJwt(req.headers['authorization']);
            const findUser = await user_model_1.userSchema.findOne({ nationalId: nationalId });
            const createReport = await report_service_1.create(findUser._id, type, place, date, description);
            return res.status(201).json({ data: createReport, message: 'Report created' });
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({ error: error });
        }
    }
}
exports.ReportController = ReportController;
