import {render, screen, waitFor} from "@testing-library/react";
import OrderEntry from "../OrderEntry";
import {server} from "../../../mocks/server";
import {rest} from "msw";


test('에러 핸들링 테스트', async () => {
	server.resetHandlers(
		rest.get('http://localhost:3030/scoops', (req, res, ctx) => {
			return res(ctx.status(500))
		}),
		rest.get('http://localhost:3030/toppings', (req, res, ctx) => {
			return res(ctx.status(500))
		})
	)
	render(<OrderEntry />);

	await waitFor(async () => {
		const alerts = await screen.findAllByRole('alert');
		expect(alerts).toHaveLength(2);
	})
})
