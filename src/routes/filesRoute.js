const express = require('express');
const router = express.Router();
const {
    uploadFile,
    getListFiles,
    download,
    remove
} = require("../controllers/fileController");

router.post("/upload", uploadFile);
router.get("/", getListFiles);
router.get("/:name",download);
router.delete("/:name",remove);

module.exports = router;