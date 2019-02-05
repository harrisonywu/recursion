// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
	var nodeList = [];
	var checkNodes = function(elem) {
		if (elem.classList && elem.classList.contains(className)){
			nodeList.push(elem);
		}
		if (elem.childNodes) {
			elem.childNodes.forEach(function(innerElem){
				checkNodes(innerElem);
			});
		}
	}
	checkNodes(document.body);	
	return nodeList;
};


