const { Concert, MerchandiseStall, AfterParty } = require('../models');

// Get all concerts
const getConcerts = async (req, res) => {
  try {
    const concerts = await Concert.findAll();
    res.status(200).json(concerts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving concerts', error: error.message });
  }
};

// Get all merchandise stalls
const getMerchandiseStalls = async (req, res) => {
  try {
    const merchandiseStalls = await MerchandiseStall.findAll();
    res.status(200).json(merchandiseStalls);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving merchandise stalls', error: error.message });
  }
};

// Get all after-parties
const getAfterParties = async (req, res) => {
  try {
    const afterParties = await AfterParty.findAll();
    res.status(200).json(afterParties);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving after-parties', error: error.message });
  }
};

module.exports = {
  getConcerts,
  getMerchandiseStalls,
  getAfterParties
};
