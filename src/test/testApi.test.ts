import axios from 'axios';

test("Health check test", () => {
    expect(2 + 2).toEqual(4);
});

test("Response status test", async () => {

    const response = await axios.post('http://localhost:3000/api/prices', {
        pair: 'BTCUSDT',
        period: '7d'
    });

    // @ts-ignore
    expect(response.status).toEqual(200);
    // @ts-ignore
    expect(response.data.pair).toEqual("BTCUSDT");
});