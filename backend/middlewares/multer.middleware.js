import multer from 'multer'
import path from 'path';

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        // path of the directory where the files are being saved
        cb(null, path.join(__dirname, '../public/Files'))
    },
    filename: function (req, file, cb){
       // Generate a unique identifier (e.g., timestamp or random string)
       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1000);

       // Get the file extension
       const extension = path.extname(file.originalname);
       
       // Get the base name (original name without extension)
       const baseName = path.basename(file.originalname, extension);
       
       // Construct the new file name
       cb(null, `${baseName}-${uniqueSuffix}${extension}`);
    }
})

export const upload = multer({
    storage
})