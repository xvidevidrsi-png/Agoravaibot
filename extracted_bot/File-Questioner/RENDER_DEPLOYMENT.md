# 🚀 Deployment Bot Zeus no Render

## ✅ Pré-requisitos
- Código do bot no GitHub (repositório público ou privado)
- Token do Discord Bot (no `.env`)
- Banco de dados PostgreSQL (se usar, senão SQLite local)
- Conta no Render.com

---

## 📋 Checklist de Preparação

✅ **main.py** - Pronto para Render
- Web server na porta 5000
- Sincronização automática de comandos slash
- Background tasks configurados

✅ **requirements.txt** - Dependências listadas
```
discord.py==2.3.2
python-dotenv==1.0.1
aiohttp==3.9.1
audioop-lts==0.2.1
psycopg2-binary==2.9.9
```

✅ **Procfile** - Configurado
```
web: python main.py
```

---

## 🔧 Variáveis de Ambiente Necessárias

Configure estas no Render:

```
DISCORD_TOKEN=seu_token_aqui
BOT_OWNER_ID=1112569306513952778  # ou seu ID
DATABASE_URL=postgresql://user:password@host:port/dbname
```

**Opcional (para SQLite):**
- Se não definir `DATABASE_URL`, o bot usa SQLite local (bot_zeus.db)

---

## 🚀 Passo a Passo no Render

### 1️⃣ **Criar novo Web Service**
- Ir em [render.com](https://render.com)
- Clicar em "New +" → "Web Service"
- Conectar repositório GitHub

### 2️⃣ **Configurar Build**
- **Name:** `bot-zeus` (ou escolha outro)
- **Region:** `São Paulo (Brazil)` (recomendado)
- **Branch:** `main`
- **Build Command:** `pip install -r requirements.txt`
- **Start Command:** `python main.py`

### 3️⃣ **Configurar Variáveis de Ambiente**
- Ir em "Environment"
- Adicionar:
  ```
  DISCORD_TOKEN=seu_token
  BOT_OWNER_ID=seu_id
  DATABASE_URL=sua_url_postgresql (opcional)
  ```

### 4️⃣ **Configurar Keep Alive** (IMPORTANTE!)
O bot precisa de um health check externo para não desligar no plano gratuito:

**Opção A: Usar Cron-Job.org (GRÁTIS)**
1. Ir em [cron-job.org](https://cron-job.org)
2. Criar nova tarefa:
   - URL: `https://seu-bot-zeus.onrender.com/ping`
   - Executar a cada: 5 minutos
3. Pronto! O endpoint `/ping` mantém o bot vivo

**Opção B: Usar UptimeRobot (GRÁTIS)**
1. Ir em [uptimerobot.com](https://uptimerobot.com)
2. Criar novo monitor:
   - URL: `https://seu-bot-zeus.onrender.com/health`
   - Interval: 5 minutos

### 5️⃣ **Deploy**
- Clicar em "Deploy"
- Aguardar conclusão (2-3 minutos)
- Verificar logs em "View Logs"

---

## ✅ Verificação Pós-Deploy

1. **Logs deve mostrar:**
   ```
   ✅ Comandos slash sincronizados globalmente!
   Bot conectado como Bot Zeus#1234
   ✅ Owner ID configurado: 1112569306513952778
   Bot pronto!
   ```

2. **Testar endpoints:**
   ```bash
   # Health check
   curl https://seu-bot-zeus.onrender.com/health
   
   # Ping
   curl https://seu-bot-zeus.onrender.com/ping
   ```

3. **Testar bot no Discord:**
   - Use `/manual` para ver todos os comandos
   - Use `/fila_1v1_mob` para testar uma fila

---

## 🐛 Troubleshooting

### Bot desligando constantemente?
→ Configure o keep-alive (Cron-Job.org ou UptimeRobot)

### Comandos slash não aparecem?
→ Verifique os logs: `✅ comandos slash sincronizados`
→ Aguarde 1-2 minutos e teste `/manual`

### Erro "DATABASE_URL inválida"?
→ Configure `DATABASE_URL` como `postgresql://...`
→ Ou remova `DATABASE_URL` para usar SQLite

### Banco de dados perdendo dados?
→ Use PostgreSQL no Render (não SQLite local)
→ SQLite local é apagado quando o container reinicia

---

## 💡 Dicas

- **Plano gratuito do Render:** O app dorme após 15 min de inatividade
  - Use keep-alive para manter rodando
  
- **PostgreSQL no Render:** Crie um database separado e use a URL fornecida

- **Monitorar status:** Use `/verificar_servidor` para debug

- **Logs ao vivo:** `render.com` → Your Service → "View Logs"

---

## 📞 Suporte

Se tiver problemas:
1. Verifique os logs no Render
2. Teste localmente: `python main.py`
3. Confirme variáveis de ambiente estão configuradas

Bot está 100% pronto para Render! 🎉
