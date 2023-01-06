# from cryptography.fernet import Fernet

# import base64
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
#     return key


# def encrypt_message(message="Hello World!"):
#     data = message.encode()
#     key = generate_key()
#     fernet = Fernet(key)
#     encrypted = fernet.encrypt(data)
#     print(encrypted.decode())
#     fernet = Fernet(key)
#     decrypted = fernet.decrypt(encrypted)
#     print(decrypted.decode())
