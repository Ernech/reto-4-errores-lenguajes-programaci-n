from bs4 import BeautifulSoup
import requests as req

response = req.get("https://news.ycombinator.com/news")

yc_web_page = response.text

soup = BeautifulSoup(yc_web_page,"html.parser")

articles_tag = soup.find_all(name="span", class_="titleline")
articles_texts=[]
articles_links=[]


for article_tag in articles_tag:
        articles_texts.append(article_tag.find(name="a").getText())
        articles_links.append(article_tag.find(name="a").get("href"))
       
articles_upvote= [score.getText() for score in soup.find_all(name="span", class_="score")]


print(articles_texts)
print(articles_links)
print(articles_upvote)


