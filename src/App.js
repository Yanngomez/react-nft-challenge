import './App.css'
import Header from './components/Header'
import { useState, useEffect} from 'react'
import axios from 'axios'
import Punklist from './components/Punklist'
import Main from './components/Main'

// Buiding By Yann GOMEZ Tu Connais Pas Encore
function App() {
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)

  useEffect(() =>  {
    const getMyNfts = async() => {
      const openseaData = await axios.get(
        'https://testnets-api.opensea.io/assets?asset_contract_address=0x75E1919A2e7628BE44e47347D8EE6Ca4efe54152&order_direction=asc'
      )
      console.log(openseaData.data.assets)
      setPunkListData(openseaData.data.assets)
    }

    getMyNfts()
  }, [])

  return (
    <div className='app'>
      <Header/>
      {punkListData.length > 0 && (
        <>
          < Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <Punklist
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}
      
     </div>
  )
}

export default App;
