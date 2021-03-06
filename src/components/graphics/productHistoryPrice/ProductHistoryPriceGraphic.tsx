import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { ILineGraphic } from '../../../interfaces/graphics/ILineGraphic';
// const data = [{ name: 'Page A', uv: 400 }, { name: 'Page B', uv: 500 }];

const LineChartComponent = (data: ILineGraphic[]): JSX.Element => {
    return (
        <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
        </LineChart>
    );
}

export default LineChartComponent;