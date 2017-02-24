import './index.css';

import 
	{CurrencyInput}
from 'common';

var c = new CurrencyInput();
c.do();

if (!PRODUCTION) {
	console.log('NOT PRODUCTION');
}