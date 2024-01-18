const mongoose = require('mongoose');

const instrumentSchema = new mongoose.Schema({
        riskScore: Number,
        nigerianStocks: Number,
        foreignStocks: Number,
        techStocks: Number,
        emergingStocks: Number,
        nigerianBonds: Number,
        foreignBonds: Number,
        commodities: Number,
        realEstate: Number,
        tBills: Number,
        alternative: Number,
});

const Instrument = mongoose.model('Instrument', instrumentSchema);

module.exports = Instrument;