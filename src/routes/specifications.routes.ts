import { Router } from 'express';
import { Specification } from '../modules/cars/model/Specification';
import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationsRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationsRoutes = Router();

const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post('/', (request, response) => {
    const { name, description } = request.body;
    const createSpecificationService = new CreateSpecificationService(specificationsRepository);

    createSpecificationService.execute({ name, description });

    return response.status(201).send();
});

export { specificationsRoutes };