import React, {useEffect, useState} from "react";
import axios from "axios";
import ScoopOption from "./ScoopOption";
import {Row} from "react-bootstrap";

interface PropsType {
	optionType: 'scoops' | 'toppings';
}

const Options = ({optionType}: PropsType) => {
	const [items, setItems] = useState<any>([]);
	useEffect(() => {
		axios.get(`http://localhost:3030/${optionType}`)
			.then((response) => setItems(response.data))
			.catch((error) => {console.log(error)})
	}, [optionType])

	const ItemComponent = optionType === 'scoops' ? ScoopOption : null;

	// @ts-ignore
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
