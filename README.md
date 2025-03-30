# ticket-nft-marketplace
ticket-nft-marketplace

### run contract

 - run local network
    1. anvil
 - compile code
    2. forge build
 - run deploy (PRIVATE_KEY from anvil)
    3. forge script scripts/deploy.s.sol --rpc-url http://127.0.0.1:8545 --private-key <PRIVATE_KEY> --broadcast


Настройте MetaMask для работы с Anvil
Добавьте локальную сеть в MetaMask:

Откройте MetaMask → Networks → Add Network.

Укажите:

Network Name: Localhost 8545

RPC URL: http://localhost:8545

Chain ID: 31337 (стандартный ID для Anvil).

Currency (опционально): ETH.

Импортируйте тестовый аккаунт:

При запуске Anvil выводятся приватные ключи тестовых аккаунтов (например, 0xac0974...).

В MetaMask: Accounts → Import Account → вставьте приватный ключ.
 

