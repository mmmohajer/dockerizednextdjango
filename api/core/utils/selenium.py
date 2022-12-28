# from selenium import webdriver
# from selenium.webdriver.chrome.options import Options
# from selenium.webdriver.common.keys import Keys
# from selenium.webdriver.common.by import By


# def get_driver():
#     options = Options()
#     options.add_argument('--no-sandbox')
#     options.add_argument('--headless')
#     options.add_argument('--disable-dev-shm-usage')
#     driver = webdriver.Chrome("/usr/bin/chromedriver", chrome_options=options)
#     return driver


# def visit_google():
#     try:
#         driver = get_driver()
#         driver.get("https://google.com")
#         test = driver.find_element(By.TAG_NAME, "input")
#         class_name = test.get_attribute("class")
#         print(f"Hello {class_name}")
#     except Exception as e:
#         print(e)
