import express from 'express';
import mongoose from 'mongoose';

import Instrument from '../modals/InstrumentModel.js';

const seederRouter = express.Router();

const instrumentsData = [
        // Provide array of instruments data here
        {
                riskScore: 0,
                nigerianStocks: 18,
                foreignStocks: 4,
                techStocks: 2,
                emergingStocks: 7,
                nigerianBonds: 35,
                foreignBonds: 15,
                commodities: 7,
                realEstate: 12,
                tBills: 0,
                alternative: 0
        },
        {
                riskScore: 1,
                nigerianStocks: 20,
                foreignStocks: 5,
                techStocks: 3,
                emergingStocks: 7,
                nigerianBonds: 35,
                foreignBonds: 6,
                commodities: 12,
                realEstate: 12,
                tBills: 0,
                alternative: 0
        },
        {
                riskScore: 2,
                nigerianStocks: 23,
                foreignStocks: 5,
                techStocks: 4,
                emergingStocks: 7,
                nigerianBonds: 35,
                foreignBonds: 14,
                commodities: 12,
                realEstate: 0,
                tBills: 0,
                alternative: 0
        },
        {
                riskScore: 3,
                nigerianStocks: 26,
                foreignStocks: 6,
                techStocks: 4,
                emergingStocks: 7,
                nigerianBonds: 35,
                foreignBonds: 10,
                commodities: 12,
                realEstate: 0,
                tBills: 0,
                alternative: 0
        },
        {
                riskScore: 4,
                nigerianStocks: 29,
                foreignStocks: 7,
                techStocks: 5,
                emergingStocks: 6,
                nigerianBonds: 35,
                foreignBonds: 6,
                commodities: 12,
                realEstate: 0,
                tBills: 0,
                alternative: 0
        },
        {
                riskScore: 5,
                nigerianStocks: 31,
                foreignStocks: 8,
                techStocks: 6,
                emergingStocks: 5,
                nigerianBonds: 35,
                foreignBonds: 3,
                commodities: 12,
                realEstate: 0,
                tBills: 0,
                alternative: 0
        },
        {
                riskScore: 6,
                nigerianStocks: 35,
                foreignStocks: 8,
                techStocks: 7,
                emergingStocks: 3,
                nigerianBonds: 35,
                foreignBonds: 12,
                commodities: 0,
                realEstate: 0,
                tBills: 0,
                alternative: 0
        },
        {
                riskScore: 7,
                nigerianStocks: 45,
                foreignStocks: 13,
                techStocks: 12,
                emergingStocks: 7,
                nigerianBonds: 23,
                foreignBonds: 0,
                commodities: 0,
                realEstate: 0,
                tBills: 0,
                alternative: 0
        },
        {
                riskScore: 8,
                nigerianStocks: 45,
                foreignStocks: 15,
                techStocks: 15,
                emergingStocks: 9,
                nigerianBonds: 16,
                foreignBonds: 0,
                commodities: 0,
                realEstate: 0,
                tBills: 0,
                alternative: 0
        },
        {
                riskScore: 9,
                nigerianStocks: 45,
                foreignStocks: 18,
                techStocks: 17,
                emergingStocks: 11,
                nigerianBonds: 9,
                foreignBonds: 0,
                commodities: 0,
                realEstate: 0,
                tBills: 0,
                alternative: 0
        },
        {
                riskScore: 10,
                nigerianStocks: 45,
                foreignStocks: 20,
                techStocks: 19,
                emergingStocks: 14,
                nigerianBonds: 2,
                foreignBonds: 0,
                commodities: 0,
                realEstate: 0,
                tBills: 0,
                alternative: 0
        }
              
];
      

// @desc  Post seed db
// @route post /api/seeder
// @access Public
seederRouter.get("/",(async(req,res)=> {                                                                                                  
        try {
                await Instrument.deleteMany(); // Clear existing data
                await Instrument.insertMany(instrumentsData); // Insert new data
                console.log('Database seeded successfully');
                
                res.send({ message: 'Database seeded successfully' });
        } 
        catch (error) {
                console.error('Error seeding database:', error);
                
                res.status(404).send({ message: error });
        } 
}))


export default seederRouter;