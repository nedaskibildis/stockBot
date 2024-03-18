from random import choice, randint

def get_response(userInput: str) -> str:
    lowered: str = userInput.lower()

    if lowered == '':
        return "Well, You're awfully Silent"
    elif 'hello' in lowered:
        return 'Hello There!'
    else:
        return choice(['I do not understand...',
                        'What are you talking about? ',
                        ' Do you mind rephrasing that'])