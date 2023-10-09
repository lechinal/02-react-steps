import { useState } from 'react';

import Button from './components/Button/Button';
import StepMessage from 'components/StepMessage/StepMessage';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Dedicate your new income to skill development 🤑',
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep(s => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep(s => s + 1);
  }

  function handleClose() {
    setIsOpen(!isOpen);
  }

  /** IMPORTANT
   * * onClick function defined inline
   * ! cateodata cand avem o logica usoara cum ar fi acest buton de open-close
   * TODO: <button className="close" onClick={()=>setIsOpen(!isOpen)}>&times;</button>
   *
   * ! updating state based on the current values of that state:
   * TODO: <button className="close" onClick={()=>setIsOpen( (is =>!is)}>&times;</buton>
   */

  return (
    <>
      <button className="close" onClick={handleClose}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>

          <StepMessage step={step}>
            {messages[step - 1]}
            <div className="buttons">
              <Button
                backgroundColor="#e7e7e7"
                textColor="#333"
                onClick={() => alert(`Lear how to ${messages[step - 1]}`)}
              >
                Lear how
              </Button>
            </div>
          </StepMessage>

          <div className="buttons">
            <Button
              backgroundColor="#7950f2"
              textColor="#fff"
              onClick={handlePrevious}
            >
              <span>👈</span>Previous
            </Button>

            <Button
              backgroundColor="#7950f2"
              textColor="#fff"
              onClick={handleNext}
            >
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
