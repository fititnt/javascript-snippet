'use strict';

/**
 * Oculta elementos usando a propriedade display none de CSS
 * 
 * @example
 * @code
 * //<div id="campoa">Ola</div>
 * //<div id="campob">Mundo!</div>
 * var array = ['campoa','campob'];
 * setDysplayNone(array);
 * @endcode
 * 
 * Dependence: Mootool Array
 *
 * @param array elements Array de elementos
 * @return void Esconde os elementos
 */
function setDysplayNone(elements){
	Array.each(elements, function (value, key) {
		//console.log('setDysplayNone: escondido elemento ',value);
		document.id(value).style.display = 'none';
	});
}

/**
 * @todo documentar ou descartar (fititnt, 2012-02-12 21:31)
 * 
 * Dependence: Mootool Array
 */
function setDysplay(elements, evalue) {
	Array.each(elements, function(value, key) {
		document.id(value).style.display = evalue;
	//console.log('setDysplayNone: escondido elemento ',value);
	});
}

/**
 * Oculta elementos usando a propriedade display none de CSS
 * 
 * @example
 * @code
 * //<div id="campoa">Ola</div>
 * //<div id="campob">Mundo!</div>
 * var array = ['campoa','campob'];
 * setDysplayNone(array);
 * @endcode
 * 
 * Dependence: Mootool Array
 *
 * @param array elements Array de elementos
 * @param string prefix
 * @param string sufix
 * @return void Esconde os elementos
 */
function setPreSuFix(elements, prefix, sufix) {
	var newElements = [];
	Array.each(elements, function(value, key) {
		newElements.push(prefix + value + sufix);
	});
	//console.log('setPreSuFix: convertido de para', elements, newElements);
	return newElements;
}

/**
 * @todo documentar ou descartar (fititnt, 2012-02-12 21:31)
 * 
 * Dependence: Mootool Array
 * 
 */
function formDisableFields(elements) {
	Array.each(elements, function(value, key) {
		document.id(value).disabled = true;
	});
}
/**
 * Seta como disabled todos os elementos input,select,textarea
 * 
 * Dependence: Mootool Array
 */
function formDisableFields2() {
	$$('input,select,textarea').each(function(el) {
		el.disabled = true;
	});
}

/**  aplicar esses conceitos mais tarde **/
//loop de Array puro em javascript
var meuArray = [];
meuArray = ["item 1", "item 2", "item 3"];
for (i=0; i<meuArray.length; i++) {
	meuArray[i] = "...";
}