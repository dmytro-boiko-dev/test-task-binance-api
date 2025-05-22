import {Request, Response} from 'express';
import axios from 'axios';
// import Price from '../model/Price';
import {IBinancePrice} from '../interfaces/IBinancePrice';

// const BINANCE_API_URL = 'https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT';
const BINANCE_API_URL = 'https://api.binance.com/api/v3/ticker?symbol=BTCUSDT&windowSize=7d';

export const fetchAndStorePrice = async (): Promise<void> => {
    try {

        // 1. Fetch prices
        const response = await axios.get<IBinancePrice>(BINANCE_API_URL);
        // const response = await axios.get(BINANCE_API_URL);
        const {symbol, priceChange} = response.data;

        console.log(`Fetched price for ${symbol}: ${priceChange}`);

        // 2. analyze price




        // 3. display analyzed data







        // const newPrice = new Price({
        //     symbol,
        //     price: parseFloat(price),
        // });

        // await newPrice.save();


        // console.log(`Stored new price for ${symbol}: ${price}`);
    } catch (error) {
        console.error('Error fetching/storing price:', error instanceof Error ? error.message : 'Unknown error');
    }
};

export const getPrices = async (req: Request, res: Response): Promise<void> => {
    try {
        // const prices = await Price.find().sort({timestamp: -1}).limit(100);
        // res.json(prices);

        // todo:
        const prices = {};

        res.json(prices);

    } catch (error) {
        res.status(500).json({
            message: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};