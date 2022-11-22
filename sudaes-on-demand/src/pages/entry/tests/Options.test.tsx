import {render, screen} from "@testing-library/react";
import Options from "../Options";

test('스쿱 이미지 잘 뜨는지 테스트', async () => {
	render(<Options optionType="scoops" />);
	const scoopImages = await screen.findAllByRole('img', {name : /scoop$/i });
	expect(scoopImages).toHaveLength(2);
	// @ts-ignore
	const altText = scoopImages.map((element) => element.alt);
	expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
})

test('토핑 이미지 테스트', async () => {
	render(<Options optionType='toppings' />)
	const toppingImages = await screen.findAllByRole('img', {name: /topping$/i});
	expect(toppingImages).toHaveLength(3);
	// @ts-ignore
	const altText = toppingImages.map((item) => item.alt);
	expect(altText).toEqual(['Cherries topping', 'M&Ms topping', 'Hot fudge topping'])
})
