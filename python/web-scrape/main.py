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
       
#articles_upvote= [score.getText() for score in soup.find_all(name="span", class_="score")]
print("**********************************HACKER NEWS**********************************")
print("===============================================================================")
for i in range (0,len(articles_tag)):
        print("----------------------------------------------------------------------")
        print(f"Title: {articles_texts[i]}")
        print(f"Link: {articles_links[i]}")
       # print(f"Upvote: {articles_upvote[i]}")


