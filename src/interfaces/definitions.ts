export default {
    types: {
        H256Le: "H256",
        DOT: "u128",
        PolkaBTC: "Balance",
        BTCBalance: "u128",
        StatusCode: { _enum: ["Running", "Error", "Shutdown"] },
        Address: "AccountId",
        LookupSource: "AccountId",
        
        // Silence the warnings:
        Status: "StatusCode",
        ErrorCode: { _enum: ["None", "NoDataBTCRelay", "InvalidBTCRelay", "OracleOffline", "Liquidation"] },
        RawBlockHeader: { 0: "[u8; 80]" },
        RichBlockHeader: {
            block_hash: "H256Le",
            block_header: "BlockHeader",
            block_height: "u32",
            chain_ref: "u32",
        },
        BlockHeader: {
            merkle_root: "H256Le",
            target: "U256",
            timestamp: "u32",
            version: "i32",
            hash_prev_block: "H256Le",
            nonce: "u32",
        },
        BlockChain: {
            chain_id: "u32",
            start_height: "u32",
            max_height: "u32",
            no_data: "BTreeSet<u32>",
            invalid: "BTreeSet<u32>",
        },
        Issue: {
            vault: "AccountId",
            opentime: "BlockNumber",
            griefing_collateral: "DOT",
            amount: "PolkaBTC",
            requester: "AccountId",
            btc_address: "H160",
            completed: "bool",
        },
        Vault: {
            id: "AccountId",
            to_be_issued_tokens: "PolkaBTC",
            issued_tokens: "PolkaBTC",
            to_be_redeemed_tokens: "PolkaBTC",
            btc_address: "H160",
            banned_until: "Option<BlockNumber>",
        },
        Redeem: {
            vault: "AccountId",
            opentime: "BlockNumber",
            amount_polka_btc: "PolkaBTC",
            amount_btc: "PolkaBTC",
            amount_dot: "DOT",
            premium_dot: "DOT",
            redeemer: "AccountId",
            btc_address: "H160",
        },
        Replace: {
            old_vault: "AccountId",
            open_time: "BlockNumber",
            amount: "PolkaBTC",
            griefing_collateral: "DOT",
            new_vault: "Option<AccountId>",
            collateral: "DOT",
            accept_time: "Option<BlockNumber>",
            btc_address: "H160",
        },
        ActiveStakedRelayer: {
            stake: "DOT",
        },
        StatusUpdate: {
            new_status_code: "StatusCode",
            old_status_code: "StatusCode",
            add_error: "Option<ErrorCode>",
            remove_error: "Option<ErrorCode>",
            time: "BlockNumber",
            proposal_status: "ProposalStatus",
            btc_block_hash: "Option<H256Le>",
            proposer: "AccountId",
            deposit: "DOT",
            tally: "Tally<AccountId>",
        },
        ProposalStatus: { _enum: ["Pending", "Accepted", "Rejected"] },
        InactiveStakedRelayer: {
            stake: "DOT",
            status: "StakedRelayerStatus<BlockNumber>",
        },
        StakedRelayerStatus: { _enum: ["Unknown", "Idle", "Bonding(BlockNumber)"] },
    },
};