import imp
import sys
from random import choice, randint
import re

def get_response(userInput: str) -> str:
    lowered: str = userInput.lower()

    if lowered == '':
        return "Well, You're awfully Silent"
    elif '!recent' in lowered:
        regexPattern = r'recent(\d+)'
        match = re.search(regexPattern, lowered)
        if not match:
            return 'Error Fetching Recent'
        numRecent = int(match.group(1))
        if numRecent < 1:
            return "Error Fetching Recent Stocks, Number Must Be Larger Than 0"
#         elif numRecent > 10:
#             return 'Error Fetching Recent Stocks, Cannot Fetch More Than 10'

#         recentStocks = getRecent(numRecent)/
#         formattedString = '''
# ```
# The Most Recent Stock Purchase By A Member Of Congress:
# '''
#         for stock in recentStocks:
#             politician, stock, buyOrSell, amount, price, datePurchased, datePublished = stock
#             formattedString += f"{politician} {'bought' if buyOrSell == 'buy' else 'sold'} {stock} at a Price of: {price}\n"
#         formattedString += "```"
#         return formattedString
    else:
        return choice(['I do not understand...',
                        'What are you talking about? ',
                        ' Do you mind rephrasing that'])