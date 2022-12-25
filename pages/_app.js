import "../styles/globals.css"
import { useState } from "react"
import react from "react"
import { ethers } from "ethers"
import NavBar from "../components/navbar"
import SideBar from "../components/sidebar"

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
    <div className="relative sm:-8 p-4 bg-[#1313a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <SideBar />
      </div>
      <div className="flex-1 max sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Component {...pageProps} />
        <NavBar web3handler={web3handler} account={account} />
      </div>
    </div>
  )
}

export default MyApp
