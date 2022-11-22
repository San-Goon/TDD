import {OrderDetailsProvider} from "../contexts/OrderDetails";
import {render} from "@testing-library/react";

const renderWithContext = (ui:any, options?:any) => render(ui, { wrapper: OrderDetailsProvider, ...options })

export * from '@testing-library/react'

export { renderWithContext as render };
