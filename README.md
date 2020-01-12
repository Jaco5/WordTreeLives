 ,,..,,.,
((u,,.),))
 (u.)u,(,))
  \\ _//
   || |
  _// \_

What does this app do? I can already search doaj.org. Why is it more efficient to sort through word spaghetti?

This app uses the doaj.org search API to comb through their massive databases for articles that relate to your search term/s. It then goes through each of these results and copies the abstracts from them, then puts each individual sentence of each abstract into an array, as a string, in a separate index. It then takes this array of sentences, checks it against your node word, and displays all of the sentences that contain your node word as branches of the tree diagram.

This is more efficient because instead of inferring from keywords and titles, and then reading a full abstract to determine if its relevant, it allows you to search directly for language that you find relevant. Once it has located this language for you, within your various search results, it displays it in its various contexts as the branches of the word tree, radiating from a node word that you type.

Preceding language on the left, the node word, and then language that follows the node word.

Ideally you will find language in the tree that sounds just like what you are looking for, if so, you type that exact phrase into the article search, and it will return the details on where to find the article. 

This tool is limited to open access journals found on doaj.org, which contains close to 30,000,000 scholarly articles.



* current issue is that it is redrawing the entire page every eystroke. Maybe this is solved with lifecycle methos.