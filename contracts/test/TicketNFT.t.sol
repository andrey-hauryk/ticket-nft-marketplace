// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Test.sol";
import "../src/TicketNFT.sol";

contract TicketNFTTest is Test {
    TicketNFT ticketNFT;
    address user = address(1);

    function setUp() public {
        ticketNFT = new TicketNFT();
    }

    function testMintTicket() public {
        string memory uri = "ipfs://example";
        uint256 ticketId = ticketNFT.mintTicket(user, uri);
        assertEq(ticketNFT.ownerOf(ticketId), user);
    }
}
