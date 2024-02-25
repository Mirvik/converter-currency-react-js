import React, { useState } from 'react';
import { Button } from '../../shared/ui/Button';
import { Title } from '../../shared/ui/Title';
import { Text } from '../../shared/ui/Text';
import { Select } from '../../entities/Select/ui';
import { InputNumber } from '../../shared/ui/InputNumber';
import { Output } from '../../entities/Output';

import './index.css';

const Main = () => {
    const [amount, setAmount] = useState(1);

    const [fromName, setFromName] = useState('AGLD');
    const [fromValue, setFromValue] = useState(0.7866582756450597);

    const [toName, setToName] = useState('AGLD');
    const [toValue, setToValue] = useState(0.7866582756450597);

    return (
        <div className="card">
            <Title text="Converter Currency" />
            <Text text="Amount" />
            <InputNumber callback={setAmount}/>
            <Text text="From" />
            <Select name="from" id="fromSelect" setName={setFromName} setValue={setFromValue} ></Select>
            <Text text="To" />
            <Select name="to" id="toSelect" setName={setToName} setValue={setToValue}></Select>
            <Output 
                amount={Number(amount)} 
                fromName={fromName} toName={toName}
                fromValue={Number(fromValue)} toValue={Number(toValue)}
            />
            <Button text="Convert" />
        </div>
    )
};
export { Main };