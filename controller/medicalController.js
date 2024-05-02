const axios = require('axios');
const cheerio = require('cheerio');
    const url = 'https://medlineplus.gov';  // URL to scrape
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const medicalInfo = [];

    // Extract medical information from the HTML
    $('h2').each((index, element) => {
      const title = $(element).text();
      medicalInfo.push({ title });
    });

    exports.getMedicalInfo = async (req, res, next) => {
      try {
    res.json({ medicalInfo });
  } catch (error) {
    next(error);
  }
};
exports.submitMedicalInfo = async (req, res, next) => {
    try {
      // Process and save medical information to the database
      // ...
      res.json({ message: 'Medical information submitted successfully' });
    } catch (error) {
      next(error);
    }
  };
  