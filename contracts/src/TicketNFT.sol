// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TicketNFT is ERC721URIStorage, Ownable {
    uint256 private _ticketIdCounter;

    event TicketMinted(address indexed owner, uint256 indexed ticketId, string tokenURI);

    constructor() ERC721("EventTicket", "ETIX") Ownable(msg.sender) {
        _ticketIdCounter = 0;
    }

    function mintTicket(address to, string memory tokenURI) external onlyOwner returns (uint256) {
        uint256 ticketId = _ticketIdCounter;
        _safeMint(to, ticketId);
        _setTokenURI(ticketId, tokenURI);
        
        emit TicketMinted(to, ticketId, tokenURI);
        
        _ticketIdCounter++;
        return ticketId;
    }

    function totalSupply() external view returns (uint256) {
        return _ticketIdCounter;
    }
}
