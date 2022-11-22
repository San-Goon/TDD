import React, {useEffect, useState} from "react";
import axios from "axios";
import ScoopOption from "./ScoopOption";
import {Row} from "react-bootstrap";
import ToppingOption from "./ToppingOption";

interface PropsType {
	optionType: 'scoops' | 'toppings';
}

interface OptionType {
	name: string;
	imagePath: string;
}

const Options = ({optionType}: PropsType) => {
	const [items, setItems] = useState<OptionType[]>([]);
	useEffect(() => {
		axios.get(`http://localhost:3030/${optionType}`)
			.then((response) => setItems(response.data))
			.catch((error) => {console.log(error)})
	}, [optionType])

	const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption;

	const optionItems = items.map((item) => {
		// @ts-ignore
		return <ItemComponent key={item.name} name={item.name} imagePath={item.imagePath}/>
		}
	)

	return (
		<Row>{optionItems}</Row>
	)
}

export default Options
