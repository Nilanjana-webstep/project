import { Router } from "express";
import { 
    fetchAllProjectDetail,
    fetchProjectDetailForParticularProject,
     updateProjectDetail 
    } from "../controller/controller.projectDetail.js";
import { projectDetailValidation } from "../middleware/validatonMiddleware/middleware.projectValidation.js";



const projectDetailRoute = Router();


projectDetailRoute.get('/all',fetchAllProjectDetail);
projectDetailRoute.get('/:projectId',fetchProjectDetailForParticularProject);
projectDetailRoute.put('/update/:projectId',projectDetailValidation,updateProjectDetail);

export default projectDetailRoute;