# DeVin Solana Project
## Prequesites

- Install Rust: https://www.rust-lang.org/tools/install
- Install Solana: https://docs.solana.com/cli/install-solana-cli-tools
- Install Anchor: https://project-serum.github.io/anchor/getting-started/installation.html#install-anchor
- Install NodeJs: https://nodejs.org/en/
- Install `npm, yarn, pnpm`
- Start project: `anchor init de-sol`

## Project structure of Anchor
   The `.anchor` folder: It includes the most recent **program logs** and a **local ledger** that is used for testing
-   The `app` folder: An empty folder that you can use to hold **your frontend** if you use a monorepo
-   The `programs` folder: Contains **your programs**. It can contain multiple but initially only contains a program with **the same name** as `<new-workspace-name>`. This program already contains a `lib.rs` file with some sample code.
-   The `tests` folder: Contains **your E2E tests**. It will already include a file that tests the sample code in the `programs/<new-workspace-name>`.
-   The `migrations` folder: You can save **your deploy and migration scripts** for your programs.
-   The `Anchor.toml` file: Configures **workspace wide settings** for your programs. Initially, it configures
    -   The **addresses of your programs** on **localnet** (`[programs.localnet]`)
    -   A **registry your program** can be pushed to (`[registry]`)
    -   A **provider** which can be used in your tests (`[provider]`)
    -   **Executed scripts** of Anchor (`[scripts]`). The `test` script is run when running `anchor test`. Run your own scripts with `anchor run <script_name>`.

## Development tools
- Solana dashboard: https://solanabeach.io/ - to track Solana chain infrastructure
- Solana explorer: https://explorer.solana.com/?cluster=testnet - to track your address's state (balance, transaction...)
- Solana faucet: https://solfaucet.com/ - to provide SOL token for your address
- ERC20 faucet: https://faucetpay.io/page/faucet-list/10/1/0

## Refs
- https://solanacookbook.com/ - Solana concept & how to
- https://book.anchor-lang.com/ - Anchor Rust
- https://github.com/ilmoi/awesome-solana-nfts - Awesome Solanas
- https://drive.google.com/drive/folders/1FnB_hy5kg5X2SDMw7PtXgYPv6Ncwk4X9?usp=sharing - Sentre Academy

## UML
<img src="./assets/UML.png" style="border-radius: 5px"/>
