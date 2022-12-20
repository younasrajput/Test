from flask import Flask, render_template
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)

@app.route("/bitcointalk")
def bitcointalk():
  # Send a GET request to the forum thread URL
  response = requests.get("https://bitcointalk.org/index.php?topic=232519")

  # Parse the HTML content of the page
  soup = BeautifulSoup(response.text, "html.parser")

  # Find all of the posts in the thread
  posts = soup.select("#bodyarea > div.windowbg")

  # Extract the data we want from each post
  data = []
  for post in posts:
    username = post.select_one(".poster > .bigusername").text
    post_time = post.select_one(".keyinfo > .smalltext").text
    content = post.select_one(".post").text
    data.append({
      "username": username,
      "post_time": post_time,
      "content": content
    })
  
  # Render an HTML template with the scraped data
  return render_template("bitcointalk.html", data=data)
