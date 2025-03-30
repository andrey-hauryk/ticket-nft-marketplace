// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import {TicketNFT} from "../src/TicketNFT.sol";

contract DeployTicketNFT is Script {
    function setUp() public {}

    function run() public {
        vm.startBroadcast(); // Начинаем передачу транзакций
        TicketNFT ticketNFT = new TicketNFT();
        console.log("TicketNFT deployed at:", address(ticketNFT));
        vm.stopBroadcast(); // Завершаем передачу
    }
}
