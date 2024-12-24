import { Router } from "express";
import { createProject, deleteProjectByProjectId, fetchProjectByProjectId, getAllProject, updateproject } from "../controller/controller.project.js";
import { projectCreationValidation } from "../middleware/validatonMiddleware/middleware.projectValidation.js";


const projectRouter = Router();

projectRouter.post('/create',projectCreationValidation,createProject);
projectRouter.patch('/update/:projectId',updateproject);
projectRouter.get('/all',getAllProject);
projectRouter.get('/:projectId',fetchProjectByProjectId);
projectRouter.delete('/delete/:projectId',deleteProjectByProjectId);

export default projectRouter;



