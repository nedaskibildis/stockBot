from pydoc import cli
from typing import Final
import os
from dotenv import load_dotenv
from discord import Intents, Client, Message
import responses
# Load Token
load_dotenv()
TOKEN: Final[str] = os.getenv('DISCORD_TOKEN')

# Simple Bot Setup
intents: Intents = Intents.default()
intents.message_content = True #NOQA
client: Client = Client(intents=intents)

# Message Functionality

async def sendMessage(message: Message, userMessage: str) -> None:
    if not userMessage:
        print('Message was empty because intents were not enabled probably')
        return
    
    if isPrivate := userMessage[0] == '?' : 
        userMessage = userMessage[1:]

    try: 
        response: str = responses.get_response(userMessage)
        await message.author.send(response) if isPrivate else await message.channel.send(response)
    except Exception as e:
        print(e)

# STEP 3: HANDLING THE STARTUP FOR THE BOT
@client.event
async def on_ready() -> None:
    print(f'{client.user} is now running')

@client.event
async def on_message(message: Message) -> None:
    if message.author == client.user:
        return
    
    username: str = str(message.author)
    userMessage: str = message.content
    channel: str = str(message.channel)

    print(f'[{channel}] {username}: "{userMessage}"')
    await sendMessage(message, userMessage)

def main() -> None:
    client.run(token=TOKEN)

if __name__ == '__main__':
    main()