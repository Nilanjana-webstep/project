import Amenity from "../model/model.amenity.js";
import CustomError from "../utils/CustomError.js";

// get  amenities based on project ID
const getAmenityByProjectId = async (req, res, next) => {

    const { projectId } = req.params;

    try {

        let data = await Amenity.findOne({where:{projectId},attributes: { exclude: ['updatedAt','createdAt'] }});

        return res.status(200).json({
            success: true,
            message: 'Fetching  all amenities for this project.',
            data
        });

    } catch (error) {

        console.log("The error is: ", error);

    }
}

// update amenities based on project Id
const updateAmenity = async (req, res, next) => {

    const { projectId } = req.params;
    
    try {
         const [ result ] = await Amenity.update(req.body, { where: { projectId } });

         if( result == 1 ){

            const data = await Amenity.findOne({where:{projectId},attributes: { exclude: ['updatedAt','createdAt'] }})
            
            return res.status(200).json({
                success: true,
                message: 'Successfully updated amenities.',
                data
            });

        }else {

            return next( new CustomError("Not updated!. please try again.",500));
        }

    } catch (error) {

        console.log("The error is: ", error);
        return next(new CustomError("Failed to update address.", 500));

    }
}

export {

    getAmenityByProjectId,
    updateAmenity
    
}
