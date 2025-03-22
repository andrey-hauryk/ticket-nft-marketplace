// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {TicketNFT} from "../src/TicketNFT.sol";


contract DeployTicketNFT {
    address public ticketNFTAddress;

    constructor() {
        ticketNFTAddress = address(new TicketNFT());
    }
}
