import { Router } from "express";
import { createProject, deleteProjectByProjectId, fetchProjectByProjectId, getAllProject, updateproject } from "../controller/controller.project.js";
import { projectCreationValidation } from "../middleware/validatonMiddleware/middleware.projectValidation.js";


const projectRouter = Router();

projectRouter.post('/create',projectCreationValidation,createProject);
projectRouter.patch('/update/:projectId',updateproject);
projectRouter.get('/all',getAllProject);
projectRouter.delete('/delete/:projectId',deleteProjectByProjectId);
projectRouter.get('/:projectId',fetchProjectByProjectId);

export default projectRouter;



