import { render } from "@testing-library/react"
import App from "./App"
import { describe, it } from "vitest"


describe('<App>', function() {
    it("Is mainly a container and should render without fail", function() {
        render(
            <App />
        )
    })
})