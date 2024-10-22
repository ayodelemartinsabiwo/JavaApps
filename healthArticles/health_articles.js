// Declare a variable named xhr to create a new XMLHttpRequest object:
var xhr = new XMLHttpRequest;

//Create another variable named url to define the URL of the JSON file and fetched as follows:
var url = './health_articles.json';

//Prepare a GET request to the specified URL, which you have saved in a variable named url in asynchronous mode
/**The open method configures an XHR request with the following parameters:
'GET': Specifies the HTTP method used for the request (in this case, a GET request).
URL: Represents the URL from where you will fetch the data.
True: Indicates if the request is asynchronous (true) or synchronous (false).
In this case, it's set to true for asynchronous operation, allowing other scripts to run while the request is processed. */
xhr.open('GET', url, true);

//Inform the XMLHttpRequest object that the expected response from the server should be in JSON format.
//Set the expected response type to JSON format
xhr.responseType = 'json';

/**Handling the 'onload' event */
//Define what should happen when the data is successfully loaded
xhr.onload = function() {
    //Retrieve the articles array from the JSON response: xhr.responseType = 'json';.
    var articles = xhr.response.articles;
    //Retrieve the HTML element with the ID 'articles' where the fetched content will be displayed.
    var articlesDIV = document.getElementById('articles');

    //Iterate health data to fetch on the front page using loops;
      articles.forEach(function(article) {
      var articleDiv = document.createElement('div');
      articleDiv.classList.add('article');

      var title = document.createElement('h2');
      title.textContent = article.title;

      var description = document.createElement('p');
      description.textContent = article.description;

      var waysHeader = document.createElement('h3');
      waysHeader.textContent = 'Ways to Achieve:';

      var waysList = document.createElement('ul');
      article.ways_to_achieve.forEach(function(way) {
        var listItem = document.createElement('li');
        listItem.textContent = way;
        waysList.appendChild(listItem);
      });

      var benefitsHeader = document.createElement('h3');
      benefitsHeader.textContent = 'Benefits:';

      var benefitsList = document.createElement('ul');
      article.benefits.forEach(function(benefit) {
        var listItem = document.createElement('li');
        listItem.textContent = benefit;
        benefitsList.appendChild(listItem);
      });

      articleDiv.appendChild(title);
      articleDiv.appendChild(description);
      articleDiv.appendChild(waysHeader);
      articleDiv.appendChild(waysList);
      articleDiv.appendChild(benefitsHeader);
      articleDiv.appendChild(benefitsList);

      articlesDIV.appendChild(articleDiv);
    });


}

xhr.send();
