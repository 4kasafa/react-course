import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { InputBox, Navbar, Footer } from './components/index.js'
import { ArrowDownUp } from 'lucide-react';
import { formatCurrency } from '../utils/formatter.js';

function App() {
  const [amount, setAmount] = useState(1)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('idr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  }

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundImage: `url(/currency-bg.jpg)`}}
    >
      <Navbar />
      <div className='w-full p-5 md:p-0 mt-0 md:mt-40'>
        <div className='w-full max-w-md mx-auto border border-gray-50 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}>
            <div className='w-full mb-1'>
              <InputBox
                label='from'
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={from}
              />
            </div>
            <div className='relative w-full h-0.5'>
              <button
                type='button'
                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-full bg-blue-600 text-white px-2 py-2 transition-transform duration-300 active:rotate-180'
                onClick={swap}
              >
                <ArrowDownUp size={16} />
              </button>
            </div>
            <div className='w-full mb-2'>
              <InputBox
                label='to'
                amount={formatCurrency(convertedAmount, to)}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to}
                amountDisabled={true}
              />
            </div>
            <button
              type='submit'
              className='w-full bg-blue-600 hover:bg-blue-800 active:scale-95 transition-all duration-150 shadow-md active:shadow-sm text-white px-4 py-3 rounded-lg'
            >Convert <span className='font-semibold'>{from.toUpperCase()}</span> to <span className='font-semibold'>{to.toUpperCase()}</span></button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
