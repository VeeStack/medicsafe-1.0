     // Upload image and extract text using OCR
     const { createWorker } = require('tesseract.js');
exports.uploadAndExtractText = async (req, res, next) => {
    try {
      const { imagePath } = req.body;
      const worker = createWorker();
      await worker.load();
      await worker.loadLanguage('eng');
      await worker.initialize('eng');
      const { data: { text } } = await worker.recognize(imagePath);
      await worker.terminate();
  
exports.uploadFile = (req, res) => {
  // Handle file upload logic here
  res.json({ message: 'File uploaded successfully' });
};

      res.json({ text });
    } catch (error) {
      next(error);
    }
  };
  
  
  
