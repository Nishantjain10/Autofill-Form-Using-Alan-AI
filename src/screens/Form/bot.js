import { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import './bot.css'

function Bot() {
    const [name, setName] = useState('');
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('');
  const ALAN_Key = `96bd99c3882a0fa848348b1c9fd575412e956eca572e1d8b807a3e2338fdd0dc/stage`
  useEffect(() => {
    alanBtn({
        key: ALAN_Key,
        onCommand: (commandData) => {
          if(commandData.command === 'name'){
            setName(commandData.data)
          }
          if(commandData.command === 'phone'){
            setPhone(commandData.data)
          }
          if(commandData.command === 'address'){
            setAddress(commandData.data)
          }
        }
    });
  }, []);
  return (
    <div className="division"> 
      <div className='form-fields'>
        <div className="head">
        <h2>Welcome</h2>
        <h3>Fill Out Your Details!</h3>
        </div>
      <input
        placeholder='Name'
        name='name'
        onChange={(event) => setName(event.target.value)}
        value={name}
        type='text'
      />
      <input
        placeholder='Phone'
        name='phone'
        onChange={(event) => setPhone(event.target.value)}
        value={phone}
        type='text'
      />
      <input
        placeholder='Address'
        name='address'
        onChange={(event) => setAddress(event.target.value)}
        value={address}
        type='text'
      />

      <button className='submit-btn'>Submit</button>
    </div>
      <div className='Command-section'>
        <ul className='list-option-points'>
          <h1 className='list-heading'>Hey,Your Guide Here!</h1>
          <li className='list-points-item'>Click on the Microphone Icon at the Bottom Right corner to Start.</li>
          <li className='list-points-item'>Try Saying, My name is 'John'.</li>
          <li className='list-points-item'>Try Saying, My Phone Number is '91055 XXX25'.</li>
          <li className='list-points-item'>Try Saying, I live at/in 'India'.</li>
          <li className='list-points-item'>Just use this commands, The form input will be directly filled.</li>
          <p><i><br/>Thanks for Visiting</i></p>
        </ul>
      </div>
    </div>

  );
}

export default Bot;