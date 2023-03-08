import { useState } from 'react';
import './App.css';

function App() {
	const [value, setValue] = useState('')
	const calculate = () => {
		try {
			// eslint-disable-next-line
			setValue(eval(value))
		} catch (error) {
			setValue('Error')
		}
	}

	return (
		<div className="container">
			<form name="calc" className="calculator">
				<input type="text" id='display' className="value" readOnly value={value} />
				<span className="num clear" onClick={() => setValue('')}><i>C</i></span>
				<span className="num" onClick={() => setValue(value + '/')}><i>/</i></span>
				<span className="num" onClick={() => setValue(value + '*')}><i>*</i></span>
				<span className="num" onClick={() => setValue(value + '7')}><i>7</i></span>
				<span className="num" onClick={() => setValue(value + '8')}><i>8</i></span>
				<span className="num" onClick={() => setValue(value + '9')}><i>9</i></span>
				<span className="num" onClick={() => setValue(value + '-')}><i>-</i></span>
				<span className="num" onClick={() => setValue(value + '4')}><i>4</i></span>
				<span className="num" onClick={() => setValue(value + '5')}><i>5</i></span>
				<span className="num" onClick={() => setValue(value + '6')}><i>6</i></span>
				<span className="num plus" onClick={() => setValue(value + '+')}><i>+</i></span>
				<span className="num" onClick={() => setValue(value + '1')}><i>1</i></span>
				<span className="num" onClick={() => setValue(value + '2')}><i>2</i></span>
				<span className="num" onClick={() => setValue(value + '3')}><i>3</i></span>
				<span className="num" onClick={() => setValue(value + '0')}><i>0</i></span>
				<span className="num" onClick={() => setValue(value + '00')}><i>00</i></span>
				<span className="num" onClick={() => setValue(value + '.')}><i>.</i></span>
				<span className="num equal" onClick={calculate}><i>=</i></span>
			</form>
		</div >
	);
}

export default App;
