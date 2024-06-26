import warnings
from g4f.client import Client

warnings.filterwarnings("ignore", category=RuntimeWarning)

client = Client()

# Inicializando a lista de mensagens com a mensagem do sistema
messages = [
    {
        "role": "system",
        "content": "Você é um renomado programador"
    },
]

# Função para adicionar uma nova mensagem do usuário e obter a resposta
def get_response(user_input, messages):
    messages.append({"role": "user", "content": user_input})
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=messages,
        provider='Koala'
    )
    assistant_response = response.choices[0].message.content
    messages.append({"role": "assistant", "content": assistant_response})
    return assistant_response, messages

# Interação com o usuário (este bloco será executado apenas ao chamar o script diretamente)
if __name__ == "__main__":
    import sys
    user_input = sys.argv[1]
    response, _ = get_response(user_input, messages)
    print(response)
