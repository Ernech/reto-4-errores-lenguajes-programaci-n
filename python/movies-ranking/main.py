import requests
import os


#Go to https://www.themoviedb.org/ adn generate your authorization token
url= 'https://api.themoviedb.org/3/movie/top_rated'
headers = {
    "accept": "application/json",
    "Authorization": "Bearer YOUR_API_TOKEN"
}

response = requests.get(url=url,headers=headers)
data = response.json()
results = data['results']
print("*************************************TOP MOVIES BY THE MOVIE DB*************************************")

for result in results:
    print("===============================================================================================")
    print(f"TITLE: {result['original_title']}")
    print(f"OVERVIEW: {result['overview']}")
    print(f"VOTE AVERAGE:{result['vote_average']}")
    print(f"VOTE COUNT:{result['vote_count']}")
