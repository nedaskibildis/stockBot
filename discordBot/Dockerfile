FROM python:3.10

WORKDIR /app

# Copy requirements and install dependencies
COPY requirements.txt .
RUN pip install -r requirements.txt

# Copy the entire StockBot directory into the Docker container
COPY . /app

# Set the PYTHONPATH environment variable to include the directory containing your modules
ENV PYTHONPATH="/app:/app/stockBot"

# Copy the rest of the application files
COPY . .

CMD ["python3.10", "discordBot.py"]
