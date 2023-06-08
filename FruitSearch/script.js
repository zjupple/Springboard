const input = document.getElementById('#fruit');

// considering moving the css specificity from this variable
const suggestions = document.querySelector('.suggestions ul');

let fruit = new Set (['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop',]);


/* Using the advanced  array.set add method for additional fruit
elements added after the fruit set array was declared and changed
to let instead of const*/

fruit.add("Strawberry")
.add("Tamarillo")
.add("Tamarind")
.add("Yuzu")
.add("Star fruit");


/*this is where I need to consider how I will capture the users
text input and match it against what I have in the fruit set? */
function search(str) {
	let results = [];

	// TODO

	return results;
}


/*Not sure what this feature will do, is it supposed to change
what letters match the fruit set??? need help, can not see 
a comparison with the to-do or memory game */
function searchHandler(e) {
	// TODO
}


/* */
function showSuggestions(results, inputVal) {

	// TODO
}


/*After a user can see a fruit the like in a dropdown menu??? */
function useSuggestion(e) {
	// TODO
}


/*This part is connected to after a user presses a key
the searchbar autoretrieves matching words from the fruit set */
input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);