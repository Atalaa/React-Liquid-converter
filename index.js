import React, { useReducer } from 'react';
import { render } from 'react-dom';

//Utilities
function literToGallon(liter) {
  return liter * 0.264172;
}

function literToPint(liter) {
  return liter * 2.113376;
}

function gallonToLiter(gallon) {
  return gallon / 0.264172;
}

function gallonToPint(gallon) {
  return gallon * 8;
}

function pintToLiter(pint) {
  return pint / 2.113376;
}
function pintToGallon(pint) {
  return pint / 8;
}

//State object
const initialState = {
  liter: 0,
  pint: 0,
  gallon: 0,
};

//Reducer
function reducer(state, action) {
  switch (action.type) {
    case 'changed_liter':
      return {
        ...state,
        liter: action.liter,
        pint: action.pint,
        gallon: action.gallon,
      };
    case 'changed_pint':
      return {
        ...state,
        liter: action.liter,
        pint: action.pint,
        gallon: action.gallon,
      };
    case 'changed_gallon':
      return {
        ...state,
        liter: action.liter,
        pint: action.pint,
        gallon: action.gallon,
      };
  }
}

//Parent
function App() {
  const [initialVal, dispatch] = useReducer(reducer, initialState);

  function handleLiterChange(e) {
    const newAmount = e.target.value;
    dispatch({
      type: 'changed_liter',
      liter: newAmount,
      pint: literToPint(newAmount),
      gallon: literToGallon(newAmount),
    });
  }
  function handlePintChange(e) {
    const newAmount = e.target.value;
    dispatch({
      type: 'changed_pint',
      pint: newAmount,
      liter: pintToLiter(newAmount),
      gallon: pintToGallon(newAmount),
    });
  }
  function handleGallonChange(e) {
    const newAmount = e.target.value;
    dispatch({
      type: 'changed_gallon',
      gallon: newAmount,
      liter: gallonToLiter(newAmount),
      pint: gallonToPint(newAmount),
    });
  }

  return (
    <>
      <LiquidInput
        unitName={'Liter'}
        unit={initialVal.liter}
        handleInputChange={handleLiterChange}
      />
      <LiquidInput
        unitName={'Pint'}
        unit={initialVal.pint}
        handleInputChange={handlePintChange}
      />
      <LiquidInput
        unitName={'Gallon'}
        unit={initialVal.gallon}
        handleInputChange={handleGallonChange}
      />
    </>
  );
}

//Child
function LiquidInput(props) {
  return (
    <fieldset>
      <legend>{props.unitName}</legend>
      <br />
      <input value={props.unit} onChange={props.handleInputChange} />
    </fieldset>
  );
}

render(<App />, document.getElementById('root'));
