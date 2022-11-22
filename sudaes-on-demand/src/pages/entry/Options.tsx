import React, {useEffect, useState} from "react";
import axios from "axios";
import ScoopOption from "./ScoopOption";
import {Row} from "react-bootstrap";
import ToppingOption from "./ToppingOption";
import AlertBanner from "../common/AlertBanner";

interface PropsType {
	optionType: 'scoops' | 'toppings';
}

interface OptionType {
	name: string;
	imagePath: string;
}

const Options = ({optionType}: PropsType) => {
	const [items, setItems] = useState<OptionType[]>([]);
	const [error, setError] = useState(false);

	useEffect(() => {
		axios.get(`http://localhost:3030/${optionType}`)
			.then((response) => setItems(response.data))
			.catch((error) => {
				setError(true);
			})
	}, [optionType])

	if (error) {
		// @ts-ignore
		return <AlertBanner />
	}

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
