import React from "react";
import Button from "../../ui/button";
import { useHistory } from "react-router-dom";
import { 
    TableCont,
    TableHead,
    TableBody,
    TH,
    TR,
    TD,
    Table
} from "./table.styles";

const Tabler = () => {
    const history = useHistory();

    const routeChange = () =>{ 
        console.log("i was clicked");
        let path = `purchase`; 
        history.push(path);
    };
    
    return (
        <TableCont>
            <Table>
                <TableHead>
                    <TR>
                        <TH></TH>
                        <TH>Name</TH>
                        <TH>Description</TH>
                        <TH>Total Amount (&#8358;)</TH>
                        <TH></TH>
                    </TR>
                </TableHead>
                <TableBody>
                    <TR>
                        <TD img><img src="/Mobile.svg" alt="phone" className='devices' /></TD>
                        <TD name>Samsung Galaxy Note 8</TD>
                        <TD desc>6gb of Ram, 128gb internal storage, Earphone Jack avaia…</TD>
                        <TD>N 250,000</TD>
                        <TD><Button pur
                            clicked={routeChange}
                        >Purchase</Button></TD>
                    </TR>
                    <TR>
                        <TD img><img src="/Mobile.svg" alt="phone" className='devices' /></TD>
                        <TD name>Samsung Galaxy Note 8</TD>
                        <TD desc>6gb of Ram, 128gb internal storage, Earphone Jack avaia…</TD>
                        <TD>N 250,000</TD>
                        <TD><Button pur
                            clicked={routeChange}
                        >Purchase</Button></TD>
                    </TR>
                    <TR>
                        <TD img><img src="/Mobile.svg" alt="phone" className='devices' /></TD>
                        <TD name>Samsung Galaxy Note 8</TD>
                        <TD desc>6gb of Ram, 128gb internal storage, Earphone Jack avaia…</TD>
                        <TD>N 250,000</TD>
                        <TD><Button pur
                            clicked={routeChange}
                        >Purchase</Button></TD>
                    </TR>
                    <TR>
                        <TD img><img src="/Mobile.svg" alt="phone" className='devices' /></TD>
                        <TD name>Samsung Galaxy Note 8</TD>
                        <TD desc>6gb of Ram, 128gb internal storage, Earphone Jack avaia…</TD>
                        <TD>N 250,000</TD>
                        <TD><Button pur
                            clicked={routeChange}
                        >Purchase</Button></TD>
                    </TR>
                    <TR>
                        <TD img><img src="/Mobile.svg" alt="phone" className='devices' /></TD>
                        <TD name>Samsung Galaxy Note 8</TD>
                        <TD desc>6gb of Ram, 128gb internal storage, Earphone Jack avaia…</TD>
                        <TD>N 250,000</TD>
                        <TD><Button pur
                            clicked={routeChange}
                        >Purchase</Button></TD>
                    </TR>
                    <TR>
                        <TD img><img src="/Mobile.svg" alt="phone" className='devices' /></TD>
                        <TD name>Samsung Galaxy Note 8</TD>
                        <TD desc>6gb of Ram, 128gb internal storage, Earphone Jack avaia…</TD>
                        <TD>N 250,000</TD>
                        <TD><Button pur
                            clicked={routeChange}
                        >Purchase</Button></TD>
                    </TR>
                    <TR>
                        <TD img><img src="/Mobile.svg" alt="phone" className='devices' /></TD>
                        <TD name>Samsung Galaxy Note 8</TD>
                        <TD desc>6gb of Ram, 128gb internal storage, Earphone Jack avaia…</TD>
                        <TD amt>N 250,000</TD>
                        <TD><Button pur
                            clicked={routeChange}
                        >Purchase</Button></TD>
                    </TR>
                </TableBody>
            </Table>
        </TableCont>
    )
};

export default Tabler;