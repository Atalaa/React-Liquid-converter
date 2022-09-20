import React, { useState } from 'react';
import { render } from 'react-dom';

/*
"Converting Liquid State" Exercise 

Objectives
1) We need 3 input fields. When finished you should have 3 fields with the "Liter", "Pint", and "Gallon" labels (one each).

2) Currently you cannot enter amounts in the inputs fields. Fix that.

3) Ensure that changing one input updates the others with the correct conversion amount.

4) Abbreviate the decimals down to 2. 
*/

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

//Parent
function App() {
  const unitTable = {
    l: 'Liter',
    p: 'Pint',
    g: 'Gallon',
  };

  const [liter, setLiter] = useState(0);
  const [pint, setPint] = useState(0);
  const [gallon, setGallon] = useState(0);

  function handleLiterChange(e) {
    const newAmount = e.target.value;
    setLiter(newAmount);
    setPint(literToPint(newAmount));
    setGallon(literToGallon(newAmount));
  }
  function handlePintChange(e) {
    const newAmount = e.target.value;
    setPint(newAmount);
    setLiter(pintToLiter(newAmount));
    setGallon(pintToGallon(newAmount));
  }
  function handleGallonChange(e) {
    const newAmount = e.target.value;
    setGallon(newAmount);
    setLiter(gallonToLiter(newAmount));
    setPint(gallonToPint(newAmount));
  }
  return (
    <>
      <LiquidInput
        unitName={unitTable.l}
        unit={liter}
        handleInputChange={handleLiterChange}
      />
      <LiquidInput
        unitName={unitTable.p}
        unit={pint}
        handleInputChange={handlePintChange}
      />
      <LiquidInput
        unitName={unitTable.g}
        unit={gallon}
        handleInputChange={handleGallonChange}
      />
    </>
  );
}

render(<App />, document.getElementById('root'));
