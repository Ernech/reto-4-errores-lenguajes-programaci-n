from Contacto import Contacto

def menu():
    print("Agenda telefónica")
    print("1. Agregar Contacto")
    print("2. Buscar Contacto")
    print("3. Modificar Contacto")
    print("4. Eliminar Contacto")
    print("5. Ver contactos")
    print("6. Salir")

fin_programa = False

while not fin_programa:
    menu()
    try:
        accion = int(input("Seleccione una opción: "))
        match accion:
            case 1:
                nombre = input("Nombre del contacto: ")
                numero = input("Número del contacto: ")
                contacto = Contacto(nombre, numero)
                contacto.agregar_contacto()
            case 2:
                nombre = input("Ingrese el nombre del contacto: ")
                Contacto.buscar_contacto(nombre)
            case 3:
                nombre = input("Ingrese el nombre del contacto: ")
                nombre_nuevo = input("Ingrese el nuevo nombre del contacto: ")
                nuevo_numero = input("Ingrese el nuevo número del contacto: ")
                Contacto.modificar_contacto(nombre, nombre_nuevo, nuevo_numero)
            case 4: 
                nombre = input("Ingrese el nombre del contacto: ")
                Contacto.eliminar_contacto(nombre)
            case 5:
                print("Contactos:")
                Contacto.ver_contactos()
            case 6:
                fin_programa = True
                print("Saliendo del programa...")
                break
            case _:
                print("Ingrese una instrucción válida")
    except ValueError:
        print("Ingrese un número válido para la opción.")
