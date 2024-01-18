import mongoose from 'mongoose';

const instrumentSchema = new mongoose.Schema(
        {
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
        },
        {
                timestamps: true
        }
);

const Instrument = mongoose.model('Instruments', instrumentSchema);
export default Instrument;
