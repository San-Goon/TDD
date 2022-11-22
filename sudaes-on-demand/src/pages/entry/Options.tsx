import React, {useEffect, useState} from "react";
import axios from "axios";
import ScoopOption from "./ScoopOption";
import {Row} from "react-bootstrap";
import ToppingOption from "./ToppingOption";
import AlertBanner from "../common/AlertBanner";
import {pricePerItem} from "../../constants";
import {useOrderDetails} from "../../contexts/OrderDetails";

interface PropsType {
	optionType: 'scoops' | 'toppings';
}

interface ItemType {
	name: string;
	imagePath: string;
}

const Options = ({optionType}: PropsType) => {
	const [items, setItems] = useState<ItemType[]>([]);
	const [error, setError] = useState(false);
	const [orderDetails, updateItemCount] = useOrderDetails();

	useEffect(() => {
		axios.get(`http://localhost:3030/${optionType}`)
			.then((response) => setItems(response.data))
			.catch((error) => {
				setError(true)
			})
	}, [optionType])

	if (error) {
		// @ts-ignore
		return <AlertBanner />
	}

	const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption;
	const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase();


	const optionItems = items.map((item) => {
		// @ts-ignore
		return <ItemComponent key={item.name} name={item.name} imagePath={item.imagePath} updateItemCount={(itemName, newItemCount) => updateItemCount(itemName,newItemCount, optionType)}/>
		}
	)

	return (
		<>
			<h2>{title}</h2>
			<p>{pricePerItem[optionType]} each</p>
			<p>{title} total: {orderDetails.totals[optionType]}</p>
			<Row>{optionItems}</Row>
	</>
	)
}

export default Options;
