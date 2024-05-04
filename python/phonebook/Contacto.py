class Contacto:
    contactos = []

    def __init__(self, nombre, numero):
        self.nombre = nombre
        self.numero = numero

    def agregar_contacto(self):
        self.contactos.append(self)
        print(f"El contacto {self.nombre} fue agregado con éxito")

    @classmethod
    def buscar_contacto(cls, nombre):
        encontrado = False
        for contacto in cls.contactos:
            if contacto.nombre == nombre:
                print(f"Nombre: {contacto.nombre}, Telefono: {contacto.numero}")
                encontrado = True
                break
        if not encontrado:
            print(f"Contacto no encontrado")

    @classmethod
    def eliminar_contacto(cls, nombre):
        for i, contacto in enumerate(cls.contactos):
            if contacto.nombre == nombre:
                del cls.contactos[i]
                print(f"El contacto {nombre} fue eliminado con éxito")
                return
        print(f"Contacto {nombre} no encontrado")

    @classmethod
    def modificar_contacto(cls, nombre, nuevo_nombre, nuevo_numero):
        for contacto in cls.contactos:
            if contacto.nombre == nombre:
                contacto.nombre = nuevo_nombre
                contacto.numero = nuevo_numero
                print(f"El contacto {nombre} fue modificado con éxito")
                return
        print(f"Contacto {nombre} no encontrado")
    
    @classmethod
    def ver_contactos(cls):
        for contacto in cls.contactos:
            print("=====================================")
            print(f"Nombre {contacto.nombre}")
            print(f"Numero {contacto.numero}")
            
