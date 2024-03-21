import imp
from random import choice, randint
from database import getRecent

def get_response(userInput: str) -> str:
    lowered: str = userInput.lower()

    if lowered == '':
        return "Well, You're awfully Silent"
    elif '!recent' in lowered:
        recentPurchase: tuple = getRecent()
        politician, stock, buyOrSell, amount, price, datePurchased, datePublished = recentPurchase
        print(recentPurchase)
        formattedString = f'''```
The Most Recent Stock Purchase By A Member Of Congress:\n
{politician} {'bought' if buyOrSell == 'buy' else "sold"} {stock} at a Price of: {price}\n
{politician} spent {amount}!\n
This stock was purchased on {datePurchased} and made public on {datePublished}\n
        ```
        '''
        return formattedString
    else:
        return choice(['I do not understand...',
                        'What are you talking about? ',
                        ' Do you mind rephrasing that'])