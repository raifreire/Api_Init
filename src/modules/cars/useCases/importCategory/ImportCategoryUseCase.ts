import csvParser from 'csv-parser';
import fs from 'fs';



class ImportCategoryUseCase {
    execute(file: Express.Multer.File | any): void {
        const stream = fs.createReadStream(file.path);

        const parseFile = csvParser();

        stream.pipe(parseFile);

        parseFile.on('data', async (line) => {
            console.log(line)
        });
    }
}

export { ImportCategoryUseCase }