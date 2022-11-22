import React, {createContext, useContext, useEffect, useMemo, useState} from "react";
import {pricePerItem} from "../constants";

const formatCurrency = (amount: number) => {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 2
	}).format(amount)
}

// @ts-ignore
const OrderDetails = createContext();

export const useOrderDetails = (): any => {
	const context = useContext(OrderDetails);

	if (!context) {
		throw new Error('useOrderDetails must be used within an OrderDetailsProvider');
	}

	return context;
}

const calculateSubtotal = (optionType: "scoops" | "toppings", optionCounts: any) => {
	let optionCount = 0;
	for (const count of optionCounts[optionType].values()) {
		optionCount += count;
	}
	return optionCount * pricePerItem[optionType];
}

export const OrderDetailsProvider = (props: any) => {
	const [optionCounts, setOptionCounts] = useState({scoops: new Map(), toppings: new Map()});

	const zeroCurrency = formatCurrency(0)

	const [totals, setTotals] = useState({
		scoops: zeroCurrency,
		toppings: zeroCurrency,
		grandTotal: zeroCurrency,
	})

	useEffect(() => {
		const scoopsSubtotal = calculateSubtotal("scoops", optionCounts);
		const toppingsSubtotal = calculateSubtotal("toppings", optionCounts);
		const grandTotal = scoopsSubtotal + toppingsSubtotal;
		setTotals({scoops: formatCurrency(scoopsSubtotal), toppings: formatCurrency(toppingsSubtotal), grandTotal: formatCurrency(grandTotal)})
	}, [optionCounts])

	const value = useMemo(() => {
		const updateItemCount = (itemName: string, newItemCount: string, optionType: 'scoops' | 'toppings') => {
			const newOptionCount = {...optionCounts};
			const optionCountsMap = optionCounts[optionType];
			optionCountsMap.set(itemName, parseInt(newItemCount))
			setOptionCounts(newOptionCount);
		}
		return [{...optionCounts, totals}, updateItemCount]
	}, [optionCounts, totals])
	return <OrderDetails.Provider value={value} {...props} />
}
