from exponent_server_sdk import (
    DeviceNotRegisteredError,
    PushClient,
    PushMessage,
    PushServerError,
)
from requests.exceptions import ConnectionError, HTTPError


def send_push_message():
    try:
        response = PushClient().publish(
            PushMessage(to="ExponentPushToken[UE7xgQEtNjmBcnq6Rq7y4T]",
                        body="Is your jacket still available?",
                        sound="default",
                        title="Mohammad says:",
                        data={"_displayInForeground": True}))
    except PushServerError as err:
        print(err)
    except (ConnectionError, HTTPError) as err:
        print(err)
    except Exception as err:
        print(err)

    try:
        print(response)
        response.validate_response()
    except DeviceNotRegisteredError as err:
        print(err)
    except Exception as err:
        print(err)
