// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "forge-std/Script.sol";
import "../src/BlueNFT.sol";
import "../src/HoaxNFTMarketplace.sol";
import "../src/BlueDAO.sol";

contract DeployBlue is Script {
    function run() external {
        vm.startBroadcast();

        // Deploy the NFT Contract
        BlueNFT nftContract = new BlueNFT();
        console.log("blueNFT deployed to:", address(nftContract));

        // Deploy the Hoax Marketplace Contract
        HoaxNFTMarketplace hoaxNFTMarketplaceContract = new HoaxNFTMarketplace();
        console.log("HoaxNFTMarketplace deployed to:", address(hoaxNFTMarketplaceContract));

        // Deploy the DAO Contract with initial funding of 1 ETH
        BlueDAO daoContract = new BlueDAO(address(hoaxNFTMarketplaceContract), address(nftContract), tx.origin);
        payable(address(daoContract)).transfer(1 ether);
        console.log("blueDAO deployed to:", address(daoContract));

        vm.stopBroadcast();
    }
}
