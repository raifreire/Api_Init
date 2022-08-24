import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository"

interface IRequeste {
    name: string;
    description: string;
}
class CreateSpecificationService {
    constructor(private specificationsRepository: ISpecificationsRepository) {

    }

    execute({ name, description }: IRequeste): void {
        const specificationAlreadyExists = this.specificationsRepository.findByName(name);

        if (specificationAlreadyExists) {
            throw new Error('specification already exists')
        }

        this.specificationsRepository.create({
            name,
            description,
        });
    }
}
export { CreateSpecificationService }