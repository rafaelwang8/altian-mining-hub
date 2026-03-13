# Configurar Formulário de Contato

## Passos para configurar o envio de e-mails do formulário de contato:

1. **Criar conta no Formspree** (gratuito):
   - Acesse https://formspree.io
   - Clique em "Sign Up"
   - Complete o registro

2. **Criar um novo formulário**:
   - Após fazer login, clique em "Create"
   - Dê um nome ao formulário (ex: "Contact Form")
   - Configure o e-mail para receber mensagens: `contato@altian.com.br`
   - Clique em "Create"

3. **Obter o Form ID**:
   - O Formspree vai gerar um URL tipo: `https://formspree.io/f/xxxxxxxxxxxx`
   - Copie apenas a parte `xxxxxxxxxxxx` (o ID)

4. **Configurar no projeto**:
   - Copie o arquivo `.env.example` para `.env` (copiar do terminal):
     ```bash
     cp .env.example .env
     ```
   - Abra o arquivo `.env` e substitua `YOUR_FORM_ID_HERE` pelo ID que você copiou
   - Salve o arquivo

5. **Pronto!**
   - O formulário de contato agora enviará mensagens para `contato@altian.com.br`
   - Cada resposta será recebida no e-mail configurado no Formspree

**Nota**: O arquivo `.env` não deve ser commitado no Git. Ele já está incluído no `.gitignore`.
