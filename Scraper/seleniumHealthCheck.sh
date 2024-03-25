#!/bin/bash

SELENIUM_HOST="selenium"  # The hostname of the Selenium service
SELENIUM_PORT=4444        # The port used by Selenium

echo "Checking Selenium service..."
while ! nc -z $SELENIUM_HOST $SELENIUM_PORT; do
    echo "Selenium is not ready yet. Waiting..."
    sleep 1
done
echo "Selenium is up and running!"