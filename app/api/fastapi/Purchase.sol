// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Purchase {
    struct Transaction {
        string itemName;
        uint256 itemPrice;
        uint256 purchaseTime;
        address userAddress;
        string firstName;
        string lastName;
        string email;
    }

    mapping(uint256 => Transaction) public purchases;
    uint256 public purchaseCount;

    event PurchaseMade(uint256 indexed purchaseId, string itemName, uint256 itemPrice, uint256 purchaseTime, address userAddress, string firstName, string lastName, string email);

    constructor() {
        purchaseCount = 0;
    }

    function makePurchase(
        string memory _itemName,
        uint256 _itemPrice,
        string memory _firstName,
        string memory _lastName,
        string memory _email
    ) public {
        purchaseCount++;
        purchases[purchaseCount] = Transaction(_itemName, _itemPrice, block.timestamp, msg.sender, _firstName, _lastName, _email);
        emit PurchaseMade(purchaseCount, _itemName, _itemPrice, block.timestamp, msg.sender, _firstName, _lastName, _email);
    }

    // Function to retrieve purchase information by purchase ID
    function getPurchase(uint256 _purchaseId) public view returns (
        string memory itemName,
        uint256 itemPrice,
        uint256 purchaseTime,
        address userAdress,
        string memory firstName,
        string memory lastName,
        string memory email
    ) {
        require(_purchaseId > 0 && _purchaseId <= purchaseCount, "Invalid purchase ID");
        Transaction memory purchase = purchases[_purchaseId];
        return (purchase.itemName, purchase.itemPrice, purchase.purchaseTime, purchase.userAddress, purchase.firstName, purchase.lastName, purchase.email);
    }
    function getPurchaseCount() public view returns (uint256) {
        return purchaseCount;
    }
}
