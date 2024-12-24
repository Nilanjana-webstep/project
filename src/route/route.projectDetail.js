import { Router } from "express";
import { 
    fetchAllProjectDetail,
    fetchProjectDetailForParticularProject,
     updateProjectDetail 
    } from "../controller/controller.projectDetail.js";
import { projectDetailValidation } from "../middleware/validatonMiddleware/middleware.projectValidation.js";

const projectDetailRoute = Router();

projectDetailRoute.get('/all',fetchAllProjectDetail);
projectDetailRoute.put('/update/:projectId',projectDetailValidation,updateProjectDetail);
projectDetailRoute.get('/:projectId',fetchProjectDetailForParticularProject);

export default projectDetailRoute;