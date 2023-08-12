const fs = require('fs')
const path = require('path')
const multer = require('multer')

const HomeController = {
    async index(req, res) {
        const files = fs.readdirSync(`./public/uploads`)

        return res.render('views/home/index', {
            files: files
        })
    },
    async store(req, res) {
        const storage = multer.diskStorage({
            destination: (req, file, cb) => cb(null, 'public/uploads'),
            filename: (req, file, cb) => cb(null, file.fieldname + '-' + Date.now()+'.jpg')
        })

        const maxSize = 1 * 1000 * 1000;
    
        const upload = multer({ 
            storage: storage,
            limits: { fileSize: maxSize },
            fileFilter: (req, file, cb) => {
                const filetypes = /jpeg|jpg|png/
                const mimetype = filetypes.test(file.mimetype)
                const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
                
                if (mimetype && extname) return cb(null, true)
            
                cb(`Error: File upload only supports the following filetypes ${filetypes}`)
            }
        }).single("file")
        
        upload(req, res, err => {
            if (err) res.send(err)
            else res.send("Success, Image uploaded!")
        })
    }
}

module.exports = HomeController