import random

from shared.constants.mock_data import first_names, last_names


def random_salt():
    # generate a random 4 digit salt
    return random.randint(1000, 9999)


def mock_user(**kwargs):
    # generate a user
    salt = kwargs.get("salt", random_salt())
    name = kwargs.get(
        "name", f"{random.choice(first_names)} {random.choice(last_names)}"
    )
    first_name, last_name = name.split(" ")

    return {
        "username": f"{first_name.lower()}{last_name.lower()}{salt}",
        "first_name": first_name,
        "last_name": last_name,
        "password": f"pass_{salt}_{last_name}",
        "email": f"{first_name.lower()}{last_name.lower()}{salt}@example.com",
    }


def random_users(num):
    # generate a list of random users
    return [mock_user() for _ in range(num)]


def mock_username():
    # generate a random username
    return f"{random.choice(first_names)}{random.choice(last_names)}{random_salt()}"
