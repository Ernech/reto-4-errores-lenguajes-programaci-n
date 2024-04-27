from num2words import num2words

isExit=False

while not isExit:

    userInput = input("Ingrese el número entero a convertir o escriba 'exit' para terminar el programa: ")
    if userInput != 'exit':
        if userInput.lstrip("-").isnumeric():
            convertedNumber = num2words(int(userInput),lang='es')
            print(convertedNumber)
        else: 
            print("Debe ingresar un número entero")        
    else:
        isExit = True