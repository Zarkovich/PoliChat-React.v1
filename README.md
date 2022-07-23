# ToDo Polichat

## Componentes:

- [x] Barra navegação esquerda
- [x] Barra Superior
- [x] Conteiner dos chats
- [x] Local chat
- [x] Contianer conversa
- [x] Pessoa com quem está conversando
- [x] Painel de controle da conversa
- [x] Mudança de tema
- [x] Adaptividade 960, 760, 480

### Funcionalidades:

- [x] Selecionar o Chat

exemplo de text area

```javascript
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Textarea autoresize</title>
    <style>
    textarea {
        overflow: hidden;
    }
    </style>
    <script>
    function resizeTextarea(ev) {
        this.style.height = '24px';
        this.style.height = this.scrollHeight + 12 + 'px';
    }

    var te = document.querySelector('textarea');
    te.addEventListener('input', resizeTextarea);
    </script>
</head>
<body>
    <textarea></textarea>
</body>
</html>
```
