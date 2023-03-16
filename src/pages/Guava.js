import React from "react";

const Guava = () => {
  return (
    <div>
      <div className="head">
        <h2>Welcome to the Guava App Wallet</h2>
        <div>
          The Guava Wallet app is a self-custody wallet that’s your portal to
          web3, where you can swap crypto with no network fees on Polygon. Guava
          Wallet gives you full control over your funds on the Polygon and
          Ethereum networks, which means you hold and maintain the private key
          to your assets. Stay tuned, because we’ll be adding more networks to
          guava Wallet in the future, too.
        </div>
      </div>
      <div className="steps">
        <div className="steps--item">
          <h2>How do I create a New Wallet</h2>
          <p>Create a New Wallet</p>
          <ul>
            <li>Select Create a new wallet</li>
            <li>Select Use Face ID/Touch ID or Create a custom PIN</li>
            <li>
              Select Back it up to iCloud, Back it up manually, or Skip to back
              it up later
            </li>
            <li>Select Continue or Skip to claim your reward later</li>
            <li>
              Fund your wallet through guava Crypto or from another wallet or
              exchange
            </li>
            <li>Select Open wallet</li>
            <li>
              <span className="warning">
                We strongly recommend backing up your wallet because it's the
                only way you can recover your wallet and crypto if you lose or
                reset your device. If you don’t back up your wallet when you
                create it, you can do it later in Backups & security. For
                step-by-step instructions, see back up your wallet.
              </span>
            </li>
          </ul>
        </div>

        <div className="steps--item">
          <h2>Import your existing wallet</h2>
          <p>
            If you already have an Ethereum or Polygon wallet, you can import it
            to guava Wallet by using your existing wallet’s secret recovery
            phrase.
          </p>
          <ul>
            <li>Select Import your existing wallet</li>
            <li>
              You can either copy and paste, or manually enter your secret
              recovery phrase
            </li>
            <li>Select Import</li>
            <li>Select Use Face/Touch ID or Create a custom PIN</li>
            <li>
              Select Back it up to iCloud, Back it up manually, or Skip to back
              it up later
            </li>
            <li>Select Continue or Skip to claim your reward later</li>
            <li>
              Fund your wallet through guava Wallet or from another wallet or
              exchange
            </li>
            <li>Select Open wallet</li>
          </ul>
        </div>

        <div className="steps--item">
          <h2>Recover your wallet</h2>
          <p>
            If you backed up a wallet to your iCloud in the past, you can
            recover it.
          </p>
          <ul>
            <li>Select Recover your wallet from iCloud</li>
            <li>Enter the password to unlock your backup</li>
            <li>Select Recover wallet</li>
            <li>Select Use Face/Touch ID or Create a custom PIN</li>
            <li>Select Continue</li>
          </ul>
        </div>
      </div>

      <div className="disclosure">
        <h2>Fees and disclosures</h2>
        <div className="disclosure-item">
          Guava app currently does not charge service fees on token swaps. Fees
          are subject to change.
        </div>
        <div className="disclosure-item">
          Network fees, or gas fees, are blockchain transaction processing fees.
          These required fees are submitted to the network along with your
          transaction. The fee fluctuates based on the volume of transactions,
          confirmation speed, and transaction size for that network. Network
          fees may apply for token approvals, transfers to an external wallet,
          and interacting with dapps. guava Wallet doesn’t collect any part of
          the network fee.
        </div>
      </div>

      <div className="protection">
        <h2>How do I Protect my wallet</h2>
        <div className="protection-item">
          To secure your wallet, you need to set up either Face/Touch ID or a
          custom PIN, which you’ll use to authenticate every time you open the
          guava Wallet app. We recommend Face/Touch ID as the most secure way to
          protect your wallet because your face and fingerprints are unique. If
          you want to switch between Face/Touch ID or a PIN, you can change your
          security settings any time in Backups & security.
        </div>
        <div className="protection-item">
          Set up Face/Touch ID When prompted during setup, tap OK to allow guava
          Wallet to use Face/Touch ID.
        </div>
        <div className="protection-item">
          Custom PIN When prompted during setup, enter a 6-digit PIN and then
          confirm the PIN a second time. Remember to never share this number
          with anyone.
        </div>
        <div className="protection-item">
          Secret recovery phrase A secret recovery phrase, also known as a seed
          phrase, is a series of words generated by your wallet that allows you
          access to your wallet and crypto.
        </div>
        <div className="protection-item">
          <span className="warning">
            It’s important to keep your secret recovery phrase stored in a safe
            place and never share it with anyone. We don’t have access to this
            phrase, so we can’t help you recover it if you forget it. And we’ll
            never ask you to input your recovery phrase anywhere except if
            you’re trying to recover your wallet in the guava Wallet app.
          </span>
        </div>
      </div>

      <div className="charges">
        <div className="charges-item">
          <h2>Deposits</h2>
          <p>
            Guava does not charge fees to deposit money into your spending or
            brokerage account, regardless of the type of account you're
            transferring from.
          </p>
        </div>

        <div className="charges-item">
          <h2>Withdrawals</h2>
          <p>
            When withdrawing money from your spending or brokerage account, it
            depends on what type of account you’re transferring money to:
          </p>
          <ul>
            <li>
              <h3>Bank account</h3>
              <p>No fee for withdrawals</p>
            </li>
            <li>
              <h3>External debit card account</h3>
              <p>
                Withdrawals have a 1.5% fee based on the amount being
                transferred out. You’ll see the calculated fee when you initiate
                the withdrawal, so you’ll know the amount up front.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="invest">
        <h2>What do I have through invest today?</h2>
        <p>
          invest is offered through your brokerage account, and you have access
          to the following features.
        </p>
        <ul>
          <li>Interest on uninvested brokerage cash held in the account</li>
          <li>FDIC Insurance for up to GHS1M </li>
          <li>
            Routing and account number that you can use for direct deposit
          </li>
          <li>Debit card</li>
          <li>Fee-free ATMs</li>
        </ul>
      </div>
    </div>
  );
};

export default Guava;