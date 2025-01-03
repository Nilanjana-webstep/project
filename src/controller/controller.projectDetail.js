import PaymentPlan from "../model/model.paymentplan.js";
import PlanName from "../model/model.planName.js"
import ProjectDetail from "../model/model.projectDetails.js";
import CustomError from "../utils/CustomError.js";




export const fetchProjectDetailForParticularProject = async ( req,res,next)=>{
    
    const { projectId } = req.params;

    try {
        
      
        const data = await ProjectDetail.findOne({where:{projectId}, attributes: { exclude: ['updatedAt','createdAt'] }});
        
        res.status(200).json({
            success : true,
            message : 'successfully fetched project detail ',
            data
        })

     } catch (error) {

        console.log('error :',error);
        
     }
}


export const fetchAllProjectDetail = async ( req,res,next)=>{
   

    try {
        
      
        const data = await ProjectDetail.findAll( {attributes: { exclude: ['updatedAt','createdAt'] }});
        
        res.status(200).json({
            success : true,
            message : 'successfully fetched all project detail ',
            data
        })

     } catch (error) {
        
        console.log("error : ",error);
        
     }
}




export const updateProjectDetail = async ( req,res,next)=>{
    
    const { projectId } = req.params;

    console.log("proejct id : ",projectId);
    

    try {
        
         const [ result ] = await ProjectDetail.update(req.body,{where:{projectId}});

         console.log("the result is : ",result);
         

         if( result == 1){

            const data = await ProjectDetail.findByPk(projectId,{attributes: { exclude: ['updatedAt','createdAt'] }});

            res.status(200).json({
                success : true,
                message : 'successfully updated project details ',
                data
            })

         }else {
            return next( new CustomError("Sorry! updation failed.",400));
         }
        
        

     } catch (error) {
        
        console.log('the error is : ',error);
        
     }
}