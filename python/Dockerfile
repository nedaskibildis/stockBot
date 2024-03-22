FROM python:3.10

WORKDIR /app

# Install netcat-traditional
RUN apt-get update && apt-get install -y netcat-traditional && \
    ln -sf /bin/nc.traditional /bin/nc

# Copy requirements and install dependencies
COPY requirements.txt .
RUN pip install -r requirements.txt

# Copy the health check script and make it executable
COPY seleniumHealthCheck.sh /usr/local/bin/seleniumHealthCheck.sh
RUN chmod +x /usr/local/bin/seleniumHealthCheck.sh

# Copy the rest of the application files
COPY . .

# Use health check script to wait for Selenium service
CMD ["/bin/bash", "-c", "/usr/local/bin/seleniumHealthCheck.sh && python3.10 discordBot.py"]
