export function addClickEvent(dom, fn){
	if(dom && typeof fn === 'function'){
		dom.addEventListener('click', fn);
	}
}