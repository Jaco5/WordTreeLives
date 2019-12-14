





###2nd revision###

3. Check in more depth how the results are being made into tree data
2. Paginate result trees so most relevent results arent cluttered with less relevant
1. increase # of results from doaj and see how it affects the speed.

Removed need for async await by removing the call for createTreeData to a conditionally rendered 
button. Fixed massive stack of errors in chart when typing new nodes by changing the input to the chart
to be a separate state. Still feels kind of hacky.



###first revision###

1. Create component structures and layout.
2. Review TreeData algorithm and REACT+GoogleCharts+NPM, review DOAJ.org API integration.
3. Adapt functional parts of original project to new layout.
4. Write very clear instructions. Explain utility.


MVP = non persistent functional tree diagram based article 'search engine', link to article

Definitely Want = persistence, authentication, save articles, view article texts, paginate and move through groups of results if async is still a problem

Nice to Have = Highlight in saved docs, article comparison (side by side?)

- The user inputs a search string (look at DOAJ SE docs)
- Doaj returns JSON object of articles
- algorithm checks if articles.article.abstract == true, if true it pushes that string  into an array
- GoogleCharts uses that array to create the tree diagram

- the user must set a value for node, node is the word that will be used as the center of the diagram, this must be one word
- clicking on other words sets the node to that word
- entering an exact phrase from the tree into the 'locate' input will retrieve the full article details


