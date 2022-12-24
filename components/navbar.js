import Link from "next/link"
import react, { useState } from "react"
import { ethers } from "ethers"

export default function NavBar({ web3handler, account }) {
  return (
    <div>
      {account ? (
        <Link
          href={"https://etherscan.io/address/${account}"}
          target="_blank"
          rel="nonopener noreferrer"
          className=""
        >
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            {account.slice(0, 5) + "..." + account.slice(38, 42)}
          </button>
        </Link>
      ) : (
        <button
          onClick={web3handler}
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          connect()
        </button>
      )}
    </div>
  )
}
