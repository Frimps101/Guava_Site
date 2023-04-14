import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Guava.css";
import Stack from "../images/stack.png";

const Guava = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Navbar />
      <div className="section">
        <div className="head">
          <h2>Welcome to the Guava App Wallet 🤗</h2>
          <p>
            The Guava Wallet app is a self-custody wallet that’s your portal to
            web3, where you can swap crypto with no network fees on Polygon.
            Guava Wallet gives you full control over your funds on the Polygon
            and Ethereum networks, which means you hold and maintain the private
            key to your assets. Stay tuned, because we’ll be adding more
            networks to guava Wallet in the future, too.
          </p>
        </div>
        <div className="steps">
          <div className="steps--item">
            <h2>How do I create a New Wallet?</h2>
            <p>Create a New Wallet</p>
            <ul className="new-wallet">
              <li><i class="fa-solid fa-arrows-up-down-left-right ic"></i> Select Create a new wallet</li>
              <li><i class="fa-solid fa-arrows-up-down-left-right ic"></i> Select Use Face ID/Touch ID or Create a custom PIN</li>
              <li>
              <i class="fa-solid fa-arrows-up-down-left-right ic"></i>
                Select Back it up to iCloud, Back it up manually, or Skip to
                back it up later
              </li>
              <li><i class="fa-solid fa-arrows-up-down-left-right ic"></i>Select Continue or Skip to claim your reward later</li>
              <li>
                <i class="fa-solid fa-arrows-up-down-left-right ic"></i>
                Fund your wallet through guava Crypto or from another wallet or
                exchange
              </li>
              <li><i class="fa-solid fa-arrows-up-down-left-right ic"></i>Select Open wallet</li>
              <li>
                <span className="warning">
                  NB: We strongly recommend backing up your wallet because it's the
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
              If you already have an Ethereum or Polygon wallet, you can import
              it to guava Wallet by using your existing wallet’s secret recovery
              phrase.
            </p>
            <ul className="existing-wallet">
              <li><i class="fa-solid fa-arrows-to-dot ic"></i>Select Import your existing wallet</li>
              <li>
              <i class="fa-solid fa-arrows-to-dot ic"></i>You can either copy and paste, or manually enter your secret
                recovery phrase
              </li>
              <li><i class="fa-solid fa-arrows-to-dot ic"></i>Select Import</li>
              <li><i class="fa-solid fa-arrows-to-dot ic"></i>Select Use Face/Touch ID or Create a custom PIN</li>
              <li>
              <i class="fa-solid fa-arrows-to-dot ic"></i>Select Back it up to iCloud, Back it up manually, or Skip to
                back it up later
              </li>
              <li><i class="fa-solid fa-arrows-to-dot ic"></i>Select Continue or Skip to claim your reward later</li>
              <li>
              <i class="fa-solid fa-arrows-to-dot ic"></i>Fund your wallet through guava Wallet or from another wallet or
                exchange
              </li>
              <li><i class="fa-solid fa-arrows-to-dot ic"></i>Select Open wallet</li>
            </ul>
          </div>

          <div className="steps--item">
            <h2>Recover your wallet</h2>
            <p>
              If you backed up a wallet to your iCloud in the past, you can
              recover it.
            </p>
            <ul className="recover-wallet">
              <li><i class="fa-solid fa-arrow-right-from-bracket ic"></i>Select Recover your wallet from iCloud</li>
              <li><i class="fa-solid fa-arrow-right-from-bracket ic"></i>Enter the password to unlock your backup</li>
              <li><i class="fa-solid fa-arrow-right-from-bracket ic"></i>Select Recover wallet</li>
              <li><i class="fa-solid fa-arrow-right-from-bracket ic"></i>Select Use Face/Touch ID or Create a custom PIN</li>
              <li><i class="fa-solid fa-arrow-right-from-bracket ic"></i>Select Continue</li>
            </ul>
          </div>
        </div>

        <div className="disclosure">
          <div>
            <h2>Fees and disclosures</h2>
            <img src={Stack} alt="stack of money"/>
          </div>
          <p className="disclosure-item">
            Guava app currently does not charge service fees on token swaps.
            Fees are subject to change.
            Network fees, or gas fees, are blockchain transaction processing
            fees. These required fees are submitted to the network along with
            your transaction. The fee fluctuates based on the volume of
            transactions, confirmation speed, and transaction size for that
            network. Network fees may apply for token approvals, transfers to an
            external wallet, and interacting with dapps. guava Wallet doesn’t
            collect any part of the network fee.
          </p>
        </div>

        <div className="protection">
          <div className="protection-header">
            <h2>How do I Protect my wallet</h2>
            { isOpen? <i class="fa-solid fa-lock-open protection-icon"></i>:<i class="fa-solid fa-lock protection-icon"></i>}
          </div>
          <div className="protection-text">
            To secure your wallet, you need to set up either Face/Touch ID or a
            custom PIN, which you’ll use to authenticate every time you open the
            guava Wallet app. We recommend Face/Touch ID as the most secure way
            to protect your wallet because your face and fingerprints are
            unique. If you want to switch between Face/Touch ID or a PIN, you
            can change your security settings any time in Backups & security.
          </div>
          <ul>
            <li className="protection-item">
              <i class="fa-solid fa-check-double ic"></i>
              Set up Face/Touch ID When prompted during setup, tap OK to allow
              guava Wallet to use Face/Touch ID.
            </li>
            <li className="protection-item">
              <i class="fa-solid fa-check-double ic"></i>
              Custom PIN When prompted during setup, enter a 6-digit PIN and then
              confirm the PIN a second time. Remember to never share this number
              with anyone.
            </li>
            <li className="protection-item">
              <i class="fa-solid fa-check-double ic"></i>
              Secret recovery phrase A secret recovery phrase, also known as a
              seed phrase, is a series of words generated by your wallet that
              allows you access to your wallet and crypto.
            </li>
          </ul>
          
          <div className="protection-item">
            <span className="warning">
              NB: It’s important to keep your secret recovery phrase stored in a
              safe place and never share it with anyone. We don’t have access to
              this phrase, so we can’t help you recover it if you forget it. And
              we’ll never ask you to input your recovery phrase anywhere except
              if you’re trying to recover your wallet in the guava Wallet app.
            </span>
          </div>
        </div>

        <div className="charges">
          <div className="charges-deposits">
            <h2 className="charges-deposits__title">Deposits</h2>
            <p className="charges-deposits__text">
              Guava does not charge fees to deposit money into your spending or
              brokerage account, regardless of the type of account you're
              transferring from.
            </p>
          </div>

          <div className="charges-withdrawals">
            <h2 className="charges-withdrawals__title">Withdrawals</h2>
            <p>
              When withdrawing money from your spending or brokerage account, it
              depends on what type of account you’re transferring money to:
            </p>
            <ul className="withdrawals-sections">
              <li className="withdrawals-sections__left">
                <h3>External debit card account</h3>
                <p>
                  Withdrawals have a 1.5% fee based on the amount being
                  transferred out. You’ll see the calculated fee when you
                  initiate the withdrawal, so you’ll know the amount up front.
                </p>

              </li>
              <li className="withdrawals-sections__right">
               <h3>Bank account</h3>
                <p>No fee for withdrawals</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="invest">
          <h2 className="invest-title">What do I have through invest today?</h2>
          <p className="invest-text">
            invest is offered through your brokerage account, and you have
            access to the following features.
          </p>
          <ul>
            <li><i class="fa-solid fa-arrows-turn-right ic"></i>Interest on uninvested brokerage cash held in the account</li>
            <li><i class="fa-solid fa-arrows-turn-right ic"></i>FDIC Insurance for up to GHS1M </li>
            <li>
            <i class="fa-solid fa-arrows-turn-right ic"></i>
              Routing and account number that you can use for direct deposit
            </li>
            <li><i class="fa-solid fa-arrows-turn-right ic"></i>Debit card</li>
            <li><i class="fa-solid fa-arrows-turn-right ic"></i>Fee-free ATMs</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Guava;
