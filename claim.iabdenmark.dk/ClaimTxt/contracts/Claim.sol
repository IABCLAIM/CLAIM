pragma solidity ^0.4.11;

contract Claim {

    struct SSP {
        address public_address;
        bool approved;
    }

    mapping(address => SSP[]) whitelist;

    function publisher_add_supply_side_partner(address ssp) public {

        address publisher = msg.sender;
        
        // Does the SSP already exists?
        for(uint i = 0; i < whitelist[publisher].length; i++) {
            if(ssp == whitelist[publisher][i].public_address) {
                // Stop execution if the SSP already exists
                require(false); 
            }
        }

        whitelist[publisher].push(SSP({
            public_address: ssp,
            approved: false
        }));
    }

    function publisher_delete_supply_side_partner(address ssp) public {
        address publisher = msg.sender;
        remove(publisher, ssp);
    }

    function ssp_approve_publisher(address publisher) public {
        address ssp = msg.sender;
        for(uint i = 0; i < whitelist[publisher].length; i++) {
            if(ssp == whitelist[publisher][i].public_address) {
                whitelist[publisher][i].approved = true;
            }
        }
    }

    function ssp_delete_publisher(address publisher) public {
        address ssp = msg.sender;
        remove(publisher, ssp);
    }

    function remove(address publisher, address ssp) private {
        for(uint i = 0; i < whitelist[publisher].length; i++) {
            if(ssp == whitelist[publisher][i].public_address) {
                delete whitelist[publisher][i];
                whitelist[publisher].length--;
            }
        }
    }
}
