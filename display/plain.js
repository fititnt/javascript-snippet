"use strict";
/**
 * Change visibility of one element with id or array of ID of elements
 * 
 * @todo needs test (fititnt, 2012-02-19 06:01)
 * 
 * @param string/array ids: IDs to change visibility
 * @return void
 */
function toogle(ids) {
	var i, el, elements = [];
	if (typeof ids === 'string') {
		elements.push(ids);
	} else {
		elements = ids;
	}
	for (i = 0; i < elements.length; i++) {
		el = document.getElementById(elements[i]);
		el.style.display = ((el.style.display === 'none') ? '' : 'none');
	}
}
