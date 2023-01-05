# import cryptography
# from cryptography.fernet import Fernet

# import base64
# import os
# from cryptography.hazmat.backends import default_backend
# from cryptography.hazmat.primitives import hashes
# from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC


# def generate_key():
#     password_provided = 'Mypasswordtogeneratekey'
#     password = password_provided.encode()

#     salt = b"ghdgtlnhbgfjhtynhygfnmyjythturt"

#     kdf = PBKDF2HMAC(algorithm=hashes.SHA256(),
#                      length=32,
#                      salt=salt,
#                      iterations=100000,
#                      backend=default_backend())
#     key = base64.urlsafe_b64encode(kdf.derive(password))
#     print(key)
#     return key


# def encrypt_message(data=b"Hello World!"):
#     key = generate_key()
#     fernet = Fernet(key)
#     print(key)
#     encrypted = fernet.encrypt(data)
#     print(encrypted)
#     print("\n\n\n\n")
#     print(encrypted.decode())
#     print("\n\n\n\n")
#     fernet = Fernet(key)
#     decrypted = fernet.decrypt(encrypted)
#     print("\n\n\n\n")
#     print("Hello World!".encode())
#     print("\n\n\n\n")
#     print(decrypted.decode())
