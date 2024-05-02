// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/draft-ERC20Permit.sol";

contract NFTMiniUtopiaToken is ERC20, ERC20Permit {
    constructor()
        ERC20("NFT Mini Utopia Token", "NMUT")
        ERC20Permit("NFT Mini Utopia Token")
    {
        _mint(msg.sender, 100000000 * 10 ** decimals());
    }
}
