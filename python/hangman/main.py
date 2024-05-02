from random import choice
from hangman_words import word_list
from hangman_art import stages

finish_game=False
lives = 6
print(stages[len(stages)-1])
random_word = choice(word_list)
display = ["_" for _ in range(len(random_word))]
#print(random_word)
while not finish_game:
    corrected_guess=False
    guess = input("Guess the letter: ").lower()
    for i in range(len(random_word)):
        if guess == random_word[i]:
            display[i]=guess
            corrected_guess = True
    if not corrected_guess: 
        lives-=1
        print(stages[lives])         
    print (" ".join(display))
    if "_" not in display:
        finish_game = True
        print("You win!")
    if not lives >0:
        print(f"You lose, the word was {random_word}")
        finish_game = True