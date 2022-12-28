from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By


def get_driver():
    options = Options()
    options.add_argument('--no-sandbox')
    options.add_argument('--headless')
    options.add_argument('--disable-dev-shm-usage')
    driver = webdriver.Chrome("/usr/bin/chromedriver", chrome_options=options)
    return driver


def visit_google():
    try:
        driver = get_driver()
        driver.get("https://reservation.frontdesksuite.ca/rcfs/mintobarrhaven/Home/Index?Culture=en&PageId=69f7cf1e-4b39-4609-9cff-fe2deeb4c231&ButtonId=00000000-0000-0000-0000-000000000000")
        test = driver.find_element(By.TAG_NAME, "input")
        class_name = test.get_attribute("class")
        print(f"Hello {class_name}")
    except Exception as e:
        print(e)
