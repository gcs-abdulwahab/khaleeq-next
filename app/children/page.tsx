import React from 'react'


const SymbolBlock = ({symbol , text}) => {
    return (
        <div>SymbolBlock :: Symbol: {symbol} Text: {text}</div>
    )
}

const SymbolParent = ({children}) => {
    return (
        <div>SymbolParent :: {children}</div>
    )
}


const page = () => {
  return (
    <div>
      
    
          <SymbolParent>
              <SymbolBlock symbol="Arrow" text="25" />
              <SymbolBlock symbol="Arrow" text="25" />
      </SymbolParent>
    </div>
  )
}

export default page