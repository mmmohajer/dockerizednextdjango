# import rsa


# def generate_rsa_key():
#     (publicKey, privateKey) = rsa.newkeys(2048)
#     print("\n\n\n\n")
#     print(publicKey.save_pkcs1('PEM'))
#     print("\n\n\n\n")
#     print(privateKey.save_pkcs1('PEM'))
#     return


# def encrypt(message, key):
#     return rsa.encrypt(message.encode('ascii'), key)


# def decrypt(ciphertext, key):
#     try:
#         return rsa.decrypt(ciphertext, key).decode('ascii')
#     except:
#         return False


# def sign(message, key):
#     return rsa.sign(message.encode('ascii'), key, 'SHA-1')


# def verify(message, signature, key):
#     try:
#         return rsa.verify(message.encode('ascii'), signature, key,) == 'SHA-1'
#     except:
#         return False


# def check_rsa_functionality(message="Hello world"):
#     encrypted_publicKey, encrypted_privateKey = rsa.newkeys(2048)

#     decrypted_publicKey = encrypted_publicKey.save_pkcs1('PEM')
#     decrypted_privateKey = encrypted_privateKey.save_pkcs1('PEM')

#     publicKey = rsa.PublicKey.load_pkcs1(decrypted_publicKey)
#     privateKey = rsa.PrivateKey.load_pkcs1(decrypted_privateKey)

#     ciphertext = encrypt(message, publicKey)
#     signature = sign(message, privateKey)
#     text = decrypt(ciphertext, privateKey)
#     if text:
#         if verify(text, signature, publicKey):
#             print(f'Message text: {text}')
#         else:
#             print('The message signature could not be verified')
#     else:
#         print(f'Unable to decrypt the message.')
#     return
