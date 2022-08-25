import fs from 'fs';

class ImportCategoryUseCase {
    execute(file: Express.Multer.File | undefined): void {
        const stream = fs.createReadStream()
    }
}

export { ImportCategoryUseCase }