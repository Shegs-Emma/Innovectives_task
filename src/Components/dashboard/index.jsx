import React from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../navigation/navbar";
import {
    DashboardCont,
    DashBody,
    ActiveLoans,
    LoanItems,
    EmptyDivs,
    EmptyDiv,
    EmptyItems,
    EmptySquare,
    EmptyRec,
    DevL
} from "./dashboard.styles";
import { New } from "../navigation/dashnav/dashnav.styles";
import { H2, H3, P, Span } from "../ui/typography";
import { AnyRow } from "../ui/shared";
import Button from "../ui/button";

const Dashboard = () => {
    const history = useHistory();

    const routeChange = () =>{
        let path = `cat`; 
        history.push(path);
    };

    return (
        <DashboardCont>
            <Navbar />
            <DashBody>
                <H2>Loans</H2>

                {/* Active loans div */}
                <ActiveLoans>
                    <H2>My Active Loans</H2>

                    <LoanItems>
                        <Span>Reference Number</Span>
                        <Span>Total Amount (&#8358;)</Span>
                        <Span>Date Applied</Span>
                        <Span>Date Disbursed</Span>
                        <Span>Repayment Date</Span>
                        <Span>Actions</Span>
                    </LoanItems>

                    <AnyRow noF>
                        <P noF>No Results Found</P>
                    </AnyRow>
                </ActiveLoans>

                {/* Empty Divs */}
                <EmptyDivs>
                    <EmptyDiv>
                        <EmptyItems>
                            <EmptySquare />
                            <EmptyRec />
                            <EmptyRec next />
                            <EmptySquare wide />
                        </EmptyItems>
                    </EmptyDiv>

                    <EmptyDiv>
                        <EmptyItems>
                            <EmptySquare />
                            <EmptyRec />
                            <EmptyRec next />
                            <EmptySquare wide />
                        </EmptyItems>
                    </EmptyDiv>

                    <EmptyDiv>
                        <EmptyItems>
                            <EmptySquare />
                            <EmptyRec />
                            <EmptyRec next />
                            <EmptySquare wide />
                        </EmptyItems>
                    </EmptyDiv>

                    <EmptyDiv>
                        <EmptyItems>
                            <EmptySquare />
                            <EmptyRec />
                            <EmptyRec next />
                            <EmptySquare wide />
                        </EmptyItems>
                    </EmptyDiv>
                </EmptyDivs>

                {/* Device loans */}
                <EmptyDiv>
                    <EmptyItems>
                        <img src="/illustr.jfif" alt='phone' className="phone" />
                        <DevL>
                            <H3>Device Loans</H3>
                            <New>
                                <Span>New</Span>
                            </New>
                        </DevL>
                        <H3 fro>From N 50,000 to N 500,000</H3>
                        <Button clicked={routeChange}>Explore Available Devices</Button>
                    </EmptyItems>
                </EmptyDiv>
            </DashBody>
        </DashboardCont>
    )
};

export default Dashboard;