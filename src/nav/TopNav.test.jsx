import { describe, it, expect } from "vitest"
import { render, screen, } from "@testing-library/react"
import TopNav from "./TopNav"
import { BrowserRouter } from "react-router-dom"


describe('<TopNav>', function () {
    it("should have a home button", function () {
        render(
            <BrowserRouter>
                <TopNav />
            </BrowserRouter>
        )
        let button = screen.getByRole("button", { name: "Home" })
        expect(button).toBeTruthy()
    })
})