// SPDX-License-Identifier: MIT
//Maybe change solidity version later!
pragma solidity ^0.8.18;

import {ERC721, ERC721Enumerable} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract BlueNFT is ERC721Enumerable {
    // Initialize the ERC-721 contract
    constructor() ERC721("Blue", "BLU") {}

    // Have a public mint function anyone can call to get an NFT
    function mint() public {
        _safeMint(msg.sender, totalSupply());
    }
}