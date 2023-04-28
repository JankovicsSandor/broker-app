import { Ticker } from "@state";
import { Observable, of } from "rxjs";

export const STOCK_MOCK_DATA: Observable<Ticker[]> = of(
    [
        <Ticker>{
            buyPrice:125,
            sellPrice:124,
            companyName:"Apple inc",
            dayMax:130,
            dayMin:120,
            exDividendDate:new Date("2016-09-09"),
            forwardDividend:0.25,
            marketCap:"2.5T",
            openPrice:124,
            preMarketPrice:125,
            previousClosePrice:115,
            symbol:"AAPL",
            yearMax:150,
            yearMin:100
        },
        <Ticker>{
            buyPrice:125,
            sellPrice:124,
            companyName:"Microsoft",
            dayMax:130,
            dayMin:120,
            exDividendDate:new Date("2016-09-07"),
            forwardDividend:0.25,
            marketCap:"2.1T",
            openPrice:124,
            preMarketPrice:125,
            previousClosePrice:115,
            symbol:"MSFT",
            yearMax:150,
            yearMin:100
        },
        <Ticker>{
            buyPrice:125,
            sellPrice:124,
            companyName:"Google",
            dayMax:130,
            dayMin:120,
            exDividendDate:new Date("2016-09-01"),
            forwardDividend:0.25,
            marketCap:"1.8T",
            openPrice:124,
            preMarketPrice:125,
            previousClosePrice:115,
            symbol:"GOOG",
            yearMax:150,
            yearMin:100
        }
    ]
)