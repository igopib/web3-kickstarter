import "../styles/globals.css"
import NavBar from "../components/navbar"
import { useState } from "react"
import react from "react"
import { ethers } from "ethers"

function MyApp({ Component, pageProps }) {
  const [account, setAccount] = useState(null)

  // Metamask connect
  const web3handler = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    })
    // Sets the account connect to the first account that connects
    setAccount(accounts[0])
    // Gets provider from metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    // Get signer
    const signer = provider.getSigner()
  }

  return (
    <div>
      <Component {...pageProps} />
      <NavBar web3handler={web3handler} account={account} />
    </div>
  )
}

export default MyApp
