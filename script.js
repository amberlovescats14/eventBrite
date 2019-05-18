const eventBrite = () => {
  fetch('https://api.nasa.gov/planetary/apod?api_key=3fq4jsnL7lK5G13mOGdJAtyNbhMgZ8rE0JRz4cBy')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      
      })
}
eventBrite()

// This is the link for the documentation
//https://www.eventbrite.com/platform/api#/introduction/quick-start

// I put a screen shot of my keys in the repository as an image