const input = document.getElementById('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = new Set (['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit']);
// Using the set add method for 'Strawberry' 'Tamarillo' 'Tamarind' 'Yuzu'
fruit.add("Strawberry")
fruit.add("Tamarillo")
fruit.add("Tamarind")
fruit.add("Yuzu");



// Search Feature 


	
	// TODO
	const searchBar = document.getElementById("fruit")
if(searchBar){
	searchBar.addEventListener("keyup", (e)=>{
    const inputValue = e.target.value;
	const results = search(inputValue);
	showSuggestions(results, inputValue)
	})
}


// Suggestion Box

// TODO
function showSuggestions(...args: [results: any, inputVal: any]) {
	suggestions.innerHTML = "";
	if (inputVal) {
		results.forEach(element => {
			let newLi = document.createElement('li');
			newLi.textContent = element;
			suggestions.appendChild(newLi);
		});
	}

}

	// response from brower after selecting suggestion
function useSuggestion(e) {
	function useSuggestion(e) {
		searchBar.value = e.target.textContent;
		suggestions.innerHTML = "";
	}
	// TODO
}


input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);