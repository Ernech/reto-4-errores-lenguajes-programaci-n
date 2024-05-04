class Contacto:
    
    contactos=[]
    
    def __init__(self, nombre,numero):
        self.nombre = nombre
        self.numero = numero
    
    def agregar_contacto(self,contacto):
        self.contactos.append(contacto)
        print(f"El contacto {contacto.nombre} fue agregado con éxito")
    
    def buscar_contacto(self,nombre):
        encontrado=False
        for contacto in self.contactos:
            if contacto.nombre == nombre:
                print(f"Nombre: {contacto.nombre}, Telefono: {contacto.numero}")
                encontrado = True
                break
        if encontrado:
            pass
        else:
            print(f"Contacto no encontrado")

    